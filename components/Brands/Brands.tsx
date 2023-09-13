'use client'

import Image from 'next/image'
import SingleSlider from './SingleSlider'
// import brands data
import { brandsData } from '@/constants'
import { BrandsData } from '@/types/brands'

import { Swiper, SwiperSlide } from 'swiper/react'
// import swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import './brandSlider.css'

import { Autoplay, Pagination } from 'swiper/modules'
// frmaer
import { motion } from 'framer-motion'

// import variants
import { fadeIn } from '@/variants'

const Brands = () => {
  return (
    <section className='py-[50px] xl:py-0 xl:px-16 xl:h-[350px] bg-gray-50 flex flex-col justify-center dark:bg-dark'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between'>
          <div className='max-w-[145px]'>
            <Image
              src='/assets/company-logo/rio-tinto-logo.svg'
              width={289}
              height={61}
              alt='Rio Tinto'
            />
          </div>
          <div className='max-w-[100px]'>
            <Image
              src='/assets/company-logo/g8.svg'
              width={579}
              height={481}
              alt='Toastmasters international logo'
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
          <div className='max-w-[150px]'>
            <Image
              src='/assets/company-logo/landgate-logo.svg'
              width={241}
              height={128}
              alt='landgate-logo'
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
      </div>
    </section>
  )
}
export default Brands
