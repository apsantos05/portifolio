# ROADMAP — arthur-santos

> Evolução do portfólio como **produto de aquisição de clientes**.
> Prioridade de toda decisão: **fortalece a marca Arthur Santos e/ou aumenta conversão?**
> Nada entra só por ser "legal de ter". Base estratégica: [`../DISCOVERY.md`](../DISCOVERY.md).

---

## ✅ Versão 1.0 — Entregue

Fundação de produto premium, pronta e validada (type-check + build limpos).

- **Arquitetura escalável:** Next.js 15 (App Router, RSC), TypeScript estrito, grupos de rota `(site)`/`(app)`, camada de conteúdo data-driven, tokens consumidos da SSOT da marca.
- **Design autoral:** hero-assinatura "blueprint → produto" (motion CSS puro, sem JS no LCP), tipografia editorial, seções com layout próprio (lista editorial, timeline), sem clichês de template.
- **Home completa (jornada CRO):** Hero → Sobre → Serviços → Projetos → Garantias → Processo → Tecnologias → FAQ → Diagnóstico gratuito → Contato.
- **Sistema de estudo de caso** reutilizável (`/projetos/[slug]`, SSG) para os 4 projetos.
- **Prova social sem depoimentos:** seção de Garantias + transparência técnica (código aberto).
- **Lead magnets:** oferta de diagnóstico gratuito + página `/recursos` + captura por newsletter (arquitetura pronta).
- **Conversão:** formulário com validação zod + honeypot, CTAs em degraus (baixo e alto atrito).
- **SEO técnico:** metadata por página, OG estático, JSON-LD (Person, WebSite, WebApplication, FAQPage, Breadcrumb), sitemap, robots, manifest.
- **Acessibilidade:** HTML semântico, foco por outline, menu mobile acessível, `prefers-reduced-motion`, alvos de toque.
- **Segurança:** CSP + HSTS + headers, honeypot anti-spam.

---

## 🔸 Versão 1.1 — Melhorias rápidas (destravam com ativos)

Alto impacto, baixo esforço. Maioria só depende de conteúdo/credenciais.

- ✅ **Envio real de e-mails (Resend)** — contato e newsletter integrados (`lib/email.ts`); liga sozinho quando a `RESEND_API_KEY` for definida.
- ✅ **Primeiro lead magnet real** — checklist "Seu site está pronto para vender?" em `/recursos/checklist-site`.
- **[Bloqueador de galeria] Imagens reais:** capturar telas do AcertaVest (live) e mockups premium de Arrematex/AYHub — trocar placeholders sem tocar em componente.
- **Foto profissional** em `public/arthur-santos.jpg` (entra no Hero/Sobre com tratamento duotone).
- **Domínio + e-mail próprios** e handles reais (LinkedIn, Instagram) — hoje ocultos por serem placeholders.
- **Configurar a chave Resend** (`.env.local`) + domínio verificado para o envio ir ao ar.
- **Rate-limiting** nas server actions (contato/newsletter).
- **Depoimentos reais** conforme os primeiros clientes chegam (estrutura já pronta).

---

## 🔹 Versão 1.2 — Novas funcionalidades

Conteúdo que atrai tráfego orgânico e nutre leads.

- **Blog / Artigos técnicos** (MDX via Velite) sob `(site)/blog` — mesmo contrato de tipos da content layer.
- **Biblioteca de recursos** com múltiplos materiais e categorias em `/recursos`.
- **Estudos técnicos** ("como construí X") — reforço para o objetivo bigtech (DISCOVERY §12.2).
- **Analytics** (privacy-first, ex.: Vercel Analytics/Plausible) + eventos de conversão nos CTAs.
- **Parallax discreto** e transições de página (view transitions) — próximo degrau de motion.
- **CSP com nonce** (middleware) removendo `'unsafe-inline'` de script em produção.

---

## 🟣 Versão 2.0 — Grandes evoluções

- **Área do cliente** (grupo de rota `(app)` já reservado): acompanhamento de projeto, arquivos, aprovações.
- **Dashboard** administrativo: leads, mensagens, materiais.
- **CMS** para conteúdo (blog/recursos/cases) satisfazendo os tipos existentes — trocar a fonte, não a UI.
- **Integração com CRM** e automação de nutrição de leads.
- **Integração com GitHub** (mostrar repositórios/atividade como prova técnica viva).
- **Multilíngue (i18n)** com next-intl — conteúdo já sem strings hardcoded.

---

## 🌱 Longo prazo — Visão

- Evoluir de "portfólio" para **plataforma de marca pessoal**: conteúdo, comunidade e autoridade.
- Newsletter com audiência própria; materiais que geram inbound recorrente.
- Selo de qualidade técnica reconhecível — o site como *prova viva* do padrão de engenharia.
- Possível vitrine de produtos próprios (AcertaVest e futuros SaaS) como ecossistema.

---

*Roadmap vivo. Cada release incrementa o `README.md` e mantém histórico limpo (Conventional Commits).*
