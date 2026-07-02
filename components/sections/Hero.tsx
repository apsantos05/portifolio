import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { primaryCta } from '@/content/navigation'

const facts = ['Programando desde os 12 anos', 'Full-stack ponta a ponta', 'Produto próprio no ar']

/**
 * Hero — Server Component (sem JS no LCP). Entrada e "desenho do blueprint" via
 * CSS puro. Momento-assinatura: a planta técnica que se desenha e vira produto —
 * tradução visual do conceito da marca (DISCOVERY §2/§11).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pt-36 lg:pb-28 lg:pt-44">
      {/* Atmosfera */}
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-hero" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint mask-fade-radial opacity-60" />
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-alt" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* Texto editorial */}
          <div className="max-w-2xl">
            <p
              className="animate-rise inline-flex items-center gap-2.5 rounded-pill border border-line-soft bg-panel/50 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur"
              style={{ animationDelay: '40ms' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Disponível para novos projetos
            </p>

            <h1
              className="animate-rise mt-6 font-display font-extrabold leading-[0.98] tracking-[-0.035em] text-paper [text-wrap:balance]"
              style={{ animationDelay: '120ms', fontSize: 'clamp(2.75rem, 8vw, 5.25rem)' }}
            >
              Transformo a história do seu negócio em software que{' '}
              <span className="text-accent">funciona</span>.
            </h1>

            <p
              className="animate-rise mt-7 max-w-xl text-body-lg text-muted"
              style={{ animationDelay: '220ms' }}
            >
              Desenvolvedor full stack. Crio sites, sistemas e aplicações sob medida —
              do problema à solução, com o cuidado de quem trata o seu negócio como se
              fosse o próprio.
            </p>

            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '320ms' }}
            >
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              <Button href="/#projetos" variant="secondary" size="lg" withArrow={false}>
                Ver projetos
              </Button>
            </div>

            <ul
              className="animate-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-2"
              style={{ animationDelay: '420ms' }}
            >
              {facts.map((f) => (
                <li key={f} className="flex items-center gap-2 font-mono text-xs text-muted-2">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-accent/60" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual-assinatura: blueprint que se desenha */}
          <div
            className="animate-rise relative mx-auto w-full max-w-md lg:mx-0"
            style={{ animationDelay: '260ms' }}
          >
            <BlueprintVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}

/** Planta técnica animada (SVG + CSS). "Blueprint → produto". */
function BlueprintVisual() {
  const S = 'rgba(132,163,218,0.55)' // stroke accent
  const F = 'rgba(132,163,218,0.14)' // fill accent suave
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-panel-2/60">
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-70" />
      <div aria-hidden className="absolute inset-0 glow-hero opacity-60" />
      {/* linha de varredura */}
      <span
        aria-hidden
        className="bp-scan absolute inset-x-5 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      <svg
        viewBox="0 0 460 560"
        fill="none"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Ilustração de uma interface sendo projetada — do wireframe ao produto"
      >
        {/* frame do app */}
        <rect x="28" y="28" width="404" height="504" rx="18" stroke={S} strokeWidth="1.5" className="bp-draw" style={{ animationDelay: '300ms' }} />
        {/* barra de janela sóbria (sem semáforo) */}
        <path d="M28 76 H432" stroke={S} strokeWidth="1.25" className="bp-draw" style={{ animationDelay: '360ms' }} />
        <rect x="48" y="46" width="84" height="16" rx="8" fill={F} className="animate-rise" style={{ animationDelay: '520ms' }} />
        <text x="150" y="59" fontFamily="monospace" fontSize="13" fill="rgba(139,149,168,0.7)" className="animate-rise" style={{ animationDelay: '640ms' }}>
          arthursantos.dev
        </text>

        {/* bloco hero */}
        <rect x="48" y="98" width="232" height="150" rx="12" stroke={S} strokeWidth="1.25" className="bp-draw" style={{ animationDelay: '520ms' }} />
        <rect x="66" y="122" width="176" height="12" rx="6" fill={F} className="animate-rise" style={{ animationDelay: '760ms' }} />
        <rect x="66" y="144" width="120" height="12" rx="6" fill="rgba(238,241,247,0.10)" className="animate-rise" style={{ animationDelay: '820ms' }} />
        <rect x="66" y="180" width="92" height="24" rx="12" fill="rgba(132,163,218,0.6)" className="animate-rise" style={{ animationDelay: '900ms' }} />

        {/* painel lateral */}
        <rect x="296" y="98" width="116" height="150" rx="12" stroke={S} strokeWidth="1.25" className="bp-draw" style={{ animationDelay: '600ms' }} />
        <circle cx="326" cy="130" r="12" fill={F} className="animate-rise" style={{ animationDelay: '900ms' }} />
        <rect x="314" y="156" width="80" height="8" rx="4" fill="rgba(238,241,247,0.08)" className="animate-rise" style={{ animationDelay: '960ms' }} />
        <rect x="314" y="174" width="60" height="8" rx="4" fill="rgba(238,241,247,0.08)" className="animate-rise" style={{ animationDelay: '1000ms' }} />

        {/* dois cards */}
        <rect x="48" y="268" width="182" height="140" rx="12" stroke={S} strokeWidth="1.25" className="bp-draw" style={{ animationDelay: '720ms' }} />
        <rect x="246" y="268" width="166" height="140" rx="12" stroke={S} strokeWidth="1.25" className="bp-draw" style={{ animationDelay: '780ms' }} />
        <rect x="68" y="288" width="40" height="40" rx="10" fill={F} className="animate-rise" style={{ animationDelay: '1040ms' }} />
        <rect x="266" y="288" width="40" height="40" rx="10" fill={F} className="animate-rise" style={{ animationDelay: '1080ms' }} />

        {/* barra inferior */}
        <rect x="48" y="428" width="364" height="84" rx="12" stroke={S} strokeWidth="1.25" className="bp-draw" style={{ animationDelay: '840ms' }} />

        {/* nós de conexão */}
        {[
          [28, 28],
          [432, 28],
          [28, 532],
          [432, 532],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#84A3DA" className="animate-rise" style={{ animationDelay: `${1100 + i * 60}ms` }} />
        ))}
      </svg>

      {/* legenda técnica */}
      <div
        className="animate-rise absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-line-soft bg-ink/70 px-4 py-2.5 backdrop-blur"
        style={{ animationDelay: '1200ms' }}
      >
        <span className="font-mono text-[0.7rem] text-muted">blueprint → produto</span>
        <span className="flex items-center gap-1.5 font-mono text-[0.7rem] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-success" /> compilando
        </span>
      </div>
    </div>
  )
}
