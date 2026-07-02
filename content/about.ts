import type { AboutContent } from './types'

/**
 * Conteúdo da seção Sobre (DISCOVERY §1) — data-driven.
 * Editar aqui altera a seção sem tocar no componente. Pronto para i18n futura.
 */
export const about: AboutContent = {
  lead: 'Programo desde os 12 anos, quando comecei criando mods de jogos e sites em HTML cru. Nunca foi sobre o código em si — foi a paixão por criar coisas novas e automatizar processos.',
  paragraphs: [
    'Passei por operações reais como analista de suporte na Dell e de implantação na Eros Sistemas — aprendi como o software vive dentro de uma empresa de verdade. Em paralelo, sempre construí meus próprios produtos, como o AcertaVest.',
    'Hoje desenvolvo sistemas sob medida e transformo a história de cada negócio em um produto digital que funciona.',
  ],
  pillars: [
    {
      title: 'Escuto antes de codar',
      text: 'Entendo o negócio, o objetivo e quem vai usar. A solução nasce do problema real — não de um template.',
    },
    {
      title: 'Construo ponta a ponta',
      text: 'Do banco de dados à interface, do deploy à IA. Um produto completo, feito por quem domina o todo.',
    },
    {
      title: 'Cuido como se fosse meu',
      text: 'Trato o seu negócio com o cuidado de dono. Entrego algo que funciona — e continuo por perto depois.',
    },
  ],
}
