import Image from 'next/image'
import Link from 'next/link'
import Logo from '../common/Logo'
import {
  BiLogoFacebook,
  BiLogoYoutube,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from 'react-icons/bi'

const Footer = () => {
  return (
    <>
      <footer className='relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24'>
        <div className='container'>
          <div className='mx-auto lg:-mx-4 flex flex-wrap px-4'>
            <div className='w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12'>
              <div className='mb-12 max-w-[360px] lg:mb-16 mx-auto sm:mx-0 text-center sm:text-left'>
                <Link href='/' className='mb-8 inline-block'>
                  <Logo />
                </Link>
                <p className='mb-9 text-base font-medium leading-relaxed text-black dark:text-body-color'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis.
                </p>
                <div className='flex items-center justify-center sm:justify-start mx-auto sm:mx-0'>
                  <a
                    href='/'
                    aria-label='social-link'
                    className='mr-6 text-[#fcafef] hover:text-primary'
                  >
                    <BiLogoFacebook size={26} />
                  </a>
                  <a
                    href='/'
                    aria-label='social-link'
                    className='mr-6 text-[#fcafef] hover:text-primary'
                  >
                    <BiLogoLinkedin size={26} />
                  </a>
                  <a
                    href='/'
                    aria-label='social-link'
                    className='mr-6 text-[#fcafef] hover:text-primary'
                  >
                    <BiLogoInstagramAlt size={26} />
                  </a>
                  <a
                    href='/'
                    aria-label='social-link'
                    className='mr-6 text-[#fcafef] hover:text-primary'
                  >
                    <BiLogoYoutube size={26} />
                  </a>
                </div>
              </div>
            </div>

            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>
              <div className='mb-12 lg:mb-16'>
                <h2 className='mb-10 text-xl font-bold text-black dark:text-white'>
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Blog{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Pricing{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Workshops{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Online Classes{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>
              <div className='mb-12 lg:mb-16'>
                <h2 className='mb-10 text-xl font-bold text-black dark:text-white'>
                  Terms
                </h2>
                <ul>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Terms & Condition{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Privacy Policy{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Disclaimer Policy{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Refund Policy{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12'>
              <div className='mb-12 lg:mb-16'>
                <h2 className='mb-10 text-xl font-bold text-black dark:text-white'>
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Open Support Ticket{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Contact Us{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      About{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='mb-4 inline-block text-base font-medium text-black hover:text-primary dark:text-body-color'
                    >
                      {' '}
                      Chat{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-primary/10 py-8'>
          <div className='container'>
            <p className='text-center text-sm text-black dark:text-white'>
              &copy; 2023 -{' '}
              <span className='text-primary'>Confident Speakers Academy</span> -
              All rights reserved. <br />
              <a href='/' rel='nofollow noopener'>
                Designed & developed by{' '}
                <span className='text-primary'>fivexfast</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
