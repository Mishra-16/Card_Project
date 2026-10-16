const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 h-full w-full p-8 flex flex-col justify-between' >
            <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">{props.id+1}</h2>
            <div>
                <p className="text-shadow-2xs text-xl mb-14 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi asperiores nostrum quam mollitia deleniti! Soluta.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium rounded-full px-8 py-2'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium rounded-full px-3 py-2'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent
