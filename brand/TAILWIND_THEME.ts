/**
 * ═══════════════════════════════════════════════════════════════
 *  MURILO MANZANO · SKILL — TAILWIND THEME v1.0
 *  Design System oficial (navy/azul · dark-first)
 *  Fonte da verdade: /brand/TOKENS.json
 *
 *  Uso (tailwind.config.ts):
 *    import { brandTheme } from './brand/TAILWIND_THEME'
 *    export default { theme: { extend: brandTheme }, ... }
 *
 *  Fontes (adicionar no <head> ou via next/font):
 *    Inter Tight (display) · Inter (corpo) · JetBrains Mono (código)
 * ═══════════════════════════════════════════════════════════════
 */

export const brandTheme = {
  colors: {
    // ── Fundos ────────────────────────────────────────────────
    ink: {
      DEFAULT: '#090D17', // bg base — nunca usar preto puro
      2: '#0C1322',       // bg elevado / faixas de seção
    },
    panel: {
      DEFAULT: '#121A2E', // surface — cards, inputs
      2: '#16203A',       // surface elevada — hover, dropdowns
    },

    // ── Marca ─────────────────────────────────────────────────
    primary: {
      DEFAULT: '#3F5DAA', // botões sólidos
      hover: '#4D6BBE',
      active: '#35509A',
    },
    accent: {
      DEFAULT: '#84A3DA', // periwinkle — assinatura da marca
      bright: '#A6BEE8',  // hover de links/ícones
      subtle: 'rgba(132, 163, 218, 0.10)',
    },
    b2b: '#1E3A5F',        // navy corporativo Skill B2B (institucional)

    // ── Texto ─────────────────────────────────────────────────
    paper: '#EEF1F7',      // texto primário (o "branco" da marca)
    muted: {
      DEFAULT: '#8B95A8',  // texto secundário
      2: '#565F73',        // texto terciário / disabled
    },
    white: '#F7F9FD',      // apenas display gigante / valor de preço

    // ── Estados ───────────────────────────────────────────────
    success: { DEFAULT: '#4CC38A', bg: 'rgba(76, 195, 138, 0.12)' },
    warning: { DEFAULT: '#D9883F', bg: 'rgba(217, 136, 63, 0.12)' },
    danger:  { DEFAULT: '#E5636C', bg: 'rgba(229, 99, 108, 0.12)' },
    info:    { DEFAULT: '#84A3DA', bg: 'rgba(132, 163, 218, 0.12)' },

    // ── Linhas / overlay ─────────────────────────────────────
    line: {
      DEFAULT: 'rgba(132, 163, 218, 0.20)',  // borda padrão
      soft: 'rgba(230, 236, 245, 0.08)',     // borda discreta
      active: 'rgba(132, 163, 218, 0.45)',   // borda de foco
    },
    overlay: 'rgba(9, 13, 23, 0.72)',
  },

  fontFamily: {
    display: ['Inter Tight', 'system-ui', 'sans-serif'], // títulos, números
    sans: ['Inter', 'system-ui', 'sans-serif'],          // corpo, UI
    mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
  },

  fontSize: {
    // [size, { lineHeight, letterSpacing }]
    'display-2xl': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.03em' }],
    'display-xl':  ['3.5rem',  { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
    'display-lg':  ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
    'heading-xl':  ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
    'heading-lg':  ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
    'heading-md':  ['1.375rem',{ lineHeight: '1.3',  letterSpacing: '-0.01em' }],
    'heading-sm':  ['1.125rem',{ lineHeight: '1.4' }],
    'body-lg':     ['1.125rem',{ lineHeight: '1.65' }],
    'body-md':     ['1rem',    { lineHeight: '1.6' }],
    'body-sm':     ['0.875rem',{ lineHeight: '1.55' }],
    caption:       ['0.75rem', { lineHeight: '1.4',  letterSpacing: '0.01em' }],
    eyebrow:       ['0.75rem', { lineHeight: '1.2',  letterSpacing: '0.30em' }],
  },

  spacing: {
    // grid de 8px (sub-passo 4px) — usar junto da escala default do Tailwind
    18: '4.5rem',   // 72px
    22: '5.5rem',   // 88px
    26: '6.5rem',   // 104px
    30: '7.5rem',   // 120px
    section: '6rem',        // 96px — ritmo vertical desktop
    'section-sm': '5rem',   // 80px — ritmo vertical mobile
    safe: '2rem',           // 32px — padding lateral mínimo mobile
  },

  borderRadius: {
    sm: '6px',    // badges, tags
    md: '10px',   // inputs, tooltips
    lg: '16px',   // cards
    xl: '22px',   // cards hero, modais
    pill: '999px' // botões pill — assinatura da marca
  },

  boxShadow: {
    sm: '0 2px 8px rgba(4, 7, 14, 0.35)',
    md: '0 8px 24px rgba(4, 7, 14, 0.45)',
    lg: '0 16px 48px rgba(4, 7, 14, 0.55)',
    glow: '0 0 40px rgba(63, 93, 170, 0.30)',        // CTA / preço
    ring: '0 0 0 3px rgba(132, 163, 218, 0.35)',     // focus ring
  },

  backgroundImage: {
    'gradient-primary': 'linear-gradient(135deg, #3F5DAA 0%, #4D6BBE 100%)',
    'gradient-surface': 'linear-gradient(180deg, #0C1322 0%, #090D17 100%)',
    'gradient-glow':
      'radial-gradient(1100px 620px at 80% -10%, rgba(63,93,170,0.26), transparent 62%)',
    'gradient-glow-alt':
      'radial-gradient(900px 700px at -12% 112%, rgba(63,93,170,0.14), transparent 60%)',
    // Textura blueprint-assinatura — usar com bg-[length:46px_46px] e mask fade
    'blueprint-grid':
      'linear-gradient(rgba(132,163,218,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(132,163,218,0.055) 1px, transparent 1px)',
  },

  backgroundSize: {
    blueprint: '46px 46px',
  },

  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  maxWidth: {
    container: '1200px', // layout geral
    reading: '1080px',   // propostas / leitura
    prose: '720px',      // texto longo
  },

  zIndex: {
    dropdown: '40',
    sticky: '50',
    overlay: '60',
    modal: '70',
    toast: '80',
    tooltip: '90',
  },

  transitionTimingFunction: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    out: 'cubic-bezier(0.16, 1, 0.3, 1)',
    in: 'cubic-bezier(0.7, 0, 0.84, 0)',
  },

  transitionDuration: {
    fast: '150ms',
    base: '300ms',
    reveal: '550ms',
    slow: '800ms',
  },

  keyframes: {
    reveal: {
      '0%': { opacity: '0', transform: 'translateY(16px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    strikethrough: {
      '0%': { width: '0%' },
      '100%': { width: '100%' },
    },
    glowPulse: {
      '0%, 100%': { opacity: '0.8' },
      '50%': { opacity: '1' },
    },
  },

  animation: {
    reveal: 'reveal 550ms cubic-bezier(0.16, 1, 0.3, 1) both',
    strikethrough: 'strikethrough 600ms cubic-bezier(0.16, 1, 0.3, 1) 300ms both',
    'glow-pulse': 'glowPulse 4s ease-in-out infinite',
  },
} as const

/**
 * Exemplo de uso em componentes:
 *
 *  Botão primário (pill-assinatura):
 *    <button class="bg-gradient-primary text-paper font-sans font-semibold
 *                   rounded-pill px-7 py-3.5 shadow-glow
 *                   hover:bg-primary-hover transition-all duration-base">
 *      Instalar o sistema →
 *    </button>
 *
 *  Card padrão:
 *    <div class="bg-panel border border-line rounded-lg p-6
 *                hover:bg-panel-2 hover:border-line-active
 *                hover:-translate-y-0.5 hover:shadow-md
 *                transition-all duration-base">
 *
 *  Eyebrow de seção numerada:
 *    <p class="text-eyebrow font-sans font-semibold uppercase text-accent">
 *      01 — Diagnóstico
 *    </p>
 *
 *  Título bicolor:
 *    <h2 class="font-display font-bold text-heading-xl text-paper">
 *      Liderança <span class="text-accent">100% prática</span>
 *    </h2>
 *
 *  Hero com blueprint + glow:
 *    <section class="bg-ink bg-gradient-glow relative">
 *      <div class="absolute inset-0 bg-blueprint-grid bg-blueprint
 *                  [mask-image:linear-gradient(180deg,transparent,#000_30%,#000_70%,transparent)]
 *                  opacity-60 pointer-events-none" />
 *      ...
 *    </section>
 */

export default brandTheme
