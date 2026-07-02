import { ArrowUpRight, Github } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { IconFeature } from '@/components/ui/IconFeature'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Reveal } from '@/components/motion/Reveal'
import { guarantees } from '@/content/trust'
import { site } from '@/lib/site'

/**
 * Garantias — prova social construída sobre compromissos e transparência,
 * não sobre depoimentos inventados (auditoria CRO §1). Aumenta confiança de forma honesta.
 */
export function Guarantees() {
  return (
    <Section id="garantias" aria-label="Por que confiar">
      <SectionHeader
        eyebrow="Confiança"
        title={
          <>
            Ainda não tenho depoimentos. Tenho <span className="text-accent">compromissos</span>.
          </>
        }
        description="Reputação se constrói com trabalho, não com frases. Enquanto os primeiros clientes chegam, aqui está exatamente o que você pode esperar ao trabalhar comigo."
      />

      <Stagger
        as="ul"
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        gap={0.06}
      >
        {guarantees.map((g) => (
          <StaggerItem
            as="li"
            key={g.title}
            className="flex h-full flex-col rounded-xl border border-line-soft bg-panel/40 p-6 transition-colors hover:border-line"
          >
            <IconFeature icon={g.icon} className="mb-5" />
            <h3 className="font-display text-heading-sm font-semibold text-paper">{g.title}</h3>
            <p className="mt-2 text-body-sm text-muted">{g.description}</p>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Transparência técnica: veja o código de verdade */}
      {site.social.github && (
        <Reveal className="mt-10">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-line bg-panel px-6 py-4 transition-colors hover:border-line-active"
          >
            <Github className="h-5 w-5 text-accent" />
            <span className="text-body-sm text-paper">
              Não acredita só na minha palavra?{' '}
              <span className="text-muted">Veja como eu construo — meu código é aberto.</span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </a>
        </Reveal>
      )}
    </Section>
  )
}
