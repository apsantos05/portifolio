# COLORS — Sistema de Cores Oficial

**Base:** dark-first. Fundo navy profundo, azul periwinkle como acento, texto branco-frio.
Todos os valores abaixo são canônicos. Nunca alterar HEX manualmente — sempre consumir via tokens.

---

## 1. Fundos (Background & Surface)

### Ink / Background
- **HEX:** `#090D17`
- **RGB:** `rgb(9, 13, 23)`
- **HSL:** `hsl(223, 44%, 6%)`
- **Uso:** fundo padrão de TODA aplicação, página, slide e carrossel. É o "papel" da marca. Nunca substituir por preto puro.

### Ink 2 / Background Elevated
- **HEX:** `#0C1322`
- **RGB:** `rgb(12, 19, 34)`
- **HSL:** `hsl(221, 48%, 9%)`
- **Uso:** faixas de seção alternadas, fundos de hero, gradientes verticais sutis sobre o ink base.

### Panel / Surface
- **HEX:** `#121A2E`
- **RGB:** `rgb(18, 26, 46)`
- **HSL:** `hsl(223, 44%, 13%)`
- **Uso:** cards, painéis, modais, sidebars, inputs. Primeira camada de elevação.

### Panel 2 / Surface Elevated
- **HEX:** `#16203A`
- **RGB:** `rgb(22, 32, 58)`
- **HSL:** `hsl(223, 45%, 16%)`
- **Uso:** cards em hover, dropdowns, tooltips, segunda camada de elevação, células destacadas em tabelas.

---

## 2. Azuis da Marca (Primary & Accent)

### Blue / Accent (Periwinkle) — **cor-assinatura**
- **HEX:** `#84A3DA`
- **RGB:** `rgb(132, 163, 218)`
- **HSL:** `hsl(218, 54%, 69%)`
- **Uso:** palavra-chave azul em títulos bicolores, eyebrows, ícones, números de seção, links, bordas ativas, detalhes de dados. **Nunca** como fundo de botão com texto branco. Máx. ~10% da área.

### Blue Bright / Accent Hover
- **HEX:** `#A6BEE8`
- **RGB:** `rgb(166, 190, 232)`
- **HSL:** `hsl(218, 59%, 78%)`
- **Uso:** hover de links e ícones azuis, gráficos (série secundária), realces sutis.

### Blue Deep / Primary
- **HEX:** `#3F5DAA`
- **RGB:** `rgb(63, 93, 170)`
- **HSL:** `hsl(223, 46%, 46%)`
- **Uso:** botões primários sólidos, chips ativos, barras de progresso, elementos sólidos que precisam de texto branco por cima.

### Blue Deep 2 / Primary Hover
- **HEX:** `#4D6BBE`
- **RGB:** `rgb(77, 107, 190)`
- **HSL:** `hsl(224, 47%, 52%)`
- **Uso:** estado hover/active de botões primários, gradiente de botões (`#3F5DAA → #4D6BBE`).

### Navy B2B / Secondary (institucional)
- **HEX:** `#1E3A5F`
- **RGB:** `rgb(30, 58, 95)`
- **HSL:** `hsl(214, 52%, 25%)`
- **Uso:** exclusivo de materiais corporativos Skill B2B (propostas, PDIs impressos). Não usar em produtos B2C.

---

## 3. Texto

### Text Primary (Paper)
- **HEX:** `#EEF1F7`
- **RGB:** `rgb(238, 241, 247)`
- **HSL:** `hsl(220, 36%, 95%)`
- **Uso:** títulos e corpo principal sobre fundos navy. É o "branco" da marca — nunca usar `#FFFFFF` em texto corrido.

### Text Secondary (Muted)
- **HEX:** `#8B95A8`
- **RGB:** `rgb(139, 149, 168)`
- **HSL:** `hsl(219, 14%, 60%)`
- **Uso:** subtítulos, descrições, legendas, metadados, placeholders de leitura confortável.

### Text Tertiary (Muted 2)
- **HEX:** `#565F73`
- **RGB:** `rgb(86, 95, 115)`
- **HSL:** `hsl(221, 14%, 39%)`
- **Uso:** informação terciária, timestamps, texto desabilitado, rodapés, numeração de fundo.

### White (pontual)
- **HEX:** `#F7F9FD`
- **RGB:** `rgb(247, 249, 253)`
- **HSL:** `hsl(220, 60%, 98%)`
- **Uso:** apenas em números display gigantes e no valor final de blocos de preço.

---

## 4. Linhas e Bordas

