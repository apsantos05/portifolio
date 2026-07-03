import { MessageCircle } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { site, getWhatsappUrl, hasWhatsapp } from '@/lib/site'

/** Mensagem pré-preenchida do CTA principal (solicitação de orçamento). */
const WHATSAPP_MESSAGE =
  'Olá, Arthur! Vi seu portfólio e gostaria de solicitar um orçamento para um projeto. Quando puder, podemos conversar?'

/**
 * Início — Hero de marca pessoal (Server Component, entrada por CSS puro).
 * O nome é o principal elemento visual, ao lado da foto. Sem blueprint/grid/wireframe.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-16 pt-28 md:pt-36 lg:pb-28 lg:pt-40"
    >
      {/* atmosfera: apenas glow discreto (sem grid/blueprint) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-hero" />
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-alt" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ── Nome + função + copy + botões ── */}
          <div className="max-w-2xl">
            <p
              className="animate-rise inline-flex items-center gap-2.5 rounded-pill border border-line-soft bg-panel/50 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur"
              style={{ animationDelay: '40ms' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Disponível para novos projetos
            </p>

            <h1
              className="animate-rise mt-6 font-display font-extrabold leading-[0.95] tracking-[-0.04em] text-paper [text-wrap:balance]"
              style={{ animationDelay: '120ms', fontSize: 'clamp(3rem, 9vw, 5.75rem)' }}
            >
              Arthur Santos
            </h1>

            <p
              className="animate-rise mt-4 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-accent sm:text-base"
              style={{ animationDelay: '200ms' }}
            >
              <span aria-hidden className="h-px w-8 bg-accent/50" />
              Full Stack Dev
            </p>

            <p
              className="animate-rise mt-7 max-w-xl text-body-lg text-muted"
              style={{ animationDelay: '280ms' }}
            >
              Desenvolvedor full stack. Crio sites, sistemas e aplicações sob medida —
              do problema à solução, com o cuidado de quem trata o seu negócio como se
              fosse o próprio.
            </p>

            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '380ms' }}
            >
              <Button href={getWhatsappUrl(WHATSAPP_MESSAGE)} external={hasWhatsapp()} size="lg" withArrow={false}>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                  Conversar no WhatsApp
                </span>
              </Button>
              <Button href="/#projetos" variant="secondary" size="lg" withArrow={false}>
                Ver projetos
              </Button>
            </div>
          </div>

          {/* ── Foto (principal elemento visual ao lado do nome) ── */}
          <div className="animate-rise" style={{ animationDelay: '260ms' }}>
            <PhotoFrame
              src={site.photo}
              alt={`${site.name}, ${site.role}`}
              caption={{ name: site.name, role: 'full-stack · sob medida' }}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
