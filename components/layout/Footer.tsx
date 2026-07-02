import Link from 'next/link'
import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Wordmark } from '@/components/brand/Wordmark'
import { site } from '@/lib/site'
import { navItems } from '@/content/navigation'

const socials = [
  { label: 'GitHub', href: site.social.github, Icon: Github },
  { label: 'LinkedIn', href: site.social.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: site.social.instagram, Icon: Instagram },
].filter((s) => Boolean(s.href))

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line-soft bg-ink-2">
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-alt opacity-60" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-30 mask-fade-y" />

      <Container className="relative py-20">
        {/* Assinatura editorial + e-mail como gesto tipográfico */}
        <p className="max-w-3xl font-display text-[clamp(1.6rem,4.5vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-paper [text-wrap:balance]">
          Transformo a história do seu negócio em software que{' '}
          <span className="text-accent">funciona</span>.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="group mt-8 inline-flex items-center gap-3 font-display text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-paper transition-colors hover:text-accent"
        >
          {site.email}
          <ArrowUpRight className="h-6 w-6 transition-transform duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        {/* Navegação + redes */}
        <div className="mt-16 flex flex-col justify-between gap-10 border-t border-line-soft pt-12 md:flex-row">
          <Wordmark />

          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-block py-2 text-sm text-muted transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {socials.length > 0 && (
            <div className="flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-active hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Crédito sóbrio (sem clichê) */}
        <div className="mt-12 flex flex-col gap-2 border-t border-line-soft pt-6 font-mono text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {site.name} — {site.role}</span>
          <span>Projetado e desenvolvido por Arthur Santos · {site.location}</span>
        </div>
      </Container>
    </footer>
  )
}
