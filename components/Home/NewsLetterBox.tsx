const NewsLetterBox = () => {
  return (
    <div
      className='wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11'
      data-wow-delay='.2s'
    >
      <h3 className='mb-4 text-2xl font-bold font-heading leading-tight text-dark dark:text-white'>
        Subscribe to receive future updates
      </h3>
      <p className='mb-11 border-b border-black/10 border-opacity-25 pb-11 text-base font-medium leading-relaxed text-black dark:border-white dark:border-opacity-25 dark:text-white/70'>
        Confident Speakers Academy helps you master public speaking with
        confidence and effectiveness. This is your opportunity to become a
        confident speaker.
      </p>
      <form>
        <input
          type='text'
          name='name'
          placeholder='Enter your name'
          className='mb-4 w-full rounded-md border border-black/10 border-opacity-10 py-3 px-6 text-base font-medium text-black placeholder-black dark:placeholder-white/70 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-primary/10 focus:dark:border-opacity-50 '
        />
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          className='mb-4 w-full rounded-md border border-black/10 border-opacity-10 py-3 px-6 text-base font-medium text-black placeholder-black dark:placeholder-white/70 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-primary/10 focus:dark:border-opacity-50 '
        />
        <input
          type='submit'
          value='Subscribe'
          className='duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none'
        />
        <p className='text-center text-base font-medium leading-relaxed text-black dark:text-white/70'>
          No spam guaranteed, So please don’t send any spam mail.
        </p>
      </form>
    </div>
  )
}
export default NewsLetterBox
