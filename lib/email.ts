import { Resend } from 'resend'

/**
 * Camada de e-mail — arquitetura de PROVIDER, trocável sem tocar em componentes.
 * Hoje: Resend (dormente até a RESEND_API_KEY existir). Amanhã: SendGrid, SES, SMTP —
 * basta implementar `EmailProvider` e apontar `getProvider()`. Zero mudança na UI/fluxo.
 */

// ── Contratos (interfaces / tipos) ────────────────────────────────
export type EmailPayload = {
  subject: string
  text: string
  html?: string
  to?: string
  from?: string
  replyTo?: string
}

export type EmailResult = {
  /** entregue ao provedor com sucesso */
  delivered: boolean
  /** provedor não configurado → o fluxo segue sem erro */
  skipped?: boolean
  error?: string
}

export interface EmailProvider {
  readonly name: string
  isConfigured(): boolean
  send(payload: EmailPayload): Promise<EmailResult>
}

// ── Configuração compartilhada ────────────────────────────────────
// Remetente padrão: onboarding@resend.dev (só entrega ao e-mail da conta Resend).
// Destinatário padrão: e-mail pessoal — trocar por env (CONTACT_TO_EMAIL) sem tocar em código.
const DEFAULT_FROM = process.env.CONTACT_FROM_EMAIL || 'Portfólio Arthur Santos <onboarding@resend.dev>'
const DEFAULT_TO = process.env.CONTACT_TO_EMAIL || 'arthurpsantos05@gmail.com'

// ── Provider: Resend ──────────────────────────────────────────────
let resendClient: Resend | null | undefined
function getResendClient(): Resend | null {
  if (resendClient !== undefined) return resendClient
  const key = process.env.RESEND_API_KEY
  resendClient = key ? new Resend(key) : null
  return resendClient
}

const resendProvider: EmailProvider = {
  name: 'resend',
  isConfigured: () => Boolean(process.env.RESEND_API_KEY),
  async send(payload) {
    const client = getResendClient()
    if (!client) return { delivered: false, skipped: true }
    try {
      const { error } = await client.emails.send({
        from: payload.from ?? DEFAULT_FROM,
        to: payload.to ?? DEFAULT_TO,
        replyTo: payload.replyTo,
        subject: payload.subject,
        text: payload.text,
        ...(payload.html ? { html: payload.html } : {}),
      })
      if (error) return { delivered: false, error: error.message }
      return { delivered: true }
    } catch {
      return { delivered: false, error: 'exception' }
    }
  },
}

/** Provedor ativo. Trocar aqui = trocar em todo o site. */
function getProvider(): EmailProvider {
  return resendProvider
}

/**
 * Envia um e-mail pelo provedor ativo, com FALLBACK elegante:
 * sem provedor configurado, apenas registra um aviso e segue (skipped) — não quebra o fluxo.
 */
export async function sendEmail(payload: EmailPayload): Promise<EmailResult> {
  const provider = getProvider()
  if (!provider.isConfigured()) {
    console.warn(
      `[email] provedor "${provider.name}" não configurado — e-mail não enviado ` +
        '(defina RESEND_API_KEY no ambiente). O restante do fluxo continua normalmente.',
    )
    return { delivered: false, skipped: true }
  }
  return provider.send(payload)
}

// ── Newsletter (mesma base de provedor) ───────────────────────────
export async function addNewsletterContact(email: string): Promise<EmailResult> {
  const client = getResendClient()
  if (!client) return { delivered: false, skipped: true }

  const audienceId = process.env.RESEND_AUDIENCE_ID
  try {
    if (audienceId) {
      await client.contacts.create({ email, audienceId, unsubscribed: false })
    } else {
      await client.emails.send({
        from: DEFAULT_FROM,
        to: DEFAULT_TO,
        subject: 'Novo inscrito na newsletter',
        text: `Novo e-mail inscrito: ${email}`,
      })
    }
    return { delivered: true }
  } catch {
    return { delivered: false, error: 'exception' }
  }
}
