# ARQUITETURA — arthur-santos

> Documento de decisões técnicas. Guia como o projeto cresce sem reescrita.
> Princípio-mestre: **cada decisão precisa fortalecer a marca "Arthur Santos" e sobreviver ao roadmap de longo prazo.**
> Fonte de identidade: `D:\Projetos\brand` (SSOT). Fonte de estratégia: `../DISCOVERY.md`.

---

## 1. Princípios

1. **Data-driven total.** Conteúdo (projetos, serviços, FAQ, processo, depoimentos) vive em `content/`. Editar conteúdo **nunca** exige tocar em componente.
2. **Reutilização acima de tudo.** Nada de componente que sirva a uma única página. Átomos → moléculas → organismos → seções → páginas.
3. **Escala por adição, não por reescrita.** A estrutura já prevê blog, i18n, CMS, área de clientes, dashboard, analytics e CRM.
4. **Servidor por padrão.** RSC (React Server Components) por padrão; `'use client'` só onde há estado/efeito/motion.
5. **Acessibilidade e performance são requisitos, não etapas finais.**

---

## 2. Estrutura de pastas (alvo)

```
app/
  layout.tsx                 # shell raiz: <html>, fontes, metadata global, JSON-LD Person, skip-link
  (site)/                    # GRUPO público (marketing) — não afeta a URL
    layout.tsx               # shell do site: Header + Footer
    page.tsx                 # Home (composição de seções data-driven)
    projetos/
      page.tsx               # índice de projetos
      [slug]/page.tsx        # estudo de caso (sistema único e reutilizável)
    servicos/
      [slug]/page.tsx        # (futuro) página individual de serviço
  (app)/                     # (futuro) GRUPO privado: área de clientes / dashboard — shell próprio
  api/                       # (futuro) route handlers (contato, webhooks CRM)
  sitemap.ts | robots.ts | manifest.ts | opengraph-image.tsx

components/
  ui/          # BIBLIOTECA DE UI — átomos/moléculas (Button, Badge, Tag, Card, SectionHeader, Stat, Accordion…)
  layout/      # SISTEMA DE LAYOUT — Header, Footer, Container, Section, Grid, shells
  motion/      # SISTEMA DE ANIMAÇÃO — Reveal, Stagger, TextReveal (Framer Motion)
  sections/    # ORGANISMOS de seção reutilizáveis e data-driven (Hero, About, Services…)
  case-study/  # SISTEMA DE ESTUDO DE CASO — blocos reutilizados por TODOS os projetos
  seo/         # JsonLd e helpers de dados estruturados
  forms/       # SISTEMA DE FORMULÁRIOS — Field, form de contato, validação
  a11y/        # utilidades de acessibilidade (VisuallyHidden, SkipLink…)

content/       # CAMADA DE CONTEÚDO (data-driven, tipada)
  types.ts     # contratos de todo o conteúdo
  navigation.ts | services.ts | process.ts | faq.ts | tech.ts | testimonials.ts
  projects/    # um arquivo por projeto (acertavest.ts, arrematex.ts, ayhub.ts, murilo.ts) + index.ts

lib/           # site.ts (config), cn.ts, motion.ts (tokens de motion), seo.ts, format.ts
public/        # imagens (fotos, prints, og), ícones, manifest assets
```

---

## 3. Decisões-chave e por quê (mapa para o roadmap)

| Necessidade futura | Decisão tomada agora | Efeito |
|---|---|---|
| **Blog / artigos técnicos / cases** | `content/` tipado hoje; migração planejada para **MDX** (Velite/Contentlayer) mantendo o mesmo contrato de tipos | Adicionar `content/posts/` e uma rota `(site)/blog` sem mexer em UI |
| **Multilíngue (i18n)** | Zero string hardcoded em componente — tudo vem de `content/` e `lib/site.ts`. Estrutura pronta para dicionários por locale (next-intl) | Ligar i18n = adicionar `[locale]` e dicionários, sem reescrever seções |
| **CMS** | Contrato de tipos em `content/types.ts` é a fronteira. Hoje TS, amanhã pode vir de um CMS que satisfaça o mesmo tipo | Trocar a fonte, não os componentes |
| **Área de clientes / Dashboard** | Grupo de rotas `(app)` isolado com shell próprio, separado do `(site)` | Autenticação e layout privados sem contaminar o site público |
| **Integração GitHub / Analytics / CRM** | Camada `lib/` para integrações + `app/api/` para handlers | Pontos de extensão já definidos |
| **Timeline profissional / página por serviço** | `content/` + sistema de seções e páginas dinâmicas (`[slug]`) | Novas páginas = novos dados |

### Sistema de Estudo de Caso (prioridade explícita do cliente)
Todos os projetos usam **exatamente a mesma estrutura**, montada por blocos reutilizáveis em `components/case-study/`:
`CaseHero → Context → Challenge → Solution → Features → TechStack → Process → Results → Gallery → NextProject → CTA`.
Cada projeto é só um objeto de dados (`content/projects/*.ts`) que satisfaz o tipo `CaseStudy`. Zero código por projeto.

---

## 4. Convenções

- **Componentes:** PascalCase, um por arquivo, export nomeado. Props tipadas; sem `any`.
- **Client vs Server:** `'use client'` apenas em `motion/`, `layout/Header`, `forms/` e interativos.
- **Estilo:** só tokens da marca (classes Tailwind ligadas ao `brandTheme` + CSS vars). Nenhum HEX solto.
- **Imports:** alias `@/*`. Ordem: libs externas → `@/` → relativos.
- **Conteúdo:** nunca texto de marketing dentro de componente — sempre de `content/`.
- **Acessibilidade:** todo interativo com nome acessível; foco visível; landmarks semânticas.

---

## 5. Stack e dependências
- **Núcleo:** Next.js 15 (App Router), React 19, TypeScript estrito, Tailwind 3 (consumindo `../brand`), Framer Motion, Lucide.
- **Planejado (quando a etapa chegar):** `zod` (validação de formulário compartilhada cliente/servidor), depois `next-intl` (i18n), `velite`/MDX (blog).
- Sem UI kit externo: a biblioteca de UI é própria, sobre os tokens da marca — parte do diferencial.

---

*Este documento evolui com o projeto. Toda decisão arquitetural relevante é registrada aqui.*
