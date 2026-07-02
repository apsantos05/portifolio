# COMPONENTS — Padrões de Componentes

Todos os componentes consomem exclusivamente os tokens de `TOKENS.json` / `TAILWIND_THEME.ts`.

---

## 1. Fundamentos Geométricos

### Espaçamento (grid de 8px, sub-passo de 4px)
| Token | Valor | Uso |
|---|---|---|
| `space-1` | 4px | Gaps mínimos (ícone↔texto) |
| `space-2` | 8px | Gap interno de chips/badges |
| `space-3` | 12px | Gap entre label e input |
| `space-4` | 16px | Padding interno padrão pequeno |
| `space-5` | 20px | — |
| `space-6` | 24px | Padding de cards, gap de grid |
| `space-8` | 32px | Padding de cards grandes, padding lateral mobile |
| `space-10` | 40px | — |
| `space-12` | 48px | Espaço entre blocos de conteúdo |
| `space-16` | 64px | Espaço entre subsecões |
| `space-20` | 80px | Espaçamento vertical de seção (mobile) |
| `space-24` | 96px | Espaçamento vertical de seção (desktop) |
| `space-32` | 128px | Hero, respiros máximos |

### Radius
| Token | Valor | Uso |
|---|---|---|
| `radius-sm` | 6px | Badges, tags, chips, inputs pequenos |
| `radius-md` | 10px | Inputs, botões retangulares, tooltips |
| `radius-lg` | 16px | Cards padrão |
| `radius-xl` | 22px | Cards hero, painéis grandes, modais |
| `radius-full` | 999px | **Botões pill (assinatura)**, avatares, progress |

### Bordas
- Padrão: `1px solid rgba(132,163,218,0.20)` (`border`)
- Discreta: `1px solid rgba(230,236,245,0.08)` (`border-soft`)
- Ativa/foco: `1px solid rgba(132,163,218,0.45)`
- Nunca usar bordas >2px, exceto barra lateral de destaque em quote/callout (3px sólida `#84A3DA`).

### Sombras (base navy `rgba(4,7,14,0.55)` — nunca preto puro)
| Token | Valor | Uso |
|---|---|---|
| `shadow-sm` | `0 2px 8px rgba(4,7,14,0.35)` | Chips, dropdown |
| `shadow-md` | `0 8px 24px rgba(4,7,14,0.45)` | Cards em hover |
| `shadow-lg` | `0 16px 48px rgba(4,7,14,0.55)` | Modais, painéis flutuantes |
| `shadow-glow` | `0 0 40px rgba(63,93,170,0.30)` | CTA principal, destaque de preço |

### Gradientes oficiais
| Nome | Valor | Uso |
|---|---|---|
| `gradient-primary` | `linear-gradient(135deg, #3F5DAA 0%, #4D6BBE 100%)` | Botões primários, barras |
| `gradient-surface` | `linear-gradient(180deg, #0C1322 0%, #090D17 100%)` | Fundos de seção |
| `gradient-glow` | `radial-gradient(1100px 620px at 80% -10%, rgba(63,93,170,0.26), transparent 62%)` | Luz ambiente de hero |
| `gradient-grid` | `linear-gradient(rgba(132,163,218,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(132,163,218,0.055) 1px, transparent 1px)` — size `46px 46px` | Textura blueprint (com mask fade) |

---

## 2. Botões

### Primário (pill — assinatura da marca)
```
fundo: gradient-primary (#3F5DAA → #4D6BBE)
texto: #EEF1F7, Inter 600, 15–16px
formato: radius-full (pill)
padding: 14px 28px (com ícone: 14px 8px 14px 28px)
ícone: círculo 36px fundo rgba(255,255,255,0.14) com seta → à direita
hover: fundo #4D6BBE + shadow-glow, seta desloca 2px
active: #35509A
focus: ring 3px rgba(132,163,218,0.35)
disabled: fundo #121A2E, texto #565F73, opacidade 0.5
```

### Secundário (outline)
```
fundo: transparente · borda: 1px rgba(132,163,218,0.35)
texto: #84A3DA, Inter 600 · radius-full
hover: fundo rgba(132,163,218,0.10), borda 0.6
```

### Ghost / Terciário
```
fundo: transparente · texto: #8B95A8 · hover: texto #EEF1F7 + fundo rgba(230,236,245,0.05)
```

**Regras:** 1 botão primário por tela/seção. Verbos de comando no label ("Instalar o sistema", "Destravar acesso"). Nunca "Clique aqui".

