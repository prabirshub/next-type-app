import SingleBlog from '@/components/BlogSection/SingleBlog'
import { blogData } from '@/constants'
import Breadcrumb from '@/components/common/Breadcrumb'
const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        title='Latest Blogs'
        pageName='Blog Grid'
        description='Discover and grow from our blogs. We offer you plenty of advice and insights on public speaking, career development and motivation. Have fun reading and tell us what you want to learn more about.'
      />
      <section className='pt-[120px] pb-[120px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap justify-center'>
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className='w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3'
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <ul className='flex items-center justify-center pt-8'>
                <li className='mx-1'>
                  <a
                    href='#0'
                    className='flex h-9 min-w-[36px] items-center justify-center rounded-md bg-primary/30 bg-opacity-[55%] px-4 text-sm text-black transition hover:bg-primary hover:bg-opacity-100 hover:text-white'
                  >
                    Prev
                  </a>
                </li>
                <li className='mx-1'>
                  <a
                    href='#0'
                    className='flex h-9 min-w-[36px] items-center justify-center rounded-md bg-primary/30 bg-opacity-[15%] px-4 text-sm text-black transition hover:bg-primary hover:bg-opacity-100 hover:text-white'
                  >
                    1
                  </a>
                </li>
                <li className='mx-1'>
                  <a
                    href='#0'
                    className='flex h-9 min-w-[36px] items-center justify-center rounded-md bg-primary/30 bg-opacity-[15%] px-4 text-sm text-black transition hover:bg-primary hover:bg-opacity-100 hover:text-white'
                  >
                    2
                  </a>
                </li>
                <li className='mx-1'>
                  <a
                    href='#0'
                    className='flex h-9 min-w-[36px] items-center justify-center rounded-md bg-primary/30 bg-opacity-[15%] px-4 text-sm text-black transition hover:bg-primary hover:bg-opacity-100 hover:text-white'
                  >
                    3
                  </a>
                </li>
                <li className='mx-1'>
                  <a className='flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-primary/30 bg-opacity-[15%] px-4 text-sm text-black'>
                    ...
                  </a>
                </li>
                <li className='mx-1'>
                  <a
                    href='#0'
                    className='flex h-9 min-w-[36px] items-center justify-center rounded-md bg-primary/30 bg-opacity-[15%] px-4 text-sm text-black transition hover:bg-primary hover:bg-opacity-100 hover:text-white'
                  >
                    12
                  </a>
                </li>
                <li className='mx-1'>
                  <a
                    href='#0'
                    className='flex h-9 min-w-[36px] items-center justify-center rounded-md bg-primary/30 bg-opacity-[15%] px-4 text-sm text-black transition hover:bg-primary hover:bg-opacity-100 hover:text-white'
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default BlogPage
