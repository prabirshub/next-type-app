'use client'

import { useState } from 'react'
//motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '@/variants'

import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'

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
              <HiOutlineMinus className='text-[20px] text-dark' />
            ) : (
              <HiOutlinePlus className='text-[20px] text-dark' />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? 'max-h-[250px]' : 'min-h-0'
          } max-h-0 overflow-hidden flex justify-center transition-all duration-300 px-[30px]`}
        >
          <div className='mt-4 dark:text-dark pb-4'>{answer}</div>
        </div>
      </motion.div>
    </div>
  )
}
export default Accordion
