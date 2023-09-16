import Contact from '@/components/Home/Contact'
import Breadcrumb from '@/components/common/Breadcrumb'

const ContactPage = () => {
  return (
    <main className=' relative '>
      <Breadcrumb
        title='Contact Us'
        pageName='Contact Page'
        description="We'd love to hear from you! We aim to answer all emails within our normal business hours of Monday to Friday, 9-5pm"
      />
      <Contact />
    </main>
  )
}
export default ContactPage
