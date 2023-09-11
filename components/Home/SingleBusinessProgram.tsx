import { Workshop } from '@/types/workshop'
import Link from 'next/link'

const starIcon = (
  <svg width='18' height='16' viewBox='0 0 18 16' className='fill-current'>
    <path d='M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z' />
  </svg>
)

const SingleBusinessProgram = ({ workshop }: { workshop: Workshop }) => {
  const { star, name, duration, content } = workshop

  let ratingIcons = []
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className='text-yellow'>
        {starIcon}
      </span>
    )
  }

  return (
    <div className='w-full'>
      <div className='rounded-md bg-white p-8 shadow-one dark:bg-dark lg:px-5 xl:px-8'>
        <div className='mb-5 flex items-center space-x-1'>{ratingIcons}</div>
        <div className='w-full'>
          <h5 className='mb-1  pb-4 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg border-b border-dark border-opacity-10 dark:border-white dark:border-opacity-10 '>
            {name}
          </h5>
        </div>
        <p className='mb-8 pt-4 text-base leading-relaxed text-black dark:text-white'>
          {content}
        </p>
        <div className='pb-4'>
          <Link className='primary-btn' href='/'>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SingleBusinessProgram
