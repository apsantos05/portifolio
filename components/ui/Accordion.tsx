'use client'

import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'

export type AccordionItemData = {
  question: string
  answer: React.ReactNode
}

type AccordionProps = {
  items: AccordionItemData[]
  className?: string
  /** permite mais de um item aberto ao mesmo tempo */
  allowMultiple?: boolean
}

/**
 * Accordion acessível (disclosure pattern): aria-expanded, aria-controls, teclado nativo.
 * Data-driven — recebe itens de content/faq.ts. Reutilizável em qualquer FAQ.
 */
export function Accordion({ items, className, allowMultiple }: AccordionProps) {
  const [open, setOpen] = useState<Set<number>>(new Set())
  const reduce = useReducedMotion()
  const baseId = useId()

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : [])
      if (prev.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className={cn('flex flex-col divide-y divide-line-soft border-y border-line-soft', className)}>
      {items.map((item, i) => {
        const isOpen = open.has(i)
        const btnId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-paper focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
              >
                <span className="font-display text-heading-sm font-semibold text-paper">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    'grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-accent transition-transform duration-base ease-standard',
                    isOpen && 'rotate-45 bg-accent-subtle',
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 pr-12 text-body-md text-muted">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
