import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image
        src='/logo-dark.svg'
        alt='logo'
        width={140}
        height={30}
        className='w-full dark:hidden'
      />
      <Image
        src='/logo-light.svg'
        alt='logo'
        width={140}
        height={30}
        className='hidden w-full dark:block'
      />
    </div>
  )
}
export default Logo
