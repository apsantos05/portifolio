'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { navItems } from '@/content/navigation'
import { cn } from '@/lib/cn'

/** Extrai o id da âncora de um href tipo "/#sobre" → "sobre". */
const anchorId = (href: string) => href.split('#')[1] ?? ''

/**
 * Header flutuante premium (pill glassmorphism, largura automática, centralizado).
 * - Desktop: menu horizontal com indicador de seção ativa (pill deslizante).
 * - Mobile: gatilho hambúrguer + overlay full-screen com a mesma identidade.
 * - Seção ativa via IntersectionObserver (sem libs externas).
 * Preserva tokens, tipografia e animações do resto da página.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggleRef = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()

  // Estado de scroll (compacta a barra e intensifica o vidro)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: destaca a seção visível (aria-current="location")
  useEffect(() => {
    const ids = navItems.map((i) => anchorId(i.href)).filter(Boolean)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Menu mobile: trava o scroll, fecha no Escape e devolve o foco ao gatilho
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-sticky flex justify-center px-4 sm:top-4">
      <nav
        aria-label="Navegação principal"
        className={cn(
          'pointer-events-auto relative z-10 rounded-full border border-line-soft',
          'bg-ink/60 backdrop-blur-xl transition-all duration-[400ms] ease-standard',
          'supports-[backdrop-filter]:bg-ink/50',
          scrolled
            ? 'shadow-lg backdrop-blur-2xl supports-[backdrop-filter]:bg-ink/70'
            : 'shadow-md',
        )}
      >
        {/* Desktop — menu horizontal com pill de seção ativa */}
        <ul
          className={cn(
            'hidden items-center gap-0.5 transition-all duration-[400ms] ease-standard md:flex',
            scrolled ? 'p-1' : 'p-1.5',
          )}
        >
          {navItems.map((item) => {
            const isActive = active === anchorId(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'relative block rounded-full px-3.5 text-sm font-medium transition-colors duration-base lg:px-4',
                    scrolled ? 'py-1.5' : 'py-2',
                    isActive ? 'text-paper' : 'text-muted hover:text-paper',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-line-soft bg-accent-subtle"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 400, damping: 34 }
                      }
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile — gatilho hambúrguer dentro do mesmo pill */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className={cn(
            'flex items-center gap-2 rounded-full px-5 text-sm font-medium text-paper transition-all duration-[400ms] ease-standard md:hidden',
            scrolled ? 'py-2.5' : 'py-3',
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span>{open ? 'Fechar' : 'Menu'}</span>
        </button>
      </nav>

      {/* Overlay mobile full-screen — desmontado quando fechado (nada focável fora de tela) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-0 z-0 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              className="flex flex-col gap-1 px-8 pt-28"
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.05 } },
              }}
            >
              {navItems.map((item, i) => {
                const isActive = active === anchorId(item.href)
                return (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                    className="border-b border-line-soft"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'location' : undefined}
                      className="flex items-baseline gap-4 py-5"
                    >
                      <span className="font-mono text-xs text-muted-2">0{i + 1}</span>
                      <span
                        className={cn(
                          'font-display text-3xl font-bold tracking-tight transition-colors',
                          isActive ? 'text-accent' : 'text-paper',
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
