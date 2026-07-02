import type { Config } from 'tailwindcss'
// ── Single Source of Truth ────────────────────────────────────────────
// O tema é CONSUMIDO de ./brand (espelho versionado da SSOT D:\Projetos\brand),
// dentro do repositório para o build funcionar na Vercel. Nada é recriado aqui.
import { brandTheme } from './brand/TAILWIND_THEME'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // brandTheme é `as const` (readonly); o Tailwind espera tipos mutáveis.
      // O cast preserva os valores da SSOT sem recriá-los.
      ...(brandTheme as unknown as Record<string, unknown>),
      fontFamily: {
        // Ligadas às CSS variables geradas por next/font (ver app/layout.tsx)
        display: ['var(--font-display)', 'Inter Tight', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
