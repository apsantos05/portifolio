import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Guarantees } from '@/components/sections/Guarantees'
import { Testimonials } from '@/components/sections/Testimonials'
import { Process } from '@/components/sections/Process'
import { Stacks } from '@/components/sections/Stacks'
import { Faq } from '@/components/sections/Faq'
import { LeadMagnet } from '@/components/sections/LeadMagnet'
import { Contact } from '@/components/sections/Contact'

/**
 * Home — composição de organismos data-driven.
 * Jornada de conversão (auditoria CRO): atenção → confiança → prova → garantias →
 * método → tecnologia → objeções → oferta de baixo atrito → ação.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stacks />
      <Services />
      <Projects />
      <Guarantees />
      <Testimonials />
      <Process />
      <Faq />
      <LeadMagnet />
      <Contact />
    </>
  )
}
