'use client'

// import componenets
import SectionTitle from '../common/SectionTitle'

// import data
import { blogData } from '@/constants'
import SingleBlog from './SingleBlog'

//motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '@/variants'

const BlogSection = () => {
  return (
    <section className='bg-primary/5 py-16 md:py-20 lg:py-28'>
      <div className='container'>
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <SectionTitle
            title='Our Latest Blogs'
            paragraph='Our blog offers insights and tips on public speaking, based on research and experience. Learn how to present, connect, and engage with your audience.'
            center
          />
        </motion.div>

        <div className='grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3'>
          {blogData.map((blog) => (
            <div key={blog.id} className='w-full'>
              <motion.div
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
              >
                <SingleBlog blog={blog} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default BlogSection
