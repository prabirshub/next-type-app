import AboutSectionOne from '@/components/AboutPage/AboutSectionOne'
import AboutSectionTwo from '@/components/AboutPage/AboutSectionTwo'
import Breadcrumb from '@/components/common/Breadcrumb'

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb
        title='Meet Rashmi Watel!'
        pageName='About Page'
        description='Rashmi Watel is the founder and lead coach of Confident Speakers Academy. She is a public speaking coach and a non-native English speaker herself.'
      />
      <AboutSectionTwo />
      <div className='container mx-auto'>
        <hr className='mx-4 border-primary/20' />
      </div>
      <AboutSectionOne />
    </main>
  )
}
export default AboutPage
