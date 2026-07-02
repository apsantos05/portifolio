import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink, Lock } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Stat } from '@/components/ui/Stat'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { IconFeature } from '@/components/ui/IconFeature'
import { Reveal } from '@/components/motion/Reveal'
import { MockupFrame } from './MockupFrame'
import { stageLabel, stageTone, getNextProject } from '@/content/projects'
import type { CaseStudy } from '@/content/types'

function NarrativeBlock({
  eyebrow,
  text,
}: {
  eyebrow: string
  text: string
}) {
  return (
    <Reveal className="flex flex-col gap-4">
      {/* h2 real (com aparência de eyebrow) — mantém as seções na árvore de headings */}
      <h2 className="flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase text-accent">
        <span aria-hidden className="h-px w-6 bg-accent/40" />
        {eyebrow}
      </h2>
      <p className="max-w-prose text-body-lg text-paper/90">{text}</p>
    </Reveal>
  )
}

/**
 * Renderizador ÚNICO de estudo de caso. Todo projeto usa exatamente esta estrutura.
 * Recebe um CaseStudy e monta: hero → contexto → desafio → solução → features →
 * processo → stack → resultados → galeria → próximo projeto → CTA.
 */
export function CaseStudyView({ project }: { project: CaseStudy }) {
  const next = getNextProject(project.slug)

  return (
    <article>
      {/* ── Hero do case ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-12 pt-28 md:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0 glow-hero" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-blueprint mask-fade-radial opacity-60"
        />
        <Container className="relative">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-body-sm text-muted transition-colors hover:text-paper"
          >
            <ArrowLeft className="h-4 w-4" /> Todos os projetos
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge tone={stageTone[project.stage]} dot>
              {stageLabel[project.stage]}
            </Badge>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted-2">
              {project.category} · {project.year}
            </span>
            {project.confidential && (
              <span className="inline-flex items-center gap-1.5 text-caption text-muted-2">
                <Lock className="h-3.5 w-3.5" /> Case anonimizado
              </span>
            )}
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-paper">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-body-lg text-muted">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-caption text-muted-2">Cliente</span>
              <span className="text-body-sm text-paper">{project.client}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-caption text-muted-2">Meu papel</span>
              <span className="text-body-sm text-paper">{project.role}</span>
            </div>
            {project.liveUrl && (
              <Button href={project.liveUrl} external variant="secondary" withArrow={false}>
                <span className="inline-flex items-center gap-2">
                  Ver ao vivo <ExternalLink className="h-4 w-4" />
                </span>
              </Button>
            )}
          </div>
        </Container>
      </section>

      {/* ── Cover ────────────────────────────────────────────────── */}
      {project.cover && (
        <Container className="relative">
          <Reveal>
            <MockupFrame image={project.cover} priority />
          </Reveal>
        </Container>
      )}

      {/* ── Narrativa: contexto / desafio / solução ──────────────── */}
      <Section>
        <div className="flex flex-col gap-12">
          <NarrativeBlock eyebrow="O contexto" text={project.context} />
          <NarrativeBlock eyebrow="O desafio" text={project.challenge} />
          <NarrativeBlock eyebrow="A solução" text={project.solution} />
        </div>
      </Section>

      {/* ── Funcionalidades ──────────────────────────────────────── */}
      {project.features.length > 0 && (
        <Section elevated>
          <Reveal>
            <Eyebrow>Funcionalidades</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-heading-xl font-bold text-paper">
              O que foi construído
            </h2>
          </Reveal>
          <Grid cols={3} gap="lg" className="mt-12">
            {project.features.map((f) => (
              <Card key={f.title} as="article">
                {f.icon && <IconFeature icon={f.icon} className="mb-5" />}
                <h3 className="font-display text-heading-md font-semibold text-paper">
                  {f.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted">{f.description}</p>
              </Card>
            ))}
          </Grid>
        </Section>
      )}

      {/* ── Processo ─────────────────────────────────────────────── */}
      {project.process.length > 0 && (
        <Section>
          <Reveal>
            <Eyebrow>Processo</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-heading-xl font-bold text-paper">
              Como foi construído
            </h2>
          </Reveal>
          <ol className="mt-12 flex flex-col gap-px overflow-hidden rounded-xl border border-line-soft">
            {project.process.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col gap-2 bg-panel/40 p-6 sm:flex-row sm:gap-8 sm:p-8"
              >
                <span className="font-display text-heading-lg font-extrabold text-panel-2 sm:w-16">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-heading-sm font-semibold text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-body-sm text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* ── Stack ────────────────────────────────────────────────── */}
      {project.techStack.length > 0 && (
        <Section elevated>
          <Reveal>
            <Eyebrow>Tecnologias</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-heading-xl font-bold text-paper">
              O que está por baixo
            </h2>
          </Reveal>
          <Grid cols={2} gap="lg" className="mt-12">
            {project.techStack.map((cat) => (
              <div key={cat.label} className="rounded-xl border border-line-soft bg-panel/40 p-6">
                <h3 className="font-display text-heading-sm font-semibold text-paper">
                  {cat.label}
                </h3>
                <p className="mt-1 text-body-sm text-muted">{cat.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <Tag mono>{item.name}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Grid>
        </Section>
      )}

      {/* ── Resultados ───────────────────────────────────────────── */}
      <Section>
        <Reveal>
          <Eyebrow>Resultados</Eyebrow>
        </Reveal>
        {project.results && project.results.length > 0 ? (
          <Grid cols={project.results.length >= 3 ? 3 : 2} gap="lg" className="mt-8">
            {project.results.map((r) => (
              <Stat key={r.label} value={r.value} label={r.label} />
            ))}
          </Grid>
        ) : (
          <p className="mt-6 max-w-prose text-body-lg text-muted">{project.resultsNote}</p>
        )}
      </Section>

      {/* ── Galeria ──────────────────────────────────────────────── */}
      {project.gallery.length > 0 && (
        <Section elevated>
          <Reveal>
            <Eyebrow>Galeria</Eyebrow>
            <h2 className="mt-5 font-display text-heading-xl font-bold text-paper">
              Por dentro do produto
            </h2>
          </Reveal>
          <Grid cols={project.gallery.length >= 3 ? 2 : 1} gap="lg" className="mt-12">
            {project.gallery.map((img, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <MockupFrame image={img} />
              </Reveal>
            ))}
          </Grid>
        </Section>
      )}

      {/* ── Próximo projeto + CTA ───────────────────────────────── */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-8 rounded-xl border border-line bg-panel p-8 md:flex-row md:items-center md:p-10">
          <div>
            <span className="text-caption text-muted-2">Próximo projeto</span>
            <Link
              href={`/projetos/${next.slug}`}
              className="group mt-2 flex items-center gap-3 font-display text-heading-lg font-bold text-paper transition-colors hover:text-accent"
            >
              {next.name}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <Button href="/#contato" size="lg">
            Iniciar um projeto
          </Button>
        </div>
      </Section>
    </article>
  )
}
