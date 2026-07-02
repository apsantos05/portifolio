import type { TechCategory } from './types'

/**
 * Tecnologias — apresentadas por VALOR, não como mural de logos (DISCOVERY §Tecnologias).
 * Agrupadas por camada, com o porquê de cada escolha.
 */
export const tech: TechCategory[] = [
  {
    label: 'Front-end',
    description: 'Interfaces rápidas, acessíveis e agradáveis de usar.',
    items: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
    ],
  },
  {
    label: 'Back-end',
    description: 'Lógica de negócio sólida, segura e escalável.',
    items: [
      { name: 'Node.js' },
      { name: 'REST APIs' },
      { name: 'Route Handlers' },
      { name: 'Autenticação' },
    ],
  },
  {
    label: 'Dados',
    description: 'Persistência confiável e consultas eficientes.',
    items: [{ name: 'PostgreSQL' }, { name: 'Supabase' }, { name: 'Prisma' }],
  },
  {
    label: 'Infra & Deploy',
    description: 'No ar com performance, observabilidade e CI.',
    items: [{ name: 'Vercel' }, { name: 'Git' }, { name: 'CI/CD' }],
  },
  {
    label: 'IA aplicada',
    description: 'Inteligência que faz trabalho real dentro do produto.',
    items: [{ name: 'LLMs' }, { name: 'APIs de IA' }, { name: 'Automação' }],
  },
]
