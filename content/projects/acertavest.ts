import { Brain, Target, LineChart, BookOpenCheck, Gauge, ShieldCheck } from 'lucide-react'
import type { CaseStudy } from '../types'

/**
 * AcertaVest — CARRO-CHEFE (DISCOVERY §7.1). Único projeto ao vivo.
 * Este objeto valida o contrato CaseStudy ponta a ponta.
 */
export const acertavest: CaseStudy = {
  slug: 'acertavest',
  name: 'AcertaVest',
  tagline:
    'Plataforma SaaS com IA para preparação de vestibulares e ENEM, focada em estudantes de Medicina.',
  category: 'SaaS · EdTech · IA',
  year: '2025',
  stage: 'live',
  client: 'Estudantes de Medicina e vestibulandos',
  liveUrl: 'https://acerto-tau.vercel.app',
  role: 'Concepção, design e desenvolvimento full stack — sozinho, ponta a ponta',

  highlights: [
    'Produto no ar, em produção',
    'IA aplicada ao estudo',
    'Do zero ao deploy, solo',
  ],

  context:
    'A preparação para vestibulares de Medicina é uma das mais competitivas do país. O estudante se afoga em conteúdo genérico, sem saber onde está o próprio gargalo nem como priorizar o tempo — que é o recurso mais escasso na jornada.',

  challenge:
    'Como transformar horas de estudo desorganizado em um plano claro e personalizado? O desafio central não era mostrar conteúdo — era usar inteligência para entender o desempenho de cada aluno e direcionar o esforço para onde ele realmente rende.',

  solution:
    'Construí uma plataforma SaaS onde a IA é o motor: ela apoia a geração e a correção de questões e personaliza a rota de estudo com base no desempenho. Uma experiência rápida, focada e feita para reduzir a ansiedade de "por onde começar".',

  features: [
    {
      title: 'Motor de IA para estudo',
      description:
        'Geração e correção de questões apoiadas por IA, integradas ao fluxo de estudo — o coração técnico do produto.',
      icon: Brain,
    },
    {
      title: 'Trilha personalizada',
      description:
        'A plataforma direciona o esforço para os pontos fracos de cada aluno, priorizando o que rende mais.',
      icon: Target,
    },
    {
      title: 'Acompanhamento de desempenho',
      description:
        'Métricas de evolução que mostram, de forma clara, onde o estudante está e para onde ir.',
      icon: LineChart,
    },
    {
      title: 'Foco no ENEM e Medicina',
      description:
        'Conteúdo e experiência desenhados para o público mais exigente do vestibular.',
      icon: BookOpenCheck,
    },
    {
      title: 'Performance de produto real',
      description:
        'Construído em Next.js 15 e React 19, com carregamento rápido e experiência fluida.',
      icon: Gauge,
    },
    {
      title: 'Base segura e escalável',
      description:
        'Arquitetura pensada para crescer — do MVP a uma base de milhares de estudantes.',
      icon: ShieldCheck,
    },
  ],

  process: [
    {
      title: 'Definição do problema',
      description:
        'Mapeei a real dor do vestibulando de Medicina: não é falta de conteúdo, é falta de direção.',
    },
    {
      title: 'Arquitetura e IA',
      description:
        'Desenhei a arquitetura do SaaS e como a camada de IA se integraria ao fluxo de estudo.',
    },
    {
      title: 'Construção full stack',
      description:
        'Front-end, back-end e integração de IA — desenvolvidos solo, em ciclos curtos.',
    },
    {
      title: 'Deploy em produção',
      description: 'Publicação na Vercel, com o produto acessível e funcionando ao vivo.',
    },
  ],

  // Sem métricas públicas de uso ainda — honestidade como estratégia (DISCOVERY §13.2)
  resultsNote:
    'Produto em produção e evolução. Métricas de uso serão publicadas conforme a base cresce — sem números inflados.',

  techStack: [
    {
      label: 'Front-end',
      description: 'Interface rápida e moderna.',
      items: [
        { name: 'Next.js 15' },
        { name: 'React 19' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      label: 'Back-end',
      description: 'Lógica e APIs do produto.',
      items: [{ name: 'Node.js' }, { name: 'API Routes' }, { name: 'REST APIs' }],
    },
    {
      label: 'IA',
      description: 'O motor do produto.',
      items: [{ name: 'LLMs' }, { name: 'Geração & correção' }],
    },
    {
      label: 'Deploy',
      description: 'No ar, em produção.',
      items: [{ name: 'Vercel' }],
    },
  ],

  cover: {
    src: '/projects/acertavest/cover.png',
    alt: 'AcertaVest — página inicial da plataforma, com o simulado em destaque e o acervo de materiais',
    aspect: 'wide',
  },
  gallery: [
    {
      src: '/projects/acertavest/login.png',
      alt: 'AcertaVest — tela de login da plataforma',
      aspect: 'video',
      caption: 'Login',
    },
    {
      src: '/projects/acertavest/biblioteca.png',
      alt: 'AcertaVest — biblioteca de materiais com filtros por vestibular, faculdade, ano, matéria e tipo',
      aspect: 'video',
      caption: 'Biblioteca de materiais',
    },
    {
      src: '/projects/acertavest/simulados.png',
      alt: 'AcertaVest — simulados oficiais do ENEM e da FUVEST, com tempo e estrutura fiéis à prova real',
      aspect: 'video',
      caption: 'Simulados oficiais',
    },
    {
      src: '/projects/acertavest/perfil.webp',
      alt: 'AcertaVest — perfil do estudante, com sequência de estudos, objetivo e estatísticas de desempenho',
      aspect: 'video',
      caption: 'Perfil do estudante',
    },
  ],
}
