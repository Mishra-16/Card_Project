import LeftTextStyling from './LeftTextStyling'
import LeftArrow from './LeftArrow'
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <LeftTextStyling />
        <LeftArrow />
    </div>

  )
}

export default LeftContent
