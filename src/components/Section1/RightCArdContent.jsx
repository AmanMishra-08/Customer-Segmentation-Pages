import React from 'react'

const RightCArdContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between'>
              <h2 className='bg-white font-bold text-xl rounded-full h-11 w-11 flex justify-center items-center'>{props.id+1}</h2>
              <div>
                <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga reprehenderit tempore ea.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-5 py-2 rounded-full '>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-2 py-1 rounded-full'><i  className="ri-arrow-right-up-line text-"></i></button>
                </div>
              </div>
        </div>
  )
}

export default RightCArdContent
