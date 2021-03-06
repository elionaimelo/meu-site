import type { NextPage } from 'next'
import Head from 'next/head'

import About from '../components/About/About'
import Box from '../components/Box/Box'
import ContactSocial from '../components/ContactSocial/ContactSocial'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'

import { BsPencil } from 'react-icons/bs'
import { MdOutlineAccessibleForward } from 'react-icons/md'
import { ImBullhorn } from 'react-icons/im'
import { AiOutlineMobile } from 'react-icons/ai'
import Portfolio from '../components/Portfolio/Portfolio'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elionai Melo </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='px-10'>
        <Intro />
        <ContactSocial />
        <About />
        <div className='flex justify-center space-x-5'>
          <Box>
            <BsPencil className='mr-2' size='1.5rem' />
            Web design
          </Box>
          <Box>
            <MdOutlineAccessibleForward className='mr-2' size='1.5rem' />
            Acessibilidade
          </Box>
          <Box>
            <ImBullhorn className='mr-2' size='1.5rem' />
            SEO
          </Box>
          <Box>
            <AiOutlineMobile className='mr-2' size='1.5rem' />
            Responsividade
          </Box>
        </div>
        <Portfolio />
      </main>
    </>
  )
}

export default Home
