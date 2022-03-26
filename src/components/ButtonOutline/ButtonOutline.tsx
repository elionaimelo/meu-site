import { ReactChild, ReactChildren } from 'react'

interface ButtonOutlineProps {
  //multiple children
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
  href?: string
  as?: 'button' | 'a'
}

const ButtonOutline = ({
  children,
  as = 'button',
  href,
}: ButtonOutlineProps) => {
  return (
    <>
      {as == 'button' ? (
        <button
          className='flex items-center px-8 py-4 transition-all duration-100 border-2 border-solid border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black'
        >
          {children}
        </button>
      ) : (
        <a
          href={href}
          target='_blank'
          className='flex items-center px-8 py-4 transition-all duration-100 border-2 border-solid border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black'
        >
          {children}
        </a>
      )}
    </>
  )
}

export default ButtonOutline
