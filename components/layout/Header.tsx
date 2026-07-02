'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: destaca a seção visível (acessível via aria-current)
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

  // Trava o scroll do body com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-sticky transition-all duration-base ease-standard',
        scrolled
          ? 'border-b border-line-soft bg-ink/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 sm:px-8 lg:px-16"
      >
        <Link href="/" aria-label={`${site.name} — início`} className="rounded-md">
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
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-base',
                    isActive ? 'text-paper' : 'text-muted hover:text-paper',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-pill bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-paper shadow-glow transition-all duration-base hover:-translate-y-0.5"
          >
            {primaryCta.label}
          </Link>
        </div>

        {/* Toggle mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="grid h-10 w-10 place-items-center rounded-md border border-line text-paper md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={cn(
          'md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'overflow-hidden border-b border-line-soft bg-ink/95 backdrop-blur-lg transition-[max-height,opacity] duration-base ease-standard',
            open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-paper/90 hover:bg-panel"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href={primaryCta.href}
                onClick={() => setOpen(false)}
                className="block rounded-pill bg-gradient-primary px-5 py-3 text-center text-sm font-semibold text-paper"
              >
                {primaryCta.label}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
