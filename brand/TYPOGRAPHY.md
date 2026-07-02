# TYPOGRAPHY — Sistema Tipográfico Oficial

---

## 1. Famílias

### Fonte principal (Display) — **Inter Tight**
- **Uso:** títulos (H1–H4), números display, métricas, valores de preço, palavras-chave azuis, logotipos de seção.
- **Personalidade:** geométrica, condensada, executiva. É a voz de comando da marca.
- **Google Fonts:** https://fonts.google.com/specimen/Inter+Tight

### Fonte secundária (Corpo/UI) — **Inter**
- **Uso:** parágrafos, labels, botões, inputs, navegação, tabelas, legendas — todo texto funcional.
- **Personalidade:** neutra, altamente legível em telas, par natural da Inter Tight.
- **Google Fonts:** https://fonts.google.com/specimen/Inter

### Fonte para código/dados — **JetBrains Mono**
- **Uso:** blocos de código, tokens, valores técnicos, terminal-aesthetic (ARQUIVO Ω), IDs, timestamps de dashboards.
- **Google Fonts:** https://fonts.google.com/specimen/JetBrains+Mono

### Embed oficial (copiar e colar)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Inter Tight', system-ui, sans-serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
}
```

> ⚠️ **Proibido:** Playfair Display e qualquer serifada (legado descontinuado). Nunca substituir por Arial/Helvetica em materiais oficiais.

---

## 2. Pesos

| Peso | Valor | Família | Uso |
|---|---|---|---|
| Light | 300 | Inter | Texto de apoio em telas grandes, citações longas |
| Regular | 400 | Inter / Inter Tight / JB Mono | Corpo padrão, código |
| Medium | 500 | Inter / Inter Tight | Labels, navegação, botões secundários, subtítulos |
| SemiBold | 600 | Inter / Inter Tight | Botões primários, destaques inline, H4–H5 |
| Bold | 700 | Inter / Inter Tight | H2–H3, métricas, eyebrows |
| ExtraBold | 800 | Inter Tight | H1, números display gigantes, hero |

**Regra:** títulos display sempre 700–800. Corpo nunca acima de 600.

---

## 3. Escala Tipográfica

Escala modular com razão ~1.25 (major third), base 16px.

| Token | Tamanho | Line Height | Letter Spacing | Família/Peso | Uso |
|---|---|---|---|---|---|
| `display-2xl` | 72px / 4.5rem | 1.05 | −0.03em | Inter Tight 800 | Hero de landing pages, número gigante |
| `display-xl` | 56px / 3.5rem | 1.1 | −0.025em | Inter Tight 800 | H1 de landing/site |
| `display-lg` | 44px / 2.75rem | 1.15 | −0.02em | Inter Tight 700 | H1 interno, título de carrossel (capa) |
| `heading-xl` | 36px / 2.25rem | 1.2 | −0.02em | Inter Tight 700 | H2, título de seção |
| `heading-lg` | 28px / 1.75rem | 1.25 | −0.015em | Inter Tight 700 | H3, título de card grande |
| `heading-md` | 22px / 1.375rem | 1.3 | −0.01em | Inter Tight 600 | H4, título de card |
| `heading-sm` | 18px / 1.125rem | 1.4 | 0 | Inter 600 | H5, título de item de lista |
| `body-lg` | 18px / 1.125rem | 1.65 | 0 | Inter 400 | Lead/intro de seção |
| `body-md` | 16px / 1rem | 1.6 | 0 | Inter 400 | Corpo padrão (web) |
| `body-sm` | 14px / 0.875rem | 1.55 | 0 | Inter 400 | Texto denso, tabelas, cards |
| `caption` | 12px / 0.75rem | 1.4 | +0.01em | Inter 500 | Legendas, metadados, rodapés |
| `eyebrow` | 12px / 0.75rem | 1.2 | **+0.30em** | Inter 600 UPPERCASE | Eyebrow-assinatura sobre títulos, número de seção |
| `mono-md` | 14px / 0.875rem | 1.6 | 0 | JB Mono 400 | Código, tokens, dados |

---

## 4. Hierarquia — Regras de Aplicação

1. **Eyebrow → Título → Descrição.** Padrão-assinatura de toda seção:
   - Eyebrow azul `#84A3DA`, uppercase, tracking `0.3em`, com numeração (`01 — DIAGNÓSTICO`)
   - Título Inter Tight 700/800 branco `#EEF1F7` com **uma** palavra em `#84A3DA`
   - Descrição Inter 400 em `#8B95A8`
2. **Máximo 3 níveis tipográficos visíveis por tela/slide.**
3. **Números são display:** qualquer métrica (ROI 6.5×, R$116k, 87%) usa Inter Tight 700+ em tamanho de heading, nunca corpo.
4. **Line height inverso ao tamanho:** quanto maior o texto, mais apertado (1.05–1.2 em display; 1.55–1.65 em corpo).
5. **Letter spacing:** negativo em display (aperta o bold geométrico), zero no corpo, positivo apenas em eyebrows/uppercase.
6. **Comprimento de linha:** corpo entre 55–75 caracteres (`max-width: 65ch`).

---

## 5. Adaptação por Canal

| Canal | Ajuste |
|---|---|
| **Instagram (1080×1350)** | display-lg como título de capa (~64–80px no canvas); corpo mínimo 28px no canvas para legibilidade mobile |
| **Site/Landing** | Escala completa; hero usa display-xl/2xl |
| **Dashboards/Sistemas** | Base 14px (`body-sm`); métricas em heading-lg/xl; densidade maior |
| **PDF/Propostas (A4)** | Corpo 10–10.5pt Inter; títulos Inter Tight; mesma hierarquia |
| **Mobile (<640px)** | Display reduz ~35% (display-xl → 36–40px); corpo mantém 16px |
