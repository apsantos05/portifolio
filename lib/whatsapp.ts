/**
 * WhatsApp — fonte ÚNICA de verdade.
 * Aqui ficam: o número, as mensagens padrão e a geração do link.
 * TODOS os CTAs de WhatsApp do site consomem este helper (nada de link espalhado).
 */

/** Número no formato wa.me (só dígitos: DDI+DDD+número). +55 (17) 99230-1681 */
export const WHATSAPP_NUMBER = '5517992301681'

/** Mensagens padrão reutilizáveis. */
export const whatsappMessages = {
  /** CTA genérico. */
  default: 'Olá, Arthur! Vim pelo seu site e quero conversar sobre um projeto.',
  /** CTA do Hero — solicitação de orçamento. */
  quote:
    'Olá, Arthur! Vi seu portfólio e gostaria de solicitar um orçamento para um projeto. Quando puder, podemos conversar?',
} as const

const digitsOnly = (value: string) => value.replace(/\D/g, '')

/** Há número de WhatsApp configurado? */
export function hasWhatsapp(): boolean {
  return digitsOnly(WHATSAPP_NUMBER).length > 0
}

/**
 * Gera o link oficial do WhatsApp com a mensagem pré-preenchida (URL-encoded).
 * Sem número configurado, cai no #contato — nunca gera link quebrado.
 */
export function buildWhatsappUrl(message: string = whatsappMessages.default): string {
  const digits = digitsOnly(WHATSAPP_NUMBER)
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : '/#contato'
}
