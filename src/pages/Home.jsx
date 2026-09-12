import Hero from '../components/Hero'
import Stats from '../components/Stats'
import WhyNMG from '../components/WhyNMG'
import HowItWorks from '../components/HowItWorks'
import ServicesGrid from '../components/ServicesGrid'
import Packages from '../components/Packages'
import Guarantee from '../components/Guarantee'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyNMG />
      <HowItWorks />
      <ServicesGrid />
      <Packages />
      <Guarantee />
      <Testimonials />
    </>
  )
}