import React from 'react'
import cart from "../assets/cart.svg"
import { Link } from 'react-router-dom'
import { navTags } from '../utills/featuredData'
import logo from "../assets/image.png"
const Navbar = () => {

    return (
        <nav className="bg-[#191919] h-[100px] flex items-center">

            <div className='custom-container w-full flex items-center justify-between gap-[200px] border-b-2 h-full border-zinc-700 '>
                <div>
                    <h1 className='text-white font-extrabold text-3xl'>
                    <img src={logo} alt="logo" className='text-white object-cover'/>
                    </h1>
                </div>

                <div className='flex items-center justify-center tracking-wide gap-[39px]'>
                    {
                        navTags.map((tag, index) => {
                            return (
                          <Link to={tag.link} key={index} className=' font-semibold  text-[17px] leading-1 tracking-wide text-white'>
                          {tag.name.toUpperCase()}
                          </Link>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-center'>
                    <img src={cart} alt="cart icon" className='text-white object-cover w-6 h-6'/>

                </div>
            </div>
        </nav>
    )
}

export default Navbar