import ButtonOutline from '../ButtonOutline/ButtonOutline'
import Divider from '../Divider/Divider'
import { FaRegEnvelopeOpen } from 'react-icons/fa'
import { IoMdPaperPlane } from 'react-icons/io'

const Intro = () => {
  return (
    <div className='flex flex-col justify-center h-screen text-white'>
      <div className='z-30 ml-20'>
        <h4 className='mb-3 text-2xl font-firacode'>
          Olá, meu nome é Elionai Melo
        </h4>
        <h1 className='text-7xl font-anton'>
          Dev wordpress
          <br />
          Dev Frontend
          <br />
          e Web Designer
          <br />
        </h1>
        <Divider width='60px' />
        <div className='flex mt-6 space-x-3'>
          <ButtonOutline as='a' href='mailto:elionai.melo@gmail.com'>
            Entrar em contato{' '}
            <FaRegEnvelopeOpen className='ml-2' size='1.3rem' />
          </ButtonOutline>
          <ButtonOutline as='a' href='http://www.google.com.br/'>
            Pré-briefing <IoMdPaperPlane className='ml-2' size='1.6rem' />
          </ButtonOutline>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 z-10 w-full opacity-30'>
        <img src='/images/wave1.svg' alt='' />
      </div>
      <div className='absolute left-0 z-20 w-full bottom-9 opacity-5'>
        <img src='/images/wave1.svg' alt='' />
      </div>
    </div>
  )
}

export default Intro
