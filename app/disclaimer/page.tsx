import Breadcrumb from '@/components/common/Breadcrumb'
import DisclaimerSection from '@/components/legal/DisclamerSection'

const DisclaimerPage = () => {
  return (
    <main className='h-[80vh]'>
      <Breadcrumb
        title='Disclaimer'
        pageName='Disclaimer Page'
        description='The information and content on our website are for educational and informational purposes only.'
      />
      <DisclaimerSection />
    </main>
  )
}
export default DisclaimerPage
