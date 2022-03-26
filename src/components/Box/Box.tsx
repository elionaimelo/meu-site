import { ReactChild, ReactChildren } from 'react'

interface BoxProps {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
}

const Box = ({ children }: BoxProps) => {
  return (
    <div className='flex flex-col justify-end w-48 h-48 text-center text-white border-t-4 border-amber-300 bg-slate-800'>
      <span className='mb-4'>{children}</span>
    </div>
  )
}

export default Box
