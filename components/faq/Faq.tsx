'use client'

// import react icon
import { FaAngleDown } from 'react-icons/fa6'
// import data
import { faq } from '@/constants'
//motion
import { motion, easeInOut } from 'framer-motion'

//variants
import { fadeIn } from '@/variants'

// import components
import Accordion from './Accordion'
import SectionTitle from '../common/SectionTitle'
const Faq = () => {
  const { accordions } = faq
  return (
    <section className='relative z-10 bg-primary/10 py-16 md:py-20 lg:py-28'>
      <div className='max-w-[768px] mx-auto bg-faq bg-no-repeat bg-custom bg-center lg:h-[1100px] lg:pt-6 px-4 lg:px-0'>
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <SectionTitle
            title="FAQ's"
            paragraph='Here are some common questions and answers about Confident Speakers Academy. If you don’t find what you are looking for, feel free to contact us anytime.'
            center
          />
        </motion.div>
        <div className='flex flex-col gap-y-4 px-4'>
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Faq
