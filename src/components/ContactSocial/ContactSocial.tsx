import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const ContactSocial = () => {
  return (
    <div className='fixed z-10 flex flex-col left-10 bottom-10 gap-y-4'>
      <a
        href='https://api.whatsapp.com/send?phone=5584996163845&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.'
        target='_blank'
        className='btn-animation1'
      >
        <AiOutlineWhatsApp size='2rem' />
      </a>
      <a
        href='https://www.linkedin.com/in/elionaimelo/'
        target='_blank'
        className='btn-animation1'
      >
        <BsLinkedin size='2rem' />
      </a>
      <a
        href='https://github.com/elionaimelo'
        target='_blank'
        className='btn-animation1'
      >
        <AiFillGithub size='2rem' />
      </a>
      <div className='h-24 w-1 bg-amber-300 ml-3'></div>
    </div>
  )
}

export default ContactSocial
