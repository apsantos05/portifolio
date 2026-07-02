# FIGMA GUIDE — Montagem da Biblioteca Oficial

Como estruturar a biblioteca **"Skill DS — v1.0"** no Figma para que todos os arquivos (Instagram, site, dashboards, sistemas) consumam os mesmos estilos e componentes.

---

## 1. Estrutura do Arquivo

Criar um arquivo de biblioteca com estas páginas:

```
📄 Skill DS — v1.0
├── 🎨 00 Cover           (capa com logo + versão)
├── 🧬 01 Foundations     (cores, tipografia, grid, spacing, radius, shadows)
├── 🧩 02 Components      (botões, cards, badges, inputs, ícones)
├── 📐 03 Patterns        (hero, seção numerada, bloco de preço, CTA)
├── 📱 04 Templates       (carrossel IG 1080×1350, slide 16:9, A4, mobile 390)
└── 🧪 99 Playground      (testes — nunca publicar componentes daqui)
```

Publicar como **Team Library** e habilitar em todos os projetos.

---

## 2. Variables (Tokens) — usar Figma Variables, não só Styles

Criar uma **Collection "Tokens"** com grupos espelhando o `TOKENS.json`:

### Colors (modo único "Dark" por enquanto; criar modo "B2B Light" depois)
| Variable | Valor |
|---|---|
| `bg/base` | `#090D17` |
| `bg/elevated` | `#0C1322` |
| `surface/base` | `#121A2E` |
| `surface/elevated` | `#16203A` |
| `primary/base` | `#3F5DAA` |
| `primary/hover` | `#4D6BBE` |
| `primary/active` | `#35509A` |
| `accent/base` | `#84A3DA` |
| `accent/bright` | `#A6BEE8` |
| `text/primary` | `#EEF1F7` |
| `text/secondary` | `#8B95A8` |
| `text/tertiary` | `#565F73` |
| `border/base` | `#84A3DA` @ 20% |
| `border/soft` | `#E6ECF5` @ 8% |
| `state/success` | `#4CC38A` |
| `state/warning` | `#D9883F` |
| `state/danger` | `#E5636C` |

### Numbers
- `space/1..32` (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128)
- `radius/sm|md|lg|xl|pill` (6, 10, 16, 22, 999)

**Regra:** componentes referenciam **variables**, nunca HEX solto. Assim uma atualização de token propaga para tudo.

---

## 3. Text Styles

Nomear no padrão `Categoria/Nome`:

```
Display/2XL   — Inter Tight ExtraBold 72 · LH 105% · LS -3%
Display/XL    — Inter Tight ExtraBold 56 · LH 110% · LS -2.5%
Display/LG    — Inter Tight Bold 44 · LH 115% · LS -2%
Heading/XL    — Inter Tight Bold 36 · LH 120% · LS -2%
Heading/LG    — Inter Tight Bold 28 · LH 125% · LS -1.5%
Heading/MD    — Inter Tight SemiBold 22 · LH 130% · LS -1%
Heading/SM    — Inter SemiBold 18 · LH 140%
Body/LG       — Inter Regular 18 · LH 165%
Body/MD       — Inter Regular 16 · LH 160%
Body/SM       — Inter Regular 14 · LH 155%
Caption       — Inter Medium 12 · LH 140% · LS +1%
Eyebrow       — Inter SemiBold 12 · LH 120% · LS +30% · UPPERCASE
Mono/MD       — JetBrains Mono Regular 14 · LH 160%
```

## 4. Effect Styles

```
Shadow/SM     — Drop 0,2 blur 8  · #04070E @ 35%
Shadow/MD     — Drop 0,8 blur 24 · #04070E @ 45%
Shadow/LG     — Drop 0,16 blur 48 · #04070E @ 55%
Shadow/Glow   — Drop 0,0 blur 40 · #3F5DAA @ 30%
Focus/Ring    — Drop 0,0 blur 0 spread 3 · #84A3DA @ 35%
```

Gradientes salvos como **Color Styles**: `Gradient/Primary`, `Gradient/Glow`, `Gradient/Surface`.

---

## 5. Grids (Layout Grid Styles)

```
Grid/Desktop-12   — 12 col · margin 64 · gutter 24 (frame 1440)
Grid/Tablet-6     — 6 col · margin 48 · gutter 20 (frame 768)
Grid/Mobile-4     — 4 col · margin 32 · gutter 16 (frame 390)
Grid/IG-Feed      — 12 col · margin 80 · gutter 24 (frame 1080×1350)
Grid/Blueprint    — grid uniforme 46px @ #84A3DA 5.5% (textura decorativa)
Grid/Baseline-8   — rows 8px (ritmo vertical)
```

---

## 6. Componentes (com Variants e Auto Layout)

Nomear `Categoria/Componente`, propriedades como variants/props:

### Button
- **Variants:** `variant = primary | secondary | ghost` · `size = sm | md | lg` · `state = default | hover | active | disabled` · `icon = none | arrow`
- **Auto layout:** horizontal, padding 14/28, gap 12, hug × hug.
- Primary: fill `Gradient/Primary`, radius `radius/pill`, ícone = círculo 36 com seta.

### Card
- **Variants:** `type = default | highlight | metric` · `state = default | hover`
- Auto layout vertical, padding `space/6`–`space/8`, gap `space/4`, fill `surface/base`, stroke `border/base`, radius `radius/lg` (highlight: `radius/xl` + textura blueprint + `Shadow/Glow`).

### Badge / Tag
- Variants por estado semântico (`success | warning | danger | info | neutral`), auto layout, padding 4/10, radius `sm` ou `pill`.

### Input
- Variants `state = default | focus | error | success | disabled`, altura mínima 44, fill `bg/elevated`, radius `md`.

### Eyebrow de Seção (componente próprio)
- Texto `Eyebrow` em `accent/base`, prop de texto para número `01 —` + nome.

### Bloco de Preço (pattern)
- Instância composta: valor riscado (layer de linha animável) → condição → crédito → valor final sobre fill `#3F5DAA @ 20%` + blueprint.

---

## 7. Constraints e Auto Layout — Regras

1. **Tudo em Auto Layout.** Frames soltos apenas em artes finais de export.
2. Texto: `Fill container` na horizontal para reflow correto.
3. Ícones dentro de botões: `Hug` fixo 20/24, nunca esticar.
4. Cards em grid: `Fill` horizontal + `Hug` vertical.
5. Elementos decorativos (glow, blueprint): constraints `Scale`, camada travada (lock), abaixo do conteúdo, `pass-through` de eventos.
6. Área segura IG: componente overlay "SafeArea/IG-1080x1350" com margens de 80px + zonas de UI — usar como camada-guia travada em todo template de carrossel.

---

## 8. Fluxo de Tokens (Figma ↔ Código)

1. `TOKENS.json` é a fonte da verdade.
2. Importar/sincronizar no Figma via plugin **Tokens Studio for Figma** (suporta o formato do JSON com `value`).
3. Mudou um token? Atualizar primeiro o JSON → sincronizar Tokens Studio → publish da library → os arquivos consumidores recebem update.
4. No código, o mesmo JSON alimenta o `TAILWIND_THEME.ts`.

---

## 9. Checklist de Publicação

- [ ] Todas as cores referenciam Variables (zero HEX solto)
- [ ] Todos os textos usam Text Styles
- [ ] Componentes com variants completos (incl. disabled)
- [ ] Auto layout em 100% dos componentes
- [ ] Descrição preenchida em cada componente (quando usar / quando não usar)
- [ ] Página Playground excluída do publish
- [ ] Versão incrementada com changelog no publish (`v1.0 → v1.1: ...`)
