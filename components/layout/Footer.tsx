import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
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
  const year = 2026 // ano-base do projeto (evita mismatch de hidratação)

  return (
    <footer className="relative border-t border-line-soft bg-ink-2">
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-alt opacity-60" />
      <Container className="relative py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-5 text-body-sm text-muted">{site.tagline}</p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2">
              Navegação
            </p>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2">
              Contato
            </p>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-paper"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <div className="mt-2 flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-line text-muted transition-colors hover:border-line-active hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line-soft pt-6 md:flex-row md:items-center">
          <p className="font-mono text-xs text-muted-2">
            © {year} {site.name}. Feito à mão com Next.js.
          </p>
          <p className="font-mono text-xs text-muted-2">{site.location}</p>
        </div>
      </Container>
    </footer>
  )
}
