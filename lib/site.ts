/**
 * Configuração central do site — fonte única para metadados, navegação e contato.
 * ⚑ PENDÊNCIAS (DISCOVERY.md §13): domínio e handles reais a confirmar.
 *    Os valores marcados com TODO são placeholders seguros até a confirmação.
 */
export const site = {
  name: 'Arthur Santos',
  role: 'Desenvolvedor Full Stack',
  // ⚑ TODO: confirmar domínio definitivo
  url: 'https://arthursantos.dev',
  locale: 'pt-BR',
  // Frase-síntese do DISCOVERY.md §2
  tagline: 'Transformo a história de um negócio em um produto digital que funciona.',
  description:
    'Arthur Santos é desenvolvedor full stack. Sites, sistemas e aplicações web sob medida — do problema à solução que realmente funciona.',
  // ⚑ Fotos: salvar em public/ e apontar aqui. Enquanto null, os frames mostram
  //    um placeholder premium (sem blueprint). A troca é só de caminho — 1 linha.
  photo: null as string | null, // Hero (Início) — ex.: '/arthur-santos.jpg'
  photoAbout: null as string | null, // Sobre — ex.: '/arthur-santos-2.jpg'
  email: 'contato@arthursantos.dev', // ⚑ TODO: e-mail real
  // ⚑ WhatsApp: DDI+DDD+número, só dígitos. Ex.: '5599999999999'. Vazio = botão cai no contato.
  whatsapp: '',
  location: 'Brasil',
  social: {
    github: 'https://github.com/apsantos05',
    // ⚑ TODO: handles reais — vazio = oculto na UI (evita link quebrado)
    linkedin: '',
    instagram: '',
  },
} as const

/** Link do WhatsApp com mensagem pré-preenchida. Cai no contato se o número não estiver configurado. */
export function getWhatsappUrl(
  message = 'Olá, Arthur! Vim pelo seu site e quero conversar sobre um projeto.',
): string {
  const digits = site.whatsapp.replace(/\D/g, '')
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : '/#contato'
}

/** Há número de WhatsApp configurado? (para abrir em nova aba só quando for link real) */
export function hasWhatsapp(): boolean {
  return site.whatsapp.replace(/\D/g, '').length > 0
}
