'use client'

import SectionTitle from '../common/SectionTitle'

// import programdata
import { programsData } from '@/constants'
import SingleBusinessProgram from './SingleBusinessProgram'

//motion
import { motion, easeInOut } from 'framer-motion'

//variants
import { fadeIn } from '@/variants'

const BusinessPrograms = () => {
  return (
    <section className='relative z-10 bg-primary/[.04] py-16 md:py-20 lg:py-28'>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
      >
        <SectionTitle
          title='Corporate Workshops'
          paragraph='We provide feedback, support, study-materials, and guidance throughout the learning process to help you achieve your desired outcomes.'
          center
        />
      </motion.div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
          {programsData.map((workshop) => (
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              key={workshop.id}
            >
              <SingleBusinessProgram workshop={workshop} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default BusinessPrograms
