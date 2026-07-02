import { Gavel, Users, ClipboardList, Timer } from 'lucide-react'
import type { CaseStudy } from '../types'

/** Arrematex — projeto de virada (DISCOVERY §7.2). Offline; case por narrativa + mockups. */
export const arrematex: CaseStudy = {
  slug: 'arrematex',
  name: 'Arrematex',
  tagline: 'Sistema de gestão para leilões de gado — do cadastro do lote ao arremate.',
  category: 'Sistema de gestão · Agronegócio',
  year: '2024',
  stage: 'prototype',
  client: 'Operações de leilão de gado',
  role: 'Concepção e desenvolvimento full stack — sozinho',

  highlights: ['O projeto que elevou meu nível', 'Domínio de negócio complexo', 'Full stack solo'],

  context:
    'O leilão de gado é uma operação intensa: muitos lotes, participantes e lances acontecendo em ritmo acelerado. Boa parte dessa gestão ainda vive em papel e planilhas, sujeita a erro e retrabalho.',

  challenge:
    'Organizar um fluxo com muitas partes móveis — lotes, participantes, lances e resultados — num sistema claro o suficiente para ser usado sob a pressão do pregão, sem perder informação.',

  solution:
    'Desenvolvi um sistema de gestão que estrutura toda a operação do leilão em um só lugar: cadastro de lotes, controle de participantes e acompanhamento do processo de arremate. Foi o projeto que me fez subir de nível como desenvolvedor.',

  features: [
    { title: 'Gestão de lotes', description: 'Cadastro e organização dos lotes do leilão.', icon: ClipboardList },
    { title: 'Controle de participantes', description: 'Quem está no pregão e o que cada um movimenta.', icon: Users },
    { title: 'Fluxo de arremate', description: 'Acompanhamento do processo de lances até o resultado.', icon: Gavel },
    { title: 'Operação em tempo real', description: 'Feito para o ritmo acelerado do pregão.', icon: Timer },
  ],

  process: [
    { title: 'Imersão no domínio', description: 'Entendi a fundo como funciona a operação de um leilão de gado.' },
    { title: 'Modelagem do sistema', description: 'Estruturei lotes, participantes e o fluxo de arremate.' },
    { title: 'Desenvolvimento full stack', description: 'Construí a solução ponta a ponta, sozinho.' },
  ],

  resultsNote:
    'Projeto autoral, atualmente offline. Marco pessoal de amadurecimento técnico. Material visual em preparação.',

  techStack: [
    { label: 'Front-end', description: 'Interface da operação.', items: [{ name: 'React' }, { name: 'TypeScript' }] },
    { label: 'Back-end', description: 'Regras do leilão.', items: [{ name: 'Node.js' }, { name: 'REST APIs' }] },
    { label: 'Dados', description: 'Persistência da operação.', items: [{ name: 'Banco relacional' }] },
  ],

  cover: { src: '', alt: 'Arrematex — visão geral do sistema', aspect: 'wide' },
  gallery: [
    { src: '', alt: 'Arrematex — gestão de lotes', aspect: 'video', caption: 'Gestão de lotes' },
    { src: '', alt: 'Arrematex — pregão em andamento', aspect: 'video', caption: 'Pregão em andamento' },
  ],
}
