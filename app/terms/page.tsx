import Breadcrumb from '@/components/common/Breadcrumb'
import TermsCondition from '@/components/legal/TermsCondition'

const TermsPage = () => {
  return (
    <main>
      <Breadcrumb
        title='Terms and Conditions of Use'
        pageName='Terms & Condition Page'
        description='This page outlines the rules and guidelines for using our website and services. By accessing and using our platform, you agree to comply with these terms. We encourage you to read these terms carefully to ensure a smooth and enriching learning experience. Thank you for choosing Confident Speakers Academy, your partner in mastering public speaking.'
      />
      <TermsCondition />
    </main>
  )
}
export default TermsPage