---

## 3. Cards

### Card padrão
```
fundo: #121A2E · borda: 1px rgba(132,163,218,0.20) · radius: 16px
padding: 24–32px · gap interno: 16px
hover (se clicável): fundo #16203A, borda 0.35, translateY(-2px), shadow-md
```

### Card destaque (preço, oferta, métrica-chave)
```
fundo: #16203A + textura gradient-grid com mask
borda: 1px rgba(132,163,218,0.35) · radius: 22px
glow: shadow-glow · numeração 01–06 opcional no canto (Inter Tight 700, #84A3DA)
```

### Anatomia
1. Eyebrow (opcional) → 2. Ícone ou número → 3. Título `heading-md` → 4. Descrição `body-sm` em `#8B95A8` → 5. Link/CTA.

---

## 4. Badges e Tags

### Badge (status)
```
fundo: cor de estado a 12% (ex.: rgba(76,195,138,0.12))
texto: cor de estado sólida · Inter 600, 12px, uppercase opcional
padding: 4px 10px · radius: 6px (sm) ou full (pill)
```
Variantes: success, warning, danger, info (accent), neutral (`rgba(139,149,168,0.12)` + `#8B95A8`).

### Tag (categoria/filtro)
```
fundo: rgba(132,163,218,0.10) · texto: #84A3DA · borda: 1px rgba(132,163,218,0.25)
padding: 6px 12px · radius-full · Inter 500, 13px
ativa: fundo #3F5DAA, texto #EEF1F7
```

---

## 5. Ícones

- **Biblioteca oficial:** Lucide (https://lucide.dev) — traço 1.75–2px, estilo outline.
- **Tamanhos:** 16px (inline), 20px (botões/inputs), 24px (cards), 32–40px (feature icons).
- **Cores:** `#84A3DA` (padrão), `#8B95A8` (neutro), cor de estado quando semântico.
- **Feature icon (assinatura):** ícone 24px dentro de container 48px, fundo `rgba(132,163,218,0.10)`, radius 12px, borda soft.
- **Proibido:** ícones filled coloridos, emojis como ícones em UI, clipart.

---

## 6. Inputs e Formulários

```
fundo: #0C1322 · borda: 1px rgba(230,236,245,0.08) · radius: 10px
padding: 12px 16px · texto: #EEF1F7, Inter 400, 15–16px
placeholder: #565F73
label: Inter 500, 13px, #8B95A8, margin-bottom 12px (space-3)
focus: borda rgba(132,163,218,0.45) + ring 3px rgba(132,163,218,0.20)
erro: borda #E5636C + mensagem caption em #E5636C
sucesso: borda #4CC38A
disabled: opacidade 0.5, cursor not-allowed
altura mínima touch: 44px
```

---

## 7. Grid e Layout

| Propriedade | Valor |
|---|---|
| Container máximo | 1200px (conteúdo geral) / 1080px (leitura/propostas) / 720px (texto longo) |
| Colunas | 12 (desktop) · 6 (tablet) · 4 (mobile) |
| Gutter | 24px (desktop) · 16px (mobile) |
| Breakpoints | `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536` |
| Padding lateral (área segura) | 32px mobile · 48px tablet · 64px+ desktop |
| Ritmo vertical de seções | 80px mobile · 96–128px desktop |

### Área segura — Instagram (1080×1350)
- Margem externa mínima: **80px** em todos os lados.
- Nada de texto nos 250px superiores/inferiores centrais onde UI do IG sobrepõe (avatar, CTA).
- Logo/handle: canto inferior, caption 24–28px no canvas, `#565F73` ou `#8B95A8`.

---

## 8. Padrões-assinatura (obrigatórios em peças de marca)

1. **Seção numerada:** eyebrow `01 — NOME DA SEÇÃO` em `#84A3DA`, tracking 0.3em.
2. **Título bicolor:** branco + 1 palavra `#84A3DA`.
3. **Textura blueprint:** grid 46px em hero/preço/CTA com fade mask.
4. **Glow radial:** descentralizado (80% −10% ou −12% 112%).
5. **Bloco de preço com ancoragem:** referência riscada (animação strikethrough) → condição → crédito → valor final branco sobre `rgba(63,93,170,0.20)` + grid.
6. **Scroll-reveal:** fade+translateY(16px), 500–600ms, ease-out, stagger 80ms. Sem bounce.
