import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <img src='/images/logo.svg' width='79' height='125' className='logo' />
      </a>
    </Link>
  )
}

export default Logo
