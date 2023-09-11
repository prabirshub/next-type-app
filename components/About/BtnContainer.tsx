import { TabData } from '@/types/tabdata'

const BtnContainer = ({
  tabItems,
  currentItem,
  setCurrentItem,
}: {
  tabItems: TabData | any
  currentItem: number
  setCurrentItem: any
}) => {
  return (
    <div className='flex items-center space-x-8 flex-wrap mb-6'>
      {tabItems.map((tabitem: any, index: any) => {
        return (
          <button
            key={tabitem.id}
            onClick={() => setCurrentItem(index)}
            className={
              index === currentItem
                ? 'uppercase text-sm font-bold transition-all duration-300 hover:text-primary hover:shadow-tab-shadow active-btn'
                : 'uppercase text-sm font-semibold transition-all hover:text-primary hover:shadow-tab-shadow'
            }
          >
            {tabitem.title}
          </button>
        )
      })}
    </div>
  )
}
export default BtnContainer
