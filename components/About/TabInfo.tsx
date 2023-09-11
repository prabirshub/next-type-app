import TabContents from './TabContents'

const Tabinfo = ({
  tabItems,
  currentItem,
}: {
  tabItems: any
  currentItem: number
}) => {
  const { subtitle, content } = tabItems[currentItem]
  return (
    <article className='mt-2'>
      <span className='font-semibold text-dark/70 bg-primary/10 text-lg inline-block py-1 px-3  mb-4 dark:text-body-color'>
        {subtitle}
      </span>
      <TabContents content={content} />
    </article>
  )
}
export default Tabinfo
