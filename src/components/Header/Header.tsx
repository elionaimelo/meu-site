import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed flex items-center justify-between w-full p-10 shadow-md'>
      <Link href='/'>
        <a>
          <Image src='/images/logo.svg' width={79} height={79} />
        </a>
      </Link>
      <nav className='flex gap-8'>
        <a href='#' className='text-white hover:text-yellow-400'>
          Sobre
        </a>
        <a href='#projetos' className='text-white hover:text-yellow-400'>
          Projetos
        </a>
        <a
          href='mailto:elionai.melo@gmail.com'
          target='_blank'
          className='text-white hover:text-yellow-400'
        >
          Deixe um oi...
        </a>
      </nav>
    </header>
  )
}

export default Header
