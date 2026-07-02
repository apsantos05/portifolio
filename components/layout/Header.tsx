'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { site } from '@/lib/site'
import { navItems, primaryCta } from '@/content/navigation'
import { Wordmark } from '@/components/brand/Wordmark'
import { cn } from '@/lib/cn'

/** Extrai o id da âncora de um href tipo "/#sobre" → "sobre". */
const anchorId = (href: string) => href.split('#')[1] ?? ''

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggleRef = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()

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

  // Menu mobile: trava scroll, fecha no Escape e devolve o foco ao botão
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
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-sticky transition-all duration-base ease-standard',
        scrolled || open
          ? 'border-b border-line-soft bg-ink/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 sm:px-8 lg:px-16"
      >
        <Link href="/" aria-label={`${site.name} — início`} className="relative z-10 rounded-md">
          <Wordmark />
        </Link>

        {/* Navegação desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === anchorId(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-base',
                    isActive ? 'text-paper' : 'text-muted hover:text-paper',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3.5 -bottom-0.5 h-px bg-accent"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-pill bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-paper shadow-glow transition-transform duration-base hover:-translate-y-0.5"
          >
            {primaryCta.label}
          </Link>
        </div>

        {/* Toggle mobile */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="relative z-10 grid h-11 w-11 place-items-center rounded-md border border-line text-paper md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Overlay mobile full-screen — desmontado quando fechado (nada focável fora de tela) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={reduce ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-0 origin-top bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-40 mask-fade-y" />
            <motion.ul
              className="relative flex flex-col gap-1 px-6 pt-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.05 } } }}
            >
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="border-b border-line-soft"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-5"
                  >
                    <span className="font-mono text-xs text-muted-2">0{i + 1}</span>
                    <span className="font-display text-3xl font-bold tracking-tight text-paper">
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="mt-8"
              >
                <Link
                  href={primaryCta.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-pill bg-gradient-primary px-7 py-3.5 text-base font-semibold text-paper shadow-glow"
                >
                  {primaryCta.label}
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
