import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { getAllProjects } from '@/content/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date('2026-07-02')

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${site.url}/projetos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${site.url}/projetos/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...projectRoutes]
}
