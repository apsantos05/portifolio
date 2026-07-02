import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Grid } from '@/components/layout/Grid'
import { Reveal } from '@/components/motion/Reveal'
import { ProjectCard } from '@/components/case-study/ProjectCard'
import { getAllProjects } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Estudos de caso de sistemas, SaaS e aplicações desenvolvidos por Arthur Santos — do problema à solução.',
  alternates: { canonical: '/projetos' },
}

export default function ProjectsIndexPage() {
  const projects = getAllProjects()

  return (
    <Section className="pt-28 md:pt-36">
      <SectionHeader
        as="h1"
        eyebrow="Projetos"
        title={<>Estudos de caso, não <span className="text-accent">cards</span>.</>}
        description="Cada projeto contado de verdade: o problema, a solução e as decisões técnicas por trás."
      />
      <Grid cols={2} gap="lg" className="mt-14">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} priority={i < 2} />
          </Reveal>
        ))}
      </Grid>
    </Section>
  )
}
