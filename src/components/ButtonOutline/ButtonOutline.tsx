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
        <button className='flex items-center px-8 py-4 border-2 border-solid border-amber-300 text-amber-300'>
          {children}
        </button>
      ) : (
        <a
          href={href}
          target='_blank'
          className='flex items-center px-8 py-4 border-2 border-solid border-amber-300 text-amber-300'
        >
          {children}
        </a>
      )}
    </>
  )
}

export default ButtonOutline
