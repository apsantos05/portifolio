import { Mail, MapPin, Github, Linkedin, Instagram, Clock } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/motion/Reveal'
import { ContactForm } from '@/components/forms/ContactForm'
import { site } from '@/lib/site'

const socials = [
  { label: 'GitHub', href: site.social.github, Icon: Github },
  { label: 'LinkedIn', href: site.social.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: site.social.instagram, Icon: Instagram },
].filter((s) => Boolean(s.href))

/** Contato — CTA final forte + ContactForm plugado. */
export function Contact() {
  return (
    <Section id="contato" spacious aria-label="Contato">
      <div className="relative overflow-hidden rounded-2xl border border-line-active/60 bg-panel-2 p-8 shadow-glow sm:p-12 lg:p-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-40 mask-fade-y" />
        <div aria-hidden className="pointer-events-none absolute inset-0 glow-hero opacity-70" />

        <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Coluna de apresentação */}
          <div>
            <SectionHeader
              index="08"
              eyebrow="Contato"
              title={
                <>
                  Vamos construir o seu <span className="text-accent">projeto</span>.
                </>
              }
              description="Conte o problema que você quer resolver. Respondo pessoalmente — sem robô, sem formulário perdido."
            />

            <ul className="mt-10 flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 text-body-md text-paper transition-colors hover:text-accent"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-line-soft bg-panel text-accent">
                    <Mail className="h-4 w-4" />
                  </span>
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-body-md text-muted">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-line-soft bg-panel text-accent">
                  <MapPin className="h-4 w-4" />
                </span>
                {site.location}
              </li>
              <li className="flex items-center gap-3 text-body-md text-muted">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-line-soft bg-panel text-accent">
                  <Clock className="h-4 w-4" />
                </span>
                Resposta em até 1 dia útil
              </li>
            </ul>

            <div className="mt-8 flex gap-2">
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
          </div>

          {/* Coluna do formulário */}
          <Reveal className="rounded-xl border border-line-soft bg-ink/40 p-6 backdrop-blur sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
