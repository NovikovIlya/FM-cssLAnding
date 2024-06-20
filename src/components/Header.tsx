import logo from '../assets/desktop/image-hero.jpg'

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${logo})`}}  className="h-full w-screen  text-white flex flex-col gap-16 bg-cover">
        <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between '>
            <div>loopstudio</div>
            <div>
                <ul className='flex gap-5'>
                 <li>About</li>
                 <li>Careers</li>
                 <li>Events</li>
                 <li>Products</li>
                 <li>Support</li>
                </ul>
            </div>
        </div>
        <div className='p-5 border border-white w-max text-6xl'>IMMERSIVE <br></br>EXPIEIRENSEC <br></br>THAT DELIVER</div>
        </div>
    </div>
  )
}

export default Header