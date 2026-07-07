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
  photo: '/arthur-santos.png' as string | null, // Hero (Início)
  photoAbout: '/foto-sobre.png' as string | null, // Sobre
  email: 'arthurpsantos05@gmail.com',
  // WhatsApp centralizado em lib/whatsapp.ts (número, mensagens e geração de link).
  location: 'Brasil',
  social: {
    github: 'https://github.com/apsantos05',
    linkedin: 'https://www.linkedin.com/in/arthurpsantos/',
    // ⚑ TODO: handle real — vazio = oculto na UI (evita link quebrado)
    instagram: '',
  },
} as const
