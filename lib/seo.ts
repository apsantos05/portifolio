import { site } from './site'

/**
 * Helpers de dados estruturados (Schema.org / JSON-LD).
 * Centralizados aqui — reutilizados por layout e páginas.
 */

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    url: site.url,
    email: `mailto:${site.email}`,
    ...(site.photo ? { image: `${site.url}${site.photo}` } : {}),
    sameAs: [site.social.github, site.social.linkedin, site.social.instagram].filter(Boolean),
    knowsAbout: [
      'Next.js',
      'TypeScript',
      'React',
      'Node.js',
      'Desenvolvimento web',
      'Sistemas SaaS',
      'APIs e integrações',
    ],
    address: { '@type': 'PostalAddress', addressCountry: 'BR' },
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    inLanguage: 'pt-BR',
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  }
}

/** Dados estruturados de um projeto (estudo de caso).
 *  Projeto ao vivo com URL → WebApplication (rich result mais rico que CreativeWork). */
export function creativeWorkJsonLd(project: {
  name: string
  tagline: string
  slug: string
  liveUrl?: string
  year: string
}) {
  const base = {
    '@context': 'https://schema.org',
    name: project.name,
    description: project.tagline,
    url: `${site.url}/projetos/${project.slug}`,
    dateCreated: project.year,
    author: { '@type': 'Person', name: site.name, url: site.url },
  }
  if (project.liveUrl) {
    return {
      ...base,
      '@type': 'WebApplication',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      sameAs: project.liveUrl,
    }
  }
  return { ...base, '@type': 'CreativeWork' }
}
