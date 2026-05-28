import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ForWho from './components/ForWho'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ForWho />
      <Services />
      <HowWeWork />
      <CtaFinal />
      <Footer />
    </main>
  )
}