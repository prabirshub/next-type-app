import Link from 'next/link'

// import navdata
import { navData } from '@/constants'

const Nav = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex items-center space-x-6'>
        {navData.map((navItem) => {
          const { title, path, id } = navItem
          return (
            <li key={id}>
              <Link
                className='text-xl font-semibold hover:text-primary transition duration-300'
                href={path}
              >
                {title}
              </Link>
            </li>
          )
        })}
        <li className='relative'>
          <span className='animate-ping absolute inline-flex h-3 w-3 -top-4 -right-1 rounded-full bg-primary opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>

          <Link className='primary-btn' href='/'>
            Corporate Enquery
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
