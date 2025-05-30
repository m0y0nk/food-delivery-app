import React,{useState} from 'react'
import { assets } from '../../assets/assets.js'

const Navbar = () => {
    const [menu, setMenu] = useState('home');

  return (
    <div className='flex flex-row justify-between items-center'>
        <div>
            <img src={assets.logo} alt="logo" />
        </div>
        <div>
            <ul className='flex flex-row gap-4'>
                <li className={`header_link ${menu==='home' ? 'active' : 'inactive'}`} onClick={()=>setMenu('home')}>home</li>
                <li className={`header_link ${menu==='menu' ? 'active' : 'inactive'}`}  onClick={()=>setMenu('menu')}>menu</li>
                <li className={`header_link ${menu==='mobile_app' ? 'active' : 'inactive'}`}  onClick={()=>setMenu('mobile_app')}>mobile app</li>
                <li className={`header_link ${menu==='contact_us' ? 'active' : 'inactive'}`}  onClick={()=>setMenu('contact_us')}>contact us</li>
            </ul>
        </div>
        <div className='flex flex-row gap-6 items-center'>
            <div>
                <img src={assets.search_icon} alt="search icon" />
            </div>
            <div>
                <img src={assets.basket_icon} alt="basket_icon" />
            </div>
            <div>
                <button className='border-2 cursor-pointer hover:bg-white hover:text-black rounded-3xl px-4 py-1'>sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar