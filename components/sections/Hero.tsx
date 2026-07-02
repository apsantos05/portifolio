'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { Badge } from '@/components/ui/Badge'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { primaryCta } from '@/content/navigation'
import { site } from '@/lib/site'

const stack = ['Next.js', 'TypeScript', 'Node.js', 'React', 'IA aplicada']

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36 lg:pb-30 lg:pt-40">
      {/* Camadas de atmosfera (decorativas, sob o conteúdo) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-hero" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint mask-fade-radial opacity-70"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-alt" />

      <Container className="relative">
        <motion.div
          variants={reduce ? undefined : staggerContainer(0.08)}
          initial={reduce ? false : 'hidden'}
          animate={reduce ? undefined : 'show'}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          {/* Coluna de texto */}
          <div className="max-w-xl">
            <motion.div variants={reduce ? undefined : staggerItem}>
              <Badge tone="success" dot>
                Disponível para novos projetos
              </Badge>
            </motion.div>

            <motion.h1
              variants={reduce ? undefined : staggerItem}
              className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-paper sm:text-5xl lg:text-[3.5rem]"
            >
              Transformo a história do seu negócio em software que{' '}
              <span className="text-accent">funciona</span>.
            </motion.h1>

            <motion.p
              variants={reduce ? undefined : staggerItem}
              className="mt-6 max-w-lg text-body-lg text-muted"
            >
              Desenvolvedor full stack. Crio sites, sistemas e aplicações sob medida —
              do problema à solução, com o cuidado de quem trata o seu negócio como se
              fosse o próprio.
            </motion.p>

            <motion.div
              variants={reduce ? undefined : staggerItem}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              <Button href="/#projetos" variant="secondary" size="lg">
                Ver projetos
              </Button>
            </motion.div>

            {/* Prova técnica discreta */}
            <motion.div variants={reduce ? undefined : staggerItem} className="mt-10">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2">
                Stack principal
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li key={tech}>
                    <Tag mono>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Coluna da foto — painel blueprint emoldurado */}
          <motion.div
            variants={reduce ? undefined : staggerItem}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-panel-2 shadow-lg">
              <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50" />
              {site.photo ? (
                <Image
                  src={site.photo}
                  alt="Arthur Santos, desenvolvedor full stack"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                />
              ) : (
                <div
                  aria-label="Espaço reservado para a foto de Arthur Santos"
                  className="absolute inset-0 grid place-items-center"
                >
                  <div aria-hidden className="absolute inset-0 glow-hero opacity-80" />
                  <span className="relative font-display text-[7rem] font-extrabold leading-none tracking-tight text-paper/90">
                    A<span className="text-accent">S</span>
                  </span>
                </div>
              )}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-line-soft bg-ink/70 px-4 py-3 backdrop-blur">
                <div>
                  <p className="font-display text-sm font-bold text-paper">Arthur Santos</p>
                  <p className="font-mono text-[0.7rem] text-muted">
                    full-stack · sob medida
                  </p>
                </div>
                <Link
                  href="/#sobre"
                  aria-label="Conhecer a história"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-accent transition-colors hover:bg-accent-subtle focus-visible:shadow-[var(--focus-ring)] focus-visible:outline-none"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div
              aria-hidden
              className="absolute -left-5 -top-5 hidden select-none font-display text-6xl font-extrabold text-panel-2 lg:block"
            >
              01
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
