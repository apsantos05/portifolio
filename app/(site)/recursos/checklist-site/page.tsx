import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CircleCheck } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { JsonLd } from '@/components/seo/JsonLd'
import { siteChecklist } from '@/content/checklists'
import { breadcrumbJsonLd } from '@/lib/seo'

const totalItems = siteChecklist.groups.reduce((n, g) => n + g.items.length, 0)

export const metadata: Metadata = {
  title: siteChecklist.title,
  description:
    'Checklist gratuito com 20 pontos para avaliar se o seu site realmente traz clientes — performance, confiança, conversão e SEO.',
  alternates: { canonical: '/recursos/checklist-site' },
}

export default function ChecklistPage() {
  return (
    <>
      <Section className="pt-28 md:pt-36" containerSize="reading">
        <Link
          href="/recursos"
          className="inline-flex items-center gap-2 text-body-sm text-muted transition-colors hover:text-paper"
        >
          <ArrowLeft className="h-4 w-4" /> Recursos
        </Link>

        <Reveal className="mt-8">
          <Eyebrow>Checklist gratuito · {totalItems} pontos</Eyebrow>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-paper [text-wrap:balance]">
            {siteChecklist.title}
          </h1>
          <p className="mt-5 max-w-prose text-body-lg text-muted">{siteChecklist.intro}</p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-12">
          {siteChecklist.groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.04} as="section">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-2">
                  {String(gi + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-heading-lg font-bold text-paper">{group.title}</h2>
              </div>
              <p className="mt-1 pl-8 text-body-sm text-muted-2">{group.description}</p>
              <ul className="mt-5 flex flex-col gap-3 border-t border-line-soft pt-5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                    <span className="text-body-md text-paper/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Conversão: do checklist para o diagnóstico */}
      <Section elevated containerSize="reading" className="!pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line-active/50 bg-panel-2 p-8 sm:p-12">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-40 mask-fade-y" />
            <div className="relative">
              <h2 className="max-w-xl font-display text-heading-xl font-bold text-paper [text-wrap:balance]">
                Marcou vários <span className="text-accent">"não"</span>? Isso tem conserto.
              </h2>
              <p className="mt-3 max-w-xl text-body-md text-muted">
                Me mande o endereço do seu site. Eu faço um diagnóstico gratuito e te digo,
                sem enrolação, o que priorizar para ele começar a trazer clientes.
              </p>
              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Button href="/#contato" size="lg">
                  Solicitar diagnóstico gratuito
                </Button>
                <div className="sm:max-w-xs">
                  <p className="mb-2 text-caption text-muted-2">
                    Ou receba os próximos materiais por e-mail:
                  </p>
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Início', path: '/' },
          { name: 'Recursos', path: '/recursos' },
          { name: siteChecklist.title, path: '/recursos/checklist-site' },
        ])}
      />
    </>
  )
}
