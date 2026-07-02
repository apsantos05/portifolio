import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Process } from '@/components/sections/Process'
import { Technologies } from '@/components/sections/Technologies'
import { Testimonials } from '@/components/sections/Testimonials'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'

/**
 * Home — composição de organismos de seção. Cada um é reutilizável e data-driven.
 * A ordem reflete a jornada de conversão (DISCOVERY §Estrutura):
 * atenção → confiança → prova → método → tecnologia → prova social → objeções → ação.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Technologies />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
