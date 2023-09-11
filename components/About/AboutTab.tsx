'use client'
import { useEffect, useState } from 'react'
import { TabData } from '@/types/tabdata'

// import data
import { tabData } from '@/constants'

// import components
import TabInfo from './TabInfo'
import BtnContainer from './BtnContainer'

const AboutTab = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tabItems, setTabItem] = useState(tabData)
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = () => {
    setTabItem(tabItems)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  })

  // current item

  if (isLoading) {
    return (
      <section className='w-[80vw] mx-auto max-w-[650px]'>
        <div></div>
      </section>
    )
  }

  return (
    <section className='w-[80vw] mx-auto max-w-[650px]'>
      {/* button container */}
      <BtnContainer
        tabItems={tabItems}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* Tab content info */}
      <TabInfo tabItems={tabItems} currentItem={currentItem} />
    </section>
  )
}
export default AboutTab
