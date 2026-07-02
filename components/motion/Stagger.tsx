'use client'

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

type StaggerProps = {
  children: React.ReactNode
  className?: string
  /** intervalo entre filhos, em segundos */
  gap?: number
  as?: 'div' | 'ul' | 'ol'
} & Omit<HTMLMotionProps<'div'>, 'children' | 'ref'>

/** Orquestrador de entrada em cascata (aplica-se aos <StaggerItem/> filhos). */
export function Stagger({ children, className, gap = 0.08, as = 'div', ...rest }: StaggerProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      className={cn(className)}
      variants={reduce ? undefined : staggerContainer(gap)}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

type ItemProps = {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
} & Omit<HTMLMotionProps<'div'>, 'children' | 'ref'>

export function StaggerItem({ children, className, as = 'div', ...rest }: ItemProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag className={cn(className)} variants={reduce ? undefined : staggerItem} {...rest}>
      {children}
    </MotionTag>
  )
}
