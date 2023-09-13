import { Blog } from '@/types/blog'
import Image from 'next/image'
import Link from 'next/link'

const SingleBlog = ({ blog }: { blog: Blog }) => {
  // destructuring
  const { title, image, paragraph, author, tags, publishDate } = blog
  return (
    <>
      <div className='relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark'>
        <Link
          href='/'
          className='relative block h-[220px] w-full overflow-hidden hover:scale-110 hover:rotate-1 transition-all duration-300'
        >
          <span className='absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white'>
            {tags[0]}
          </span>
          <Image src={image} alt='image' fill />
        </Link>
        <div className='p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8'>
          <h3>
            <Link
              href='/'
              className='mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl'
            >
              {title}
            </Link>
          </h3>
          <p className='mb-6 border-b border-black/30 border-opacity-10 pb-6 text-base font-medium text-black dark:border-white dark:border-opacity-10 dark:text-body-color'>
            {paragraph}
          </p>
          <div className='flex items-center'>
            <div className='mr-5 flex items-center border-r border-black/30 border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5'>
              <div className='mr-4'>
                <div className='relative h-10 w-10 overflow-hidden rounded-full hover:scale-105 transition duration-300'>
                  <Image src={author.image} alt='author' fill />
                </div>
              </div>
              <div className='w-full'>
                <h4 className='mb-1 text-sm font-medium text-dark dark:text-white'>
                  By {author.name}
                </h4>
                <p className='text-xs text-black dark:text-body-color'>
                  {author.designation}
                </p>
              </div>
            </div>
            <div className='inline-block'>
              <h4 className='mb-1 text-sm font-medium text-dark dark:text-white'>
                Date
              </h4>
              <p className='text-xs text-black dark:text-body-color'>
                {publishDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleBlog
