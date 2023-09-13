import Contact from '@/components/Home/Contact'
import Breadcrumb from '@/components/common/Breadcrumb'

const ContactPage = () => {
  return (
    <main className=' relative '>
      <Breadcrumb
        title='Contact Page Title'
        pageName='Contact Page'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.'
      />
      <Contact />
    </main>
  )
}
export default ContactPage
