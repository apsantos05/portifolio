import type { ContactInput } from './validation'
import { sendEmail } from './email'
import { buildWhatsappUrl } from './whatsapp'
import { projectTypeLabel } from '@/content/contact'

/**
 * Orquestrador do fluxo de contato (SERVER-ONLY — importa o provedor de e-mail).
 *   validar (já feito) → enviar e-mail (Resend) → gerar link do WhatsApp.
 * O WhatsApp é o próximo passo do fluxo e independe do status do e-mail — assim o lead
 * nunca se perde, mesmo se o provedor falhar.
 */

/** Metadados da requisição (capturados na server action). */
export type ContactMeta = {
  submittedAt: string
  ip?: string | null
  userAgent?: string | null
}

/** Escapa HTML para inserir valores do formulário no e-mail com segurança. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Corpo em texto puro (fallback para clientes sem HTML). */
function buildEmailText(data: ContactInput, meta: ContactMeta): string {
  return [
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    data.company ? `Empresa: ${data.company}` : null,
    data.projectType ? `Tipo de projeto: ${projectTypeLabel(data.projectType)}` : null,
    '',
    'Mensagem:',
    data.message,
    '',
    `Data/Hora: ${meta.submittedAt}`,
    meta.ip ? `IP: ${meta.ip}` : null,
    meta.userAgent ? `User Agent: ${meta.userAgent}` : null,
  ]
    .filter(Boolean)
    .join('\n')
}

/** Linha de dado (rótulo + valor) do e-mail HTML. */
function htmlRow(label: string, value?: string | null): string {
  if (!value) return ''
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #e6e8ee;color:#6b7280;font-size:13px;width:150px;vertical-align:top;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid #e6e8ee;color:#111827;font-size:14px;">${escapeHtml(value)}</td>
  </tr>`
}

/** E-mail em HTML — layout limpo e profissional, compatível com clientes de e-mail. */
function buildEmailHtml(data: ContactInput, meta: ContactMeta): string {
  const metaLine = (label: string, value?: string | null) =>
    value ? `<div><strong style="color:#6b7280;">${label}:</strong> ${escapeHtml(value)}</div>` : ''

  return `<div style="background:#f4f5f7;padding:24px;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e6e8ee;">
    <tr><td style="background:#0c1322;padding:22px 28px;">
      <div style="color:#84a3da;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Portfólio · Arthur Santos</div>
      <div style="color:#eef1f7;font-size:20px;font-weight:700;margin-top:6px;">Novo contato pelo site</div>
    </td></tr>
    <tr><td style="padding:24px 28px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${htmlRow('Nome', data.name)}
        ${htmlRow('E-mail', data.email)}
        ${htmlRow('Empresa', data.company)}
        ${htmlRow('Tipo de projeto', projectTypeLabel(data.projectType))}
      </table>
      <div style="margin-top:18px;color:#6b7280;font-size:13px;">Mensagem</div>
      <div style="margin-top:8px;padding:14px 16px;background:#f7f8fa;border-left:3px solid #84a3da;border-radius:8px;color:#111827;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
    </td></tr>
    <tr><td style="padding:16px 28px 24px;border-top:1px solid #e6e8ee;color:#9ca3af;font-size:12px;line-height:1.8;">
      ${metaLine('Data/Hora', meta.submittedAt)}
      ${metaLine('IP', meta.ip)}
      ${metaLine('User Agent', meta.userAgent)}
    </td></tr>
  </table>
  <div style="max-width:560px;margin:12px auto 0;color:#9ca3af;font-size:11px;text-align:center;">Responda a este e-mail para falar diretamente com ${escapeHtml(data.name)}.</div>
</div>`
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

export async function handleContact(
  data: ContactInput,
  meta: ContactMeta,
): Promise<ContactOutcome> {
  // 1. E-mail (Resend, quando a RESEND_API_KEY existir; senão, skipped sem erro).
  const email = await sendEmail({
    subject: `Novo contato — ${data.name}${
      data.projectType ? ` · ${projectTypeLabel(data.projectType)}` : ''
    }`,
    text: buildEmailText(data, meta),
    html: buildEmailHtml(data, meta),
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
