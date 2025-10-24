import React from 'react'
import headphone from "../assets/asset 12.jpeg"

const HeroSection = () => {
    return (
        <div className='bg-[#191919] flex items-center text-white justify-center'>

            <div className='custom-container flex items-center w-full gap-20 justify-between'>
                <div className='flex flex-col gap-10 flex-1'>
                    <h1 className='uppercase text-[#808080] font-bold tracking-[10px] text-xl leading-6'>
                        New Product

                    </h1>
                    <h2 className='font-bold text-6xl'>
                        XX99 Mark II Headphones

                    </h2>
                    <p className='flex text-[#808080] max-w-sm leading-relaxed'>
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.


                    </p>

                    <button className='bg-[#D87D4A] py-3 px-2 w-[200px] text-white'>
                        See Product
                    </button>
                </div>
                <div className='flex-1'>
                    {/* headphone */}

                    <img src={headphone} alt='headphone' className='h-[700px] object-cover'/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection