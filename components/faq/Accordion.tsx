'use client'

import { useState } from 'react'
//motion
import { motion, easeInOut } from 'framer-motion'

//variants
import { fadeIn } from '@/variants'

import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'

const Accordion = ({ accordion }: { accordion: any }) => {
  // accorion state
  const [isOpen, setIsOpen] = useState(false)

  // destructure accorion
  const { question, answer } = accordion
  return (
    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
      <motion.div
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
        className='bg-white border border-primary/10 rounded-sm'
      >
        <div className='min-h-[60px] flex items-center justify-between px-[30px]'>
          <h6 className='text-base leading-6 font-bold dark:text-dark'>
            {question}
          </h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className='text-[20px] text-zinc-500' />
            ) : (
              <FaChevronCircleDown className='text-[20px] text-zinc-500' />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? 'min-h-[200px] lg:min-h-[160px]' : 'min-h-0'
          } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}
        >
          <div className='mt-6 dark:text-dark'>{answer}</div>
        </div>
      </motion.div>
    </div>
  )
}
export default Accordion
