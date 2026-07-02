<div align="center">

# Arthur Santos — Portfólio

**Transformo a história de um negócio em um produto digital que funciona.**

Site pessoal e vitrine profissional de Arthur Santos — desenvolvedor full stack.
Um produto digital premium: rápido, acessível e construído sobre um design system próprio.

[![Next.js](https://img.shields.io/badge/Next.js-15-000?logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com)

</div>

---

## ✦ Visão geral

Este não é um template de portfólio. É um produto construído de baixo para cima
(*foundation-first*), 100% **data-driven** e pensado para escalar por anos.

- **Estratégia** documentada em [`../DISCOVERY.md`](../DISCOVERY.md)
- **Arquitetura** documentada em [`ARCHITECTURE.md`](ARCHITECTURE.md)
- **Identidade visual** consumida da fonte oficial da marca em [`../brand`](../brand)
  (Single Source of Truth — tokens nunca são recriados, apenas consumidos)

### Conceito visual

O momento-assinatura é o conceito **"blueprint → produto"**: no hero, uma planta
técnica se desenha (animação CSS pura, sem JS no LCP) e materializa uma interface —
tradução visual da promessa da marca. Motion com propósito, tipografia editorial,
respiro amplo com bolsões de densidade. Nada de efeito sem função.

## ✦ Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router, RSC) |
| Linguagem | TypeScript (estrito) |
| Estilo | Tailwind CSS 3 + tokens da marca |
| Animação | Framer Motion |
| Ícones | Lucide |
| Validação | Zod (formulários, cliente + servidor) |

## ✦ Estrutura

```
app/            Rotas (grupo (site)), SEO (sitemap/robots/manifest/OG), server actions
components/     ui · layout · motion · sections · case-study · forms · seo · a11y · brand
content/        Camada de conteúdo data-driven (projetos, serviços, FAQ, processo…)
lib/            Configuração do site, tokens de motion, helpers de SEO, validação
public/         Assets estáticos (foto, prints)
```

Detalhes e decisões de longo prazo em [`ARCHITECTURE.md`](ARCHITECTURE.md).

## ✦ Desenvolvimento

```bash
npm install       # instala dependências
npm run dev       # servidor de desenvolvimento (localhost:3000)
npm run build     # build de produção
npm run start     # serve o build de produção
npx tsc --noEmit  # checagem de tipos
```

## ✦ Qualidade

- **Performance:** self-hosted fonts, imagens otimizadas, componentes servidor por padrão.
- **SEO:** metadata por página, Open Graph, JSON-LD (Person, WebSite, CreativeWork, FAQPage, Breadcrumb), sitemap e robots.
- **Acessibilidade:** HTML semântico, foco visível, `aria-*`, skip-link, `prefers-reduced-motion`.
- **Segurança:** CSP + HSTS + demais headers, validação com Zod, honeypot anti-spam.

## ✦ Status

Projeto em construção ativa. Ativos visuais (foto, prints reais) e integrações
(e-mail/CRM do formulário, domínio) em finalização.

---

<div align="center">
<sub>© 2026 Arthur Santos · Feito à mão com Next.js.</sub>
</div>
