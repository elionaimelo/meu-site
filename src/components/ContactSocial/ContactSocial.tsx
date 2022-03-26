import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const ContactSocial = () => {
  return (
    <div className='fixed z-30 flex flex-col left-10 bottom-10 gap-7'>
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
    </div>
  )
}

export default ContactSocial
