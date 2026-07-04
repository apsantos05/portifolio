import type { ContactInput } from './validation'
import { sendEmail } from './email'
import { buildWhatsappUrl } from './whatsapp'
import { projectTypeLabel } from '@/content/contact'

/**
 * Orquestrador do fluxo de contato (SERVER-ONLY — importa provedor de e-mail).
 *   validar (já feito) → enviar e-mail (provedor; dormente sem key) → gerar link do WhatsApp.
 * O WhatsApp é o próximo passo do fluxo e independe do status do e-mail — assim o lead
 * nunca se perde, mesmo antes do Resend estar ativo.
 */

/** Corpo do e-mail (o provedor apenas transporta). */
function buildEmailBody(data: ContactInput): string {
  return [
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    data.company ? `Empresa: ${data.company}` : null,
    data.projectType ? `Tipo de projeto: ${projectTypeLabel(data.projectType)}` : null,
    '',
    'Mensagem:',
    data.message,
  ]
    .filter(Boolean)
    .join('\n')
}

/** Mensagem organizada para o WhatsApp, a partir dos dados do formulário. */
export function buildContactWhatsappMessage(data: ContactInput): string {
  return [
    'Olá, Arthur! Vi seu portfólio e gostaria de conversar sobre um projeto.',
    '',
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    data.company ? `Empresa: ${data.company}` : null,
    data.projectType ? `Tipo de projeto: ${projectTypeLabel(data.projectType)}` : null,
    `Mensagem: ${data.message}`,
  ]
    .filter(Boolean)
    .join('\n')
}

export type ContactOutcome = {
  ok: boolean
  emailDelivered: boolean
  whatsappUrl: string
  error?: string
}

export async function handleContact(data: ContactInput): Promise<ContactOutcome> {
  // 1. E-mail (quando o provedor estiver configurado; hoje retorna skipped).
  const email = await sendEmail({
    subject: `Novo contato — ${data.name}${
      data.projectType ? ` · ${projectTypeLabel(data.projectType)}` : ''
    }`,
    text: buildEmailBody(data),
    replyTo: data.email,
  })

  if (email.error) {
    // Erro real de provedor não bloqueia o WhatsApp (o lead ainda chega), mas fica logado.
    console.error('[contato] falha no envio de e-mail:', email.error)
  }

  // 2. WhatsApp — fecho do fluxo, sempre disponível.
  return {
    ok: true,
    emailDelivered: email.delivered,
    whatsappUrl: buildWhatsappUrl(buildContactWhatsappMessage(data)),
    error: email.error,
  }
}
