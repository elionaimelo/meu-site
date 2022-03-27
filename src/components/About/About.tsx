import { FaVuejs, FaWordpressSimple, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'

const About = () => {
  return (
    <div className='flex justify-center h-screen space-x-10 text-white'>
      <div className='flex flex-col justify-center max-w-md'>
        <h6 className='mb-4 text-amber-300'>- Sobre</h6>
        <h4 className='text-3xl '>
          Amante da web!
          <br /> Há 10 anos no mercado.
          <br /> Tem alguma
          <span className='text-amber-300'> dúvida, sugestão ou convite? </span>
          <br />
          <br />
          <span className='text-amber-300'> Entre em contato.</span>
        </h4>
        <a
          href='mailto:elionai.melo@gmail.com'
          className='mt-6 underline text-amber-300'
        >
          elionai.melo@gmail.com
        </a>
      </div>
      <div className='flex items-center space-x-10'>
        <FaWordpressSimple size='4rem' />
        <IoLogoJavascript size='4rem' className='text-amber-300' />
        <FaReact size='4rem' className='text-blue-500' />
        <FaVuejs size='4rem' className='text-green-600' />
      </div>
    </div>
  )
}

export default About
