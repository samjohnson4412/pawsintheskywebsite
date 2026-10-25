/**
 * Paws In The Sky — edge Worker.
 *
 * Static pages are served from ./dist without ever reaching this code
 * (see `run_worker_first` in wrangler.jsonc). The only route here is the
 * quote-request form, which is emailed through Cloudflare Email Routing.
 *
 * The form works with JavaScript off: it is a plain POST that ends in a
 * redirect, so there is nothing on the page to break.
 */

interface SendEmail {
  send(message: {
    to?: string;
    from: { email: string; name: string };
    replyTo?: string;
    subject: string;
    text: string;
  }): Promise<unknown>;
}

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  INQUIRY_EMAIL: SendEmail;
  INQUIRY_FROM: string;
  INQUIRY_TO: string;
}

/** Fields the form sends, in the order they should read in the email. */
const FIELDS: [name: string, label: string][] = [
  ['name', 'Name'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['role', 'They are'],
  ['from', 'From'],
  ['to', 'To'],
  ['when', 'When'],
  ['species', 'Species'],
  ['breed', 'Breed'],
  ['count', 'Number of pets'],
  ['age', 'Age on travel day'],
  ['weight', 'Weight'],
  ['handoff', 'Handoff'],
  ['health_cert', 'Health certificate'],
  ['source', 'Heard about us'],
  ['notes', 'Notes'],
];

const MAX_FIELD = 4000;
// Bots post instantly; people take longer than this to fill the form in.
const MIN_FILL_MS = 3000;

function redirect(url: URL, path: string): Response {
  return Response.redirect(new URL(path, url.origin).href, 303);
}

async function handleInquiry(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  if (request.method !== 'POST') return redirect(url, '/quote/');

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(url, '/quote/?error=1');
  }

  const get = (key: string) => String(form.get(key) ?? '').trim().slice(0, MAX_FIELD);

  // Honeypot: hidden from people, filled in by bots. Pretend it worked.
  if (get('website')) return redirect(url, '/quote/thanks/');
  const started = Number(get('t'));
  if (Number.isFinite(started) && started > 0 && Date.now() - started < MIN_FILL_MS) {
    return redirect(url, '/quote/thanks/');
  }

  const name = get('name');
  const email = get('email');
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return redirect(url, '/quote/?error=missing');
  }

  const lines = FIELDS.map(([key, label]) => [label, get(key)] as const)
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`);

  const page = get('page');
  const text = [
    'New quote request from the website.',
    '',
    ...lines,
    '',
    page ? `Sent from: ${page}` : '',
    `Received: ${new Date().toISOString()}`,
    '',
    'Reply to this email to answer them directly.',
  ].join('\n');

  const route = [get('from'), get('to')].filter(Boolean).join(' → ');
  const pet = [get('breed') || get('species'), route].filter(Boolean).join(', ');
  // Strip line breaks so nothing in the subject can inject a header.
  const subject = `Quote request — ${name}${pet ? ` (${pet})` : ''}`.replace(/[\r\n]+/g, ' ').slice(0, 200);

  try {
    await env.INQUIRY_EMAIL.send({
      to: env.INQUIRY_TO,
      from: { email: env.INQUIRY_FROM, name: 'Paws In The Sky website' },
      replyTo: email,
      subject,
      text,
    });
  } catch (err) {
    console.error('inquiry send failed', err);
    return redirect(url, '/quote/?error=send');
  }

  return redirect(url, '/quote/thanks/');
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/quote' || pathname === '/api/quote/') {
      return handleInquiry(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
