/**
 * Conteúdo visível apenas para leitores de tela.
 * Usa a técnica sr-only (não display:none, que remove da árvore de acessibilidade).
 */
export function VisuallyHidden({
  children,
  as: Tag = 'span',
}: {
  children: React.ReactNode
  as?: 'span' | 'div' | 'h2'
}) {
  return <Tag className="sr-only">{children}</Tag>
}
