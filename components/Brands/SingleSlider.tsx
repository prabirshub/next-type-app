import Image from 'next/image'
import { BrandsData } from '@/types/brands'

import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import './brandSlider.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

const SingleSlider = ({ brand }: { brand: BrandsData }) => {
  const { title, image, width, height } = brand
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        slidesPerView={3}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='flex items-center justify-center'>
            <div>
              <Image src={image} alt={title} width={width} height={height} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default SingleSlider
