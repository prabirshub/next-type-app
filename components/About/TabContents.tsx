import { FaAngleDoubleRight } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const TabContents = ({ content }: { content: [] }) => {
  return (
    <div>
      {content.map((singleContent) => {
        const id = uuidv4()
        // console.log(id)
        return (
          <div
            key={id}
            className='grid grid-cols-my-columns gap-8 items-center mb-6'
          >
            <FaAngleDoubleRight className='text-purple-500' />
            <p className='text-gray-600 leading-relaxed dark:text-body-color'>
              {singleContent}
            </p>
          </div>
        )
      })}
    </div>
  )
}
export default TabContents