### Border (Line)
- **Valor:** `rgba(132, 163, 218, 0.20)`
- **Base HEX:** `#84A3DA` a 20%
- **Uso:** bordas de cards, divisores com presença, contorno de inputs em foco leve.

### Border Soft (Line Soft)
- **Valor:** `rgba(230, 236, 245, 0.08)`
- **Uso:** divisores discretos entre seções, hairlines, bordas internas de tabelas.

### Grid Blueprint
- **Valor:** `rgba(132, 163, 218, 0.055)` (linhas 1px, células 46px)
- **Uso:** textura-assinatura em heros, blocos de preço e CTAs. Sempre com máscara de fade nas extremidades.

---

## 5. Estados e Feedback

### Success
- **HEX:** `#4CC38A` · **RGB:** `rgb(76, 195, 138)` · **HSL:** `hsl(151, 50%, 53%)`
- **Uso:** confirmações, métricas positivas, checkmarks, badges "concluído". Fundo suave: `rgba(76,195,138,0.12)`.

### Warning (Amber)
- **HEX:** `#D9883F` · **RGB:** `rgb(217, 136, 63)` · **HSL:** `hsl(28, 67%, 55%)`
- **Uso:** alertas, atenção, prazos, destaques de urgência controlada. Fundo suave: `rgba(217,136,63,0.12)`. É o único tom quente permitido no sistema.

### Danger
- **HEX:** `#E5636C` · **RGB:** `rgb(229, 99, 108)` · **HSL:** `hsl(356, 71%, 64%)`
- **Uso:** erros, exclusões, métricas negativas, validação de formulário. Fundo suave: `rgba(229,99,108,0.12)`.

### Info
- **HEX:** `#84A3DA` (o próprio accent)
- **Uso:** mensagens informativas, tooltips de ajuda.

---

## 6. Estados de Interação

### Hover (superfícies)
- **Valor:** superfície sobe um nível (`#121A2E → #16203A`) + borda `rgba(132,163,218,0.35)`.

### Hover (botão primário)
- **Valor:** `#4D6BBE` (blue-deep-2).

### Active / Pressed
- **Valor:** `#35509A` (blue-deep escurecido ~8%) · **RGB:** `rgb(53, 80, 154)`.

### Focus Ring
- **Valor:** `0 0 0 3px rgba(132, 163, 218, 0.35)`
- **Uso:** todo elemento focável (acessibilidade obrigatória).

### Disabled
- **Fundo:** `#121A2E` · **Texto:** `#565F73` · **Opacidade geral:** `0.5`
- **Uso:** botões e inputs inativos. Nunca remover do fluxo — apenas reduzir.

---

## 7. Overlay e Sombra

### Overlay
- **Valor:** `rgba(9, 13, 23, 0.72)`
- **Uso:** fundo de modais, drawers e lightboxes (base ink com blur opcional `backdrop-filter: blur(8px)`).

### Shadow (cor base)
- **Valor:** `rgba(4, 7, 14, 0.55)`
- **Uso:** todas as sombras derivam desse tom navy-escuro — nunca preto puro. Escalas em COMPONENTS.md.

### Glow (assinatura)
- **Valor:** `radial-gradient(1100px 620px at 80% -10%, rgba(63,93,170,0.26), transparent 62%)`
- **Uso:** luz ambiente de heros e seções de destaque. Posicionar sempre descentralizado.

---

## 8. Resumo Rápido (cola)

| Papel | Token | HEX |
|---|---|---|
| Background | `color.bg.base` | `#090D17` |
| Background elevado | `color.bg.elevated` | `#0C1322` |
| Surface | `color.surface.base` | `#121A2E` |
| Surface elevada | `color.surface.elevated` | `#16203A` |
| Primary (botões) | `color.primary.base` | `#3F5DAA` |
| Primary hover | `color.primary.hover` | `#4D6BBE` |
| Accent | `color.accent.base` | `#84A3DA` |
| Accent hover | `color.accent.hover` | `#A6BEE8` |
| Secondary B2B | `color.secondary.b2b` | `#1E3A5F` |
| Texto primário | `color.text.primary` | `#EEF1F7` |
| Texto secundário | `color.text.secondary` | `#8B95A8` |
| Texto terciário | `color.text.tertiary` | `#565F73` |
| Border | `color.border.base` | `rgba(132,163,218,.20)` |
| Border soft | `color.border.soft` | `rgba(230,236,245,.08)` |
| Success | `color.success` | `#4CC38A` |
| Warning | `color.warning` | `#D9883F` |
| Danger | `color.danger` | `#E5636C` |
| Overlay | `color.overlay` | `rgba(9,13,23,.72)` |
| Shadow base | `color.shadow` | `rgba(4,7,14,.55)` |
