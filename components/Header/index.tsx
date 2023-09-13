'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import components
import Nav from './Nav'
import NavMobile from './NavMobile'
import ThemeToggler from './ThemeToggler'
import Logo from '../common/Logo'

// import framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const Header = () => {
  const [sticky, setSticky] = useState(false)

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)
  })

  console.log(sticky)
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      animate={'show'}
      viewport={{ once: false, amount: 0.6 }}
    >
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-30'
            : 'absolute'
        }`}
      >
        <div className='container mx-auto'>
          <div className='flex items-center justify-between h-20'>
            <div className='w-60 max-w-full px-4 xl:mr-12'>
              <Link
                href='/'
                className={`header-logo block w-full ${
                  sticky ? 'py-5 lg:py-2' : 'py-8'
                } `}
              >
                <Logo />
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <div>
                {/* Navgation */}
                <Nav />
                <div className='lg:hidden flex items-center gap-x-12 md:gap-x-10'>
                  <ThemeToggler />
                  <NavMobile />
                </div>
              </div>
              <div className='hidden lg:block'>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </motion.div>
  )
}
export default Header
