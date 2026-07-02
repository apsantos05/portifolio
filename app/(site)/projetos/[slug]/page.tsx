import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudyView } from '@/components/case-study/CaseStudyView'
import { JsonLd } from '@/components/seo/JsonLd'
import { getProjectBySlug, getProjectSlugs } from '@/content/projects'
import { breadcrumbJsonLd, creativeWorkJsonLd } from '@/lib/seo'
import { site } from '@/lib/site'

type Params = { slug: string }

/** SSG: gera uma página estática por projeto. */
export function generateStaticParams(): Params[] {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const title = `${project.name} — ${project.category}`
  return {
    title,
    description: project.tagline,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${site.name}`,
      description: project.tagline,
      url: `${site.url}/projetos/${project.slug}`,
      type: 'article',
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <CaseStudyView project={project} />
      <JsonLd
        data={[
          creativeWorkJsonLd(project),
          breadcrumbJsonLd([
            { name: 'Início', path: '/' },
            { name: 'Projetos', path: '/projetos' },
            { name: project.name, path: `/projetos/${project.slug}` },
          ]),
        ]}
      />
    </>
  )
}
