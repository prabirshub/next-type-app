import WhyUs from '@/components/About/WhyUs'
import Brands from '@/components/Home/Brands'
import BusinessPrograms from '@/components/Home/BusinessPrograms'
import Contact from '@/components/Home/Contact'
import Hero from '@/components/Home/Hero'

const Home = () => {
  return (
    <main>
      <>
        <div>
          <Hero />
          <Brands />
          <BusinessPrograms />
          <WhyUs />
          <Contact />
        </div>
      </>
    </main>
  )
}
export default Home
