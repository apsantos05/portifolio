/**
 * Injeta dados estruturados JSON-LD de forma segura e reutilizável.
 * Server component — renderiza um <script type="application/ld+json">.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify escapa o conteúdo; dados são estáticos e controlados.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
