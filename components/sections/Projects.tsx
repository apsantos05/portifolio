import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Grid } from '@/components/layout/Grid'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { ProjectCard } from '@/components/case-study/ProjectCard'
import { getAllProjects } from '@/content/projects'

/** Projetos — grade de estudos de caso. Reusa ProjectCard + content/projects. */
export function Projects() {
  const projects = getAllProjects()

  return (
    <Section id="projetos" elevated aria-label="Projetos">
      <SectionHeader
        index="04"
        eyebrow="Projetos"
        title={
          <>
            Estudos de caso, não <span className="text-accent">cards</span>.
          </>
        }
        description="Cada projeto contado de verdade: o problema, a solução e as decisões técnicas por trás."
        actions={
          <Button href="/projetos" variant="secondary" withArrow>
            Ver todos
          </Button>
        }
      />

      <Grid cols={2} gap="lg" className="mt-14">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06}>
            <ProjectCard project={project} priority={i < 2} />
          </Reveal>
        ))}
      </Grid>
    </Section>
  )
}
