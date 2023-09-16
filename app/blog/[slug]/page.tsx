import SharePost from '@/components/BlogSection/SharePost'
import TagButton from '@/components/BlogSection/TagButton'
import Image from 'next/image'
import Link from 'next/link'

// import icons
import { FaRegCalendarAlt, FaRegEye } from 'react-icons/fa'
import { RxReader } from 'react-icons/rx'

const BlogDetails = () => {
  return (
    <>
      <section className='pt-[150px] pb-[120px]'>
        <div className='container'>
          <div className='mx-4 flex flex-wrap justify-center'>
            <div className='w-full px-4 lg:w-8/12'>
              <div>
                <h2 className='mb-8 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl sm:leading-tight'>
                  10 amazing sites to download stock photos & digital assets for
                  free
                </h2>
                <div className='mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10'>
                  <div className='flex flex-wrap items-center'>
                    <div className='mr-10 mb-5 flex items-center'>
                      <div className='mr-4'>
                        <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                          <Image
                            src='/assets/rashmi-watel-author.png'
                            alt='author'
                            fill
                          />
                        </div>
                      </div>
                      <div className='w-full'>
                        <h4 className='mb-1 text-base font-medium text-black dark:text-body-color'>
                          By <span> Rashmi Watel</span>
                        </h4>
                      </div>
                    </div>
                    <div className='mb-5 flex items-center'>
                      <p className='mr-5 flex items-center text-base font-medium  text-black dark:text-body-color'>
                        <span className='mr-3'>
                          <FaRegCalendarAlt />
                        </span>
                        15 Sept 2023
                      </p>
                      <p className='mr-5 flex items-center text-base font-medium text-black dark:text-body-color'>
                        <span className='mr-3'>
                          <RxReader />
                        </span>
                        15
                      </p>
                      <p className='mr-5 flex items-center text-base font-medium text-black dark:text-body-color'>
                        <span className='mr-3'>
                          <FaRegEye />
                        </span>
                        35
                      </p>
                    </div>
                  </div>
                  <div className='mb-5'>
                    <Link
                      href='#0'
                      className='inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white'
                    >
                      Public Speaking
                    </Link>
                  </div>
                </div>
                <div>
                  <p className='mb-10 text-base font-medium leading-relaxed text-black dark:text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                  <div className='mb-10 w-full overflow-hidden rounded'>
                    <div className='relative aspect-[97/58] w-full sm:aspect-[100/58]'>
                      <Image
                        src='/assets/blog/10-tips-from-csa.png'
                        alt='image'
                        fill
                        className='object-cover object-center'
                      />
                    </div>
                  </div>
                  <p className='mb-8 text-base font-medium leading-relaxed text-black dark:text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis enim lobortis scelerisque fermentum. Neque
                    sodales ut etiam sit amet. Ligula ullamcorper
                    <strong className='text-primary dark:text-white'>
                      malesuada
                    </strong>
                    proin libero nunc consequat interdum varius. Quam
                    pellentesque nec nam aliquam sem et tortor consequat.
                    Pellentesque adipiscing commodo elit at imperdiet.
                  </p>
                  <p className='mb-10 text-base font-medium leading-relaxed text-black dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    <span className='text-primary underline dark:text-white'>
                      Amet dictum sit amet justo
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p>
                  <h3 className='font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight'>
                    Digital marketplace for Ui/Ux designers.
                  </h3>
                  <p className='mb-10 text-base font-medium leading-relaxed text-black dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <ul className='mb-10 list-inside list-disc text-black dark:text-white'>
                    <li className='mb-2 text-base font-medium  sm:text-lg lg:text-base xl:text-lg'>
                      Consectetur adipiscing elit in voluptate velit.
                    </li>
                    <li className='mb-2 text-base font-medium  sm:text-lg lg:text-base xl:text-lg'>
                      Mattis vulputate cupidatat.
                    </li>
                    <li className='mb-2 text-base font-medium  sm:text-lg lg:text-base xl:text-lg'>
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li className='mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg'>
                      Ligula ullamcorper malesuada proin
                    </li>
                  </ul>
                  <div className='relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9'>
                    <p className='text-center text-base font-medium italic text-black dark:text-white'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod incididunt utionals labore et dolore magna
                      aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                      etiam sit amet.
                    </p>
                  </div>
                  <p className='mb-10 text-base font-medium leading-relaxed text-black dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <div className='items-center justify-between sm:flex'>
                    <div className='mb-5'>
                      <h5 className='mb-3 text-sm font-medium text-black dark:text-white'>
                        Popular Tags :
                      </h5>
                      <div className='flex items-center'>
                        <p>tag button</p>
                      </div>
                    </div>
                    <div className='mb-5'>
                      <h5 className='mb-3 text-sm font-medium text-black dark:text-white'>
                        Share this post :
                      </h5>
                      <div className='flex items-center sm:justify-end'>
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default BlogDetails
