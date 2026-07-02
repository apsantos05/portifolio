import type { Variants, Transition } from 'framer-motion'

/**
 * Tokens de movimento — espelham a marca (DISCOVERY §11 / TOKENS.json animation).
 * Motion com propósito: fade + translateY curto, ease-out, sem bounce/flash.
 */
export const easing = {
  out: [0.16, 1, 0.3, 1] as const,
  standard: [0.4, 0, 0.2, 1] as const,
  in: [0.7, 0, 0.84, 0] as const,
}

export const duration = {
  fast: 0.15,
  base: 0.3,
  reveal: 0.55,
  slow: 0.8,
}

export const transitions = {
  reveal: { duration: duration.reveal, ease: easing.out } satisfies Transition,
  base: { duration: duration.base, ease: easing.standard } satisfies Transition,
}

/** Reveal-assinatura: fade + subida de 16px. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: transitions.reveal },
}

/** Container que orquestra filhos em stagger (80ms — token da marca). */
export const staggerContainer = (stagger = 0.08, delayChildren = 0.05): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

/** Item filho de um container em stagger. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing.out } },
}

/** Viewport padrão para animações on-scroll (dispara uma vez). */
export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' } as const
