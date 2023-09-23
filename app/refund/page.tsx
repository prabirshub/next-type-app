import Breadcrumb from '@/components/common/Breadcrumb'
import RefundPolicy from '@/components/legal/RefundPolicy'

const RefundPage = () => {
  return (
    <main className='h-[80vh]'>
      <Breadcrumb
        title='Returns and Refund Policy'
        pageName='Refund Page'
        description="We understand that things don't always go to plan but we do not issue refunds or accept returns due to change of mind or order error"
      />
      <RefundPolicy />
    </main>
  )
}
export default RefundPage
