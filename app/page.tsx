import WhyUs from '@/components/About/WhyUs'
import BlogSection from '@/components/BlogSection'

import Brands from '@/components/Home/Brands'
import BusinessPrograms from '@/components/Home/BusinessPrograms'
import Contact from '@/components/Home/Contact'
import Hero from '@/components/Home/Hero'
import Faq from '@/components/faq/Faq'

const Home = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <BusinessPrograms />
      <WhyUs />
      <Faq />
      <BlogSection />
      <Contact />
    </main>
  )
}
export default Home
