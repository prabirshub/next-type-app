'use client'

import Image from 'next/image'
import Link from 'next/link'
// import icons
import { BsCheck } from 'react-icons/bs'
//motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '@/variants'

const Hero = () => {
  return (
    <section className='relative top-0 left-0 min-h-[840px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark'>
      <div className='container mx-auto flex flex-col items-center lg:flex-row min-h-[840px]'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center items-start pl-4 mt-16'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className=' text-5xl lg:text-6xl font-heading text-dark font-bold mb-6 leading-[60px] dark:text-white'
          >
            Rediscover Your <br />
            <span className='text-primary'>Authenticity</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='mb-12 max-w-[597px] dark:text-white text-lg lg:text-xl'
          >
            Empower your public speaking skills, unleash your true potential and
            become the best version of yourself. Communicate your ideas with
            clarity and confidence, and achieve the success and recognition you
            deserve.
          </motion.p>
          {/* checked items */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='flex flex-col gap-y-6 mb-12'
          >
            {/* item */}
            <div className='flex items-center gap-x-2 lg:gap-x-4'>
              {/* item icon */}
              <div className='bg-primary/30 text-primary w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-primary/70 dark:text-white'>
                <BsCheck />
              </div>
              {/* item text */}
              <p className='text-lg lg:text-xl'>
                Use your voice, body language, and visual aids effectively
              </p>
            </div>
            {/* item */}
            <div className='flex items-center gap-x-2 lg:gap-x-4'>
              {/* item icon */}
              <div className='bg-primary/30 text-primary w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-primary/70 dark:text-white'>
                <BsCheck />
              </div>
              {/* item text */}
              <p className='text-lg lg:tex-txl'>
                Speak with clarity, fluency, and confidence
              </p>
            </div>
            {/* item */}
            <div className='flex items-center gap-x-2 lg:gap-x-4'>
              {/* item icon */}
              <div className='bg-primary/30 text-primary w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-primary/70 dark:text-white'>
                <BsCheck />
              </div>
              {/* item text */}
              <p className='text-lg lg:text-xl'>Unlock your unlimited self.</p>
            </div>
          </motion.div>
          {/* button */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.8 }}
            className='flex flex-col items-start sm:items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'
          >
            <Link href='/' className='primary-btn'>
              get free consultation
            </Link>
            <Link
              href='/'
              className='rounded-md bg-black/20 py-3 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30 capitalize'
            >
              explore our programs
            </Link>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='hidden xl:flex self-end'
        >
          <Image src='/assets/hero-img.png' alt='' width={640} height={675} />
        </motion.div>
      </div>
    </section>
  )
}
export default Hero
