'use client'
import Image from 'next/image'
import Link from 'next/link'

// import components
import SectionTitle from '../common/SectionTitle'

//motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '@/variants'
import AboutTab from './AboutTab'

const WhyUs = () => {
  return (
    <section className='py-16 md:py-20 lg:py-28'>
      <div className='container'>
        <div className='flex md:flex-row flex-wrap items-center px-4'>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='relative mx-auto md:mx-0 mb-12 aspect-[25/26] max-w-[800px] text-center lg:m-0'>
              {/* chakra svg starts here */}
              <Image
                className='absolute -top-16 -left-10 md:-top-36 md:-left-28 animate-spin-slower z-10'
                src='/chakra.png'
                alt='chakra'
                width={1000}
                height={1000}
              />
              {/* chakra svg ends here */}

              <motion.div
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='absolute bottom-0 left-12 md:bottom-4 md:left-4 z-20'
              >
                <Image
                  src='/assets/rashmi-watel.png'
                  alt='about image'
                  width={600}
                  height={620}
                />
              </motion.div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='max-w-[670px] mx-auto'>
              <div className='mb-6'>
                <motion.h3
                  variants={fadeIn('down', 0.2)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className='mb-8 text-3xl font-heading font-bold text-dark dark:text-white sm:text-4xl md:text-[45px] capitalize'
                >
                  our identity
                </motion.h3>
                <motion.p
                  variants={fadeIn('down', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className='text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed dark:text-body-color'
                >
                  Confident Speakers Academy is a platform that trains native
                  and non-native English speakers to speak confidently and
                  effectively. It was founded in 2020 by public speaking expert
                  Rashmi Watel.
                </motion.p>
              </div>
              <div className=''>
                <motion.div
                  variants={fadeIn('down', 0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className='flex flex-col gap-y-2 mb-4'
                >
                  <AboutTab />
                </motion.div>
                <motion.div
                  variants={fadeIn('down', 0.8)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                >
                  <Link href='/' className='primary-btn'>
                    Know more
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WhyUs
