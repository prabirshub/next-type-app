'use client'

import Image from 'next/image'

// frmaer
import { motion } from 'framer-motion'

// import variants
import { fadeIn } from '@/variants'

const Brands = () => {
  return (
    <section className='py-[50px] xl:py-0 xl:px-16 xl:h-[200px] bg-white flex flex-col justify-center dark:bg-dark'>
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
        className='container mx-auto'
      >
        <div className='grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between '>
          <div className='max-w-[150px]'>
            <Image
              src='/assets/company-logo/asetts-logo.svg'
              width={395}
              height={142}
              alt='asetts logo'
            />
          </div>
          <div className='max-w-[45px]'>
            <Image
              src='/assets/company-logo/befriend-logo.svg'
              width={116}
              height={173}
              alt='asetts logo'
            />
          </div>
          <div className='max-w-[250px]'>
            <Image
              src='/assets/company-logo/curtin-university.svg'
              width={439}
              height={73}
              alt='city of canning logo'
            />
          </div>
          <div className='max-w-[250px]'>
            <Image
              src='/assets/company-logo/dress-for-success-logo.svg'
              width={589}
              height={81}
              alt='asetts logo'
            />
          </div>
          <div className='max-w-[80px]'>
            <Image
              src='/assets/company-logo/gesb-logo.svg'
              width={181}
              height={146}
              alt='asetts logo'
            />
          </div>
          <div className='max-w-[60px]'>
            <Image
              src='/assets/company-logo/gov-of-western-australia.svg'
              width={135}
              height={128}
              alt='asetts logo'
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default Brands
