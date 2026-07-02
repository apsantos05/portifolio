import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

/**
 * Shell do site público (marketing).
 * Header/Footer vivem aqui — compartilhados por todas as páginas do grupo (site).
 * O grupo (app) futuro (dashboard/área de clientes) terá seu próprio shell.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
    </>
  )
}
