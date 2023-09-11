import { useTheme } from 'next-themes'
// import react icons
import { HiSun } from 'react-icons/hi'
import { BiSolidMoon } from 'react-icons/bi'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-14 md:w-14'
    >
      <HiSun className='hidden h-5 w-5 dark:block md:h-6 md:w-6' />
      <BiSolidMoon className='h-5 w-5 stroke-current dark:hidden md:h-6 md:w-6' />
    </button>
  )
}
export default ThemeToggler
