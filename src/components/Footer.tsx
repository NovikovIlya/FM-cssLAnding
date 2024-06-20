import logo from '../assets/icon-facebook.svg'

const Footer = () => {
  return (
    <div className='bg-black mt-5'>
      <div className='container mx-auto px-4 py-4 '>
      <div className='flex  justify-between text-white'>
        <div>loopstudios</div>
        <div className='flex'>
          <img src={logo}/>
          <img src={logo}/>
          <img src={logo}/>
          <img src={logo}/>
        </div>
      </div>
      <div className='flex justify-between text-white mt-5'>
        <div>
          <ul className='flex gap-3'>
            <li>about</li>
            <li>carers</li>
            <li>events</li>
            <li>products</li>
            <li>support</li>
          </ul>
        </div>
        <div>2021. loopstudios All right reserved</div>
      </div>
    </div>
    </div>
  )
}

export default Footer