'use client'

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { easing, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

type As = 'div' | 'section' | 'li' | 'article' | 'span' | 'header'

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** atraso em segundos (stagger manual) */
  delay?: number
  /** distância vertical inicial */
  y?: number
  as?: As
} & Omit<HTMLMotionProps<'div'>, 'children' | 'ref'>

/**
 * Scroll-reveal-assinatura. Respeita prefers-reduced-motion.
 * Componente base do sistema de animação — usado em todas as seções.
 */
export function Reveal({ children, className, delay = 0, y = 16, as = 'div', ...rest }: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: easing.out, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
