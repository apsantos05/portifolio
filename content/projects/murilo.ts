import { Lock, Workflow, Database } from 'lucide-react'
import type { CaseStudy } from '../types'

/**
 * Projetos Murilo Manzano — PRIVADOS/SOB SIGILO (DISCOVERY §7.4).
 * Case anonimizado: foco no TIPO de problema, sem expor dados, marca ou telas.
 * Aprovado pelo cliente em 2026-07-02 tratar assim até liberar material.
 */
export const murilo: CaseStudy = {
  slug: 'projetos-privados',
  name: 'Projetos privados',
  tagline: 'Sistemas internos sob medida para um ecossistema de educação e conteúdo.',
  category: 'Sistemas internos · Confidencial',
  year: '2025',
  stage: 'private',
  client: 'Ecossistema de educação e conteúdo (sob sigilo)',
  role: 'Desenvolvimento full stack',
  confidential: true,

  highlights: ['Sob sigilo', 'Sistemas internos', 'Operação real'],

  context:
    'Faço parte do desenvolvimento de sistemas internos de um ecossistema de educação e conteúdo. Por acordo de confidencialidade, este case é apresentado de forma anonimizada — sem telas, dados ou marcas.',

  challenge:
    'Dar suporte de software a uma operação real e em movimento: ferramentas internas que precisam ser confiáveis, organizadas e integradas ao dia a dia da equipe.',

  solution:
    'Desenvolvo e mantenho sistemas sob medida para essa operação — incluindo gestão de relacionamento e fluxos internos —, sempre com foco em confiabilidade e organização. Os detalhes específicos permanecem privados.',

  features: [
    { title: 'Sistemas internos', description: 'Ferramentas sob medida para a operação da equipe.', icon: Workflow },
    { title: 'Gestão de dados', description: 'Organização de informações e relacionamento.', icon: Database },
    { title: 'Confidencialidade', description: 'Tudo tratado sob acordo de sigilo.', icon: Lock },
  ],

  process: [
    { title: 'Entendimento da operação', description: 'Imersão no fluxo real da equipe.' },
    { title: 'Desenvolvimento contínuo', description: 'Evolução dos sistemas conforme a necessidade.' },
  ],

  resultsNote:
    'Case confidencial. Detalhes, métricas e telas podem ser compartilhados mediante autorização.',

  techStack: [
    { label: 'Stack', description: 'Base moderna e confiável.', items: [{ name: 'Next.js' }, { name: 'TypeScript' }, { name: 'Node.js' }] },
  ],

  cover: { src: '', alt: 'Projetos privados — case confidencial', aspect: 'wide' },
  gallery: [],
}
