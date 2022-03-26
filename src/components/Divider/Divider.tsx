interface DividerProps {
  width: string
}

const Divider = ({ width }: DividerProps) => {
  return <div className='h-px my-6 bg-slate-800' style={{ width: width }}></div>
}

export default Divider
