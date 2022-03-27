import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <header className='fixed flex items-center justify-between w-full p-6 shadow-lg  bg-blueDark z-50'>
      <Logo />
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
