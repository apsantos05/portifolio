import { CalendarClock, Users, Sparkles, FolderKanban } from 'lucide-react'
import type { CaseStudy } from '../types'

/** AYHub — plataforma para agências de social media (DISCOVERY §7.3). Offline. */
export const ayhub: CaseStudy = {
  slug: 'ayhub',
  name: 'AYHub',
  tagline:
    'Plataforma para agências de social media: gestão de clientes, agendamento de posts e ideias com IA.',
  category: 'SaaS · MarTech · IA',
  year: '2024',
  stage: 'prototype',
  client: 'Agências de social media',
  role: 'Concepção e desenvolvimento full stack — sozinho',

  highlights: ['Multi-cliente', 'IA treinada para ideias', 'Workflow real de agência'],

  context:
    'Agências de social media gerenciam vários clientes ao mesmo tempo — cada um com seu calendário, sua identidade e seu volume de conteúdo. Sem uma central, isso vira um caos de planilhas, mensagens e arquivos soltos.',

  challenge:
    'Reunir a operação multi-cliente de uma agência num único lugar, e ainda acelerar a parte mais difícil do dia a dia: ter ideias de conteúdo de forma consistente.',

  solution:
    'Criei uma plataforma que centraliza clientes, organiza o agendamento de posts e usa uma IA treinada para gerar ideias de conteúdo — tirando a agência do improviso e colocando-a num fluxo previsível.',

  features: [
    { title: 'Gestão multi-cliente', description: 'Todos os clientes da agência organizados num só painel.', icon: Users },
    { title: 'Agendamento de posts', description: 'Calendário de conteúdo claro por cliente.', icon: CalendarClock },
    { title: 'Ideias com IA', description: 'IA treinada que gera ideias de conteúdo sob demanda.', icon: Sparkles },
    { title: 'Organização por projeto', description: 'Cada cliente com seu espaço e seu fluxo.', icon: FolderKanban },
  ],

  process: [
    { title: 'Entendimento do fluxo', description: 'Mapeei a rotina real de uma agência de social media.' },
    { title: 'Arquitetura multi-cliente', description: 'Estruturei a plataforma para escalar por cliente.' },
    { title: 'Integração de IA', description: 'Treinei e integrei a geração de ideias ao produto.' },
    { title: 'Desenvolvimento full stack', description: 'Construí a solução ponta a ponta, sozinho.' },
  ],

  resultsNote:
    'Projeto autoral, atualmente offline. Material visual em preparação.',

  techStack: [
    { label: 'Front-end', description: 'Painel da agência.', items: [{ name: 'Next.js' }, { name: 'TypeScript' }] },
    { label: 'Back-end', description: 'Núcleo multi-cliente.', items: [{ name: 'Node.js' }, { name: 'REST APIs' }] },
    { label: 'IA', description: 'Geração de ideias.', items: [{ name: 'LLMs' }, { name: 'IA treinada' }] },
  ],

  cover: { src: '', alt: 'AYHub — visão geral da plataforma', aspect: 'wide' },
  gallery: [
    { src: '', alt: 'AYHub — painel multi-cliente', aspect: 'video', caption: 'Painel multi-cliente' },
    { src: '', alt: 'AYHub — calendário de posts', aspect: 'video', caption: 'Calendário de conteúdo' },
  ],
}
