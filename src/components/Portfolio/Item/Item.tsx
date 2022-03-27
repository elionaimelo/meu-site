interface ItemProps {
  backgroundImage: string
}

const Item = () => {
  return (
    <div className='item w-48 h-48 text-white transition-all bg-slate-700 flex justify-center items-center'>
      <a href='#' className='item-caption hidden'>
        RN+ Vacina
      </a>
    </div>
  )
}

export default Item
