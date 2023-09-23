import Image from 'next/image'

const AboutSectionTwo = () => {
  return (
    <section className='py-16 md:py-20 lg:py-28'>
      <div className='container'>
        <div className='mx-4 flex flex-wrap items-center'>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0 rounded-xl overflow-hidden'>
              <Image
                src='/assets/about/award-rashmi.png'
                alt='about image'
                fill
                className='mx-auto max-w-full lg:mr-0 hover:scale-105 transition-all duration-300'
              />
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='wow fadeInUp max-w-[470px]' data-wow-delay='.2s'>
              <div className='mb-9'>
                <h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
                  Company History and Origin
                </h3>
                <p className='text-base font-medium leading-relaxed text-black dark:text-body-color sm:text-lg sm:leading-relaxed'>
                  Rashmi Watel, a public speaking coach, TEDx speaker, and
                  award-winning entrepreneur, founded Confident Speakers Academy
                  in July 2020.
                </p>
              </div>
              <div className='mb-9'>
                <h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
                  Our Mission
                </h3>
                <p className='text-base font-medium leading-relaxed text-black dark:text-body-color  sm:text-lg sm:leading-relaxed'>
                  We give you effective practical tools to communicate
                  confidently and competently in any situation.
                </p>
              </div>
              <div className='mb-1'>
                <h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
                  Our Vission
                </h3>
                <p className='text-base font-medium leading-relaxed text-black dark:text-body-color sm:text-lg sm:leading-relaxed'>
                  We want public speaking to be a chance for growth, not a
                  hurdle. We believe in people’s power to speak clearly and
                  confidently. We aim for a world where people can talk without
                  fear or doubt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionTwo
