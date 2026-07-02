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
  // ⚑ Foto: salvar em public/arthur-santos.jpg e trocar para o caminho.
  //    Enquanto for null, o Hero mostra um fallback autoral (monograma).
  photo: null as string | null,
  email: 'contato@arthursantos.dev', // ⚑ TODO: e-mail real
  whatsapp: '', // ⚑ TODO: opcional
  location: 'Brasil',
  social: {
    github: 'https://github.com/apsantos05',
    // ⚑ TODO: handles reais — vazio = oculto na UI (evita link quebrado)
    linkedin: '',
    instagram: '',
  },
} as const
