import Breadcrumb from '@/components/common/Breadcrumb'
import PrivacyPolicy from '@/components/legal/PrivacyPolicy'

const PrivacyPage = () => {
  return (
    <main>
      <Breadcrumb
        title='Privacy Policy'
        pageName='Privacy Page'
        description='This following document sets forth the Privacy Policy for the Confident Speakers Academy website, www.________________.com.'
      />
      <PrivacyPolicy />
    </main>
  )
}
export default PrivacyPage
