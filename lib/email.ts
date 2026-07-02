import { Resend } from 'resend'
import { site } from './site'

/**
 * Camada de e-mail (Resend). Ponto de extensão único.
 * Se RESEND_API_KEY não estiver definida, as funções retornam `skipped` (não é erro):
 * o site continua funcionando e o envio real passa a ocorrer assim que a chave existir.
 */
let client: Resend | null | undefined

function getClient(): Resend | null {
  if (client !== undefined) return client
  const key = process.env.RESEND_API_KEY
  client = key ? new Resend(key) : null
  return client
}

// Padrão usa o remetente de teste do Resend (onboarding@resend.dev), que envia para o
// e-mail da própria conta. Troque por um domínio verificado via env quando tiver.
const FROM = process.env.CONTACT_FROM_EMAIL || 'Arthur Santos <onboarding@resend.dev>'
const TO = process.env.CONTACT_TO_EMAIL || site.email

export type EmailResult = { sent: boolean; skipped?: boolean; error?: string }

type ContactPayload = {
  name: string
  email: string
  company?: string
  projectType?: string
  message: string
}

export async function sendContactEmail(data: ContactPayload): Promise<EmailResult> {
  const resend = getClient()
  if (!resend) return { sent: false, skipped: true }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject: `Novo contato — ${data.name}${data.projectType ? ` · ${data.projectType}` : ''}`,
      text: [
        `Nome: ${data.name}`,
        `E-mail: ${data.email}`,
        data.company ? `Empresa: ${data.company}` : null,
        data.projectType ? `Tipo de projeto: ${data.projectType}` : null,
        '',
        'Mensagem:',
        data.message,
      ]
        .filter(Boolean)
        .join('\n'),
    })
    if (error) return { sent: false, error: error.message }
    return { sent: true }
  } catch {
    return { sent: false, error: 'exception' }
  }
}

export async function addNewsletterContact(email: string): Promise<EmailResult> {
  const resend = getClient()
  if (!resend) return { sent: false, skipped: true }

  const audienceId = process.env.RESEND_AUDIENCE_ID
  try {
    if (audienceId) {
      await resend.contacts.create({ email, audienceId, unsubscribed: false })
    } else {
      // Sem audiência configurada → notifica o dono do site.
      await resend.emails.send({
        from: FROM,
        to: TO,
        subject: 'Novo inscrito na newsletter',
        text: `Novo e-mail inscrito: ${email}`,
      })
    }
    return { sent: true }
  } catch {
    return { sent: false, error: 'exception' }
  }
}
