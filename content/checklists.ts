export type ChecklistGroup = {
  title: string
  description: string
  items: string[]
}

export type Checklist = {
  slug: string
  title: string
  intro: string
  groups: ChecklistGroup[]
}

/**
 * Lead magnet real: "Seu site está pronto para vender?".
 * Conteúdo prático para o dono de negócio avaliar o próprio site — sem tecnês.
 */
export const siteChecklist: Checklist = {
  slug: 'checklist-site',
  title: 'Seu site está pronto para vender?',
  intro:
    'Um site bonito não é a mesma coisa que um site que traz clientes. Passe pelos 20 pontos abaixo com honestidade. Cada "não" é dinheiro ficando na mesa — e um bom motivo para conversarmos.',
  groups: [
    {
      title: 'Primeira impressão (os 5 primeiros segundos)',
      description: 'O visitante decide em segundos se fica ou sai.',
      items: [
        'Em 5 segundos fica claro o que você faz e para quem.',
        'Existe um botão de ação visível sem precisar rolar a página.',
        'O site carrega em menos de 3 segundos no celular.',
        'Ele se adapta bem a celular, tablet e computador.',
        'Não há erros visíveis, links quebrados ou imagens faltando.',
      ],
    },
    {
      title: 'Confiança',
      description: 'Ninguém compra de quem não confia.',
      items: [
        'O endereço começa com https:// (cadeado de segurança).',
        'É fácil achar como falar com você (e-mail, telefone ou WhatsApp).',
        'Há prova de credibilidade (projetos, depoimentos ou resultados reais).',
        'O visual passa profissionalismo — não parece um template genérico.',
        'Existe uma página "Sobre" com rosto e história por trás do negócio.',
      ],
    },
    {
      title: 'Conversão',
      description: 'Transformar visitante em contato.',
      items: [
        'Cada seção leva a uma ação clara (falar, orçar, comprar).',
        'O formulário pede só o essencial — quanto menor, mais gente preenche.',
        'Há uma oferta ou próximo passo evidente para quem está indeciso.',
        'A página não distrai com excesso de opções e informação.',
      ],
    },
    {
      title: 'Ser encontrado (SEO)',
      description: 'De nada adianta um ótimo site que ninguém acha.',
      items: [
        'Cada página tem um título e uma descrição pensados para o Google.',
        'O site aparece quando você pesquisa seu nome/serviço no Google.',
        'Você tem um perfil no Google Empresas atualizado.',
      ],
    },
    {
      title: 'Fundamentos técnicos',
      description: 'O que sustenta tudo por baixo.',
      items: [
        'O site tem boa nota de performance (Core Web Vitals) no PageSpeed.',
        'Existe backup e você não depende de uma única pessoa para mexer nele.',
        'Você mede as visitas com alguma ferramenta de analytics.',
      ],
    },
  ],
}
