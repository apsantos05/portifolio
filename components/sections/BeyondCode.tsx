import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { beyond } from '@/content/beyond'
import type { BeyondGlyph } from '@/content/types'

/**
 * Glifos autorais (SVG monoline) — engenharia, IA e arquitetura.
 * Nada de ícone genérico: cada motivo traduz o conceito do bloco.
 */
function Glyph({ name }: { name: BeyondGlyph }) {
  const common = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-11 w-11',
    'aria-hidden': true,
  }
  switch (name) {
    // IA — grafo de nós (rede neural)
    case 'ai':
      return (
        <svg {...common}>
          <path d="M24 24 11 12M24 24 37 12M24 24 11 36M24 24 37 36" opacity="0.5" />
          <circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none" />
          <circle cx="11" cy="12" r="2.5" />
          <circle cx="37" cy="12" r="2.5" />
          <circle cx="11" cy="36" r="2.5" />
          <circle cx="37" cy="36" r="2.5" />
        </svg>
      )
    // Engenharia — módulos em camadas (arquitetura)
    case 'engineering':
      return (
        <svg {...common}>
          <rect x="9" y="9" width="30" height="9" rx="2.5" />
          <rect x="9" y="20" width="30" height="9" rx="2.5" />
          <rect x="9" y="31" width="30" height="9" rx="2.5" />
          <circle cx="15" cy="13.5" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="15" cy="24.5" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="15" cy="35.5" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      )
    // Times — nós convergindo/amplificados a um ponto
    case 'teams':
      return (
        <svg {...common}>
          <path d="M10 37 24 14M24 37 24 14M38 37 24 14" opacity="0.5" />
          <circle cx="24" cy="12" r="3.5" fill="currentColor" stroke="none" />
          <circle cx="10" cy="37" r="2.5" />
          <circle cx="24" cy="37" r="2.5" />
          <circle cx="38" cy="37" r="2.5" />
        </svg>
      )
    // Evolução — trajetória ascendente
    case 'evolution':
      return (
        <svg {...common}>
          <path d="M9 38 19 30 29 21 39 11" />
          <circle cx="9" cy="38" r="2" />
          <circle cx="19" cy="30" r="2" />
          <circle cx="29" cy="21" r="2" />
          <circle cx="39" cy="11" r="3" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}

/**
 * Além do Código — seção de visão/autoridade. Premium, respiro amplo,
 * cards com microinteração e um bloco-manifesto ("Minha visão").
 * 100% data-driven (content/beyond.ts) e sobre o Design System existente.
 */
export function BeyondCode() {
  return (
    <Section
      id="alem-do-codigo"
      spacious
      aria-label="Além do código — visão e atuação com IA"
      className="overflow-hidden"
    >
      {/* Atmosfera sutil (glow descentralizado + blueprint quase imperceptível) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-alt" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.25] mask-fade-y"
      />

      {/* Cabeçalho editorial */}
      <div className="relative max-w-3xl">
        <Reveal>
          <Eyebrow>{beyond.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-paper [text-wrap:balance]">
            Além do <span className="text-accent">Código</span>
          </h2>
          <p className="mt-6 text-body-lg leading-relaxed text-muted">{beyond.subtitle}</p>
        </Reveal>
      </div>

      {/* Quatro blocos */}
      <Stagger
        as="ul"
        className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:gap-6"
        gap={0.08}
      >
        {beyond.blocks.map((block) => (
          <StaggerItem
            as="li"
            key={block.title}
            className="group relative overflow-hidden rounded-2xl border border-line-soft bg-panel/40 p-8 transition-all duration-base ease-standard hover:-translate-y-1 hover:border-line-active hover:bg-panel/70"
          >
            {/* brilho de canto no hover (gradiente sofisticado, discreto) */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(132,163,218,0.16),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative">
              <span className="text-accent transition-transform duration-base ease-out group-hover:scale-110">
                <Glyph name={block.glyph} />
              </span>
              <h3 className="mt-6 font-display text-heading-md font-semibold text-paper">
                {block.title}
              </h3>
              <p className="mt-2.5 text-body-md leading-relaxed text-muted">{block.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Bloco-manifesto: "Minha visão" */}
      <Reveal className="relative mt-6 lg:mt-8" delay={0.05}>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-line-active/40 bg-gradient-to-b from-panel-2 to-ink p-10 sm:p-14 lg:p-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 glow-hero opacity-70" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-blueprint opacity-30 mask-fade-radial"
          />
          {/* barra-assinatura no topo */}
          <span
            aria-hidden
            className="absolute left-0 top-0 h-1 w-24 rounded-b-full bg-gradient-primary"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">{beyond.vision.eyebrow}</Eyebrow>
            <p className="mt-8 font-display text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold leading-[1.2] tracking-[-0.02em] text-paper [text-wrap:balance]">
              {beyond.vision.lead}
            </p>
            <p className="mx-auto mt-7 max-w-2xl text-body-lg leading-relaxed text-muted">
              {beyond.vision.body}
            </p>
            <p className="mt-8 font-display text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold leading-[1.25] tracking-[-0.02em] text-accent [text-wrap:balance]">
              {beyond.vision.closing}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
