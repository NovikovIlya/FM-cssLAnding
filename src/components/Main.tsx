import React from 'react'
import image from '../assets/desktop/image-interactive.jpg'

const Main = () => {
  return (
    <div className='container mx-auto px-4 py-4'>
      <div className='  '>
        <div className='relative flex justify-between'>
          <img className='w-[800px]' src={image} />
          <div className='absolute right-4 bottom-0  bg-white p-8 bottom-0 w-[500px]'>
            <div>The leader in interactive VR</div>
            <div className=' break-all'>founded asdasdsadsadsadsadasdsadwadasdsadwdwweqwewqwqaesadasdasdsadasdsad</div>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Main