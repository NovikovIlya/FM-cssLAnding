import React from 'react'
import image from '../assets/desktop/image-interactive.jpg'
import image1 from '../assets/desktop/image-deep-earth.jpg'

const Main = () => {
  return (
    <div className='container mx-auto px-4 py-4 mt-5'>
      <div className='  '>
        <div className='relative flex justify-between'>
          <img className='w-[800px]' src={image} />
          <div className='absolute right-4 bottom-0  bg-white p-8 bottom-0 w-[500px]'>
            <div>The leader in interactive VR</div>
            <div className=' break-all'>founded asdasdsadsadsadsadasdsadwadasdsadwdwweqwewqwqaesadasdasdsadasdsad</div>
          </div>
        </div>
      </div>

      <div className='mt-14'>
        <div className='flex justify-between'>
          <div>OUR CONNECTION</div>
          <div className='p-2 border-2'>SEE ALL</div>
        </div>
        <div className='grid grid-cols-4 gap-2'>
          <div className='relative'>
            <img src={image1}/>
            <div className='absolute text-white bottom-4 left-4'>DEEP EARTH</div>
          </div>
          <div className='relative'>
            <img src={image1}/>
            <div className='absolute text-white bottom-4 left-4'>DEEP EARTH</div>
          </div>
          <div className='relative'>
            <img src={image1}/>
            <div className='absolute text-white bottom-4 left-4'>DEEP EARTH</div>
          </div>
          <div className='relative'>
            <img src={image1}/>
            <div className='absolute text-white bottom-4 left-4'>DEEP EARTH</div>
          </div>
          <div className='relative'>
            <img src={image1}/>
            <div className='absolute text-white bottom-4 left-4'>DEEP EARTH</div>
          </div>
          <div className='relative'>
            <img src={image1}/>
            <div className='absolute text-white bottom-4 left-4'>DEEP EARTH</div>
          </div>
          <div className='relative'>
            <img src={image1}/>
            <div className='absolute text-white bottom-4 left-4'>DEEP EARTH</div>
          </div>
          <div className='relative'>
            <img src={image1}/>
            <div className='absolute text-white bottom-4 left-4'>DEEP EARTH</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main