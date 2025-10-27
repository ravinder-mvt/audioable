import React from 'react'
import headphone from "../assets/asset 12.jpeg"
import { heroSectionProducts } from "./../utills/featuredData.js"
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-[#191919] flex items-center text-white justify-center'>

            <div className='custom-container flex items-center w-full gap-20 justify-between'>
                <div className='flex flex-col gap-10 flex-1'>
                    <h1 className='uppercase text-[#808080] font-bold tracking-[10px] text-xl leading-6'>
                        New Product

                    </h1>
                    {
                        heroSectionProducts?.map((product, index) => (
                            <>
                                <h2 className='font-bold text-7xl' key={index}>
                                    {
                                        product.heading
                                    }

                                </h2>
                                <p className='flex text-[#808080] max-w-sm leading-relaxed'>
                                    {
                                        product.description
                                    }


                                </p>

                                <button className='bg-[#D87D4A] py-3 px-2 w-[200px] text-lg font-medium rounded-md text-white' onClick={() => navigate(`products/${product.slug}`)}>
                                    See Product
                                </button>
                            </>
                        ))
                    }
                </div>
                <div className='flex-1'>
                    {/* headphone */}

                    <img src={headphone} alt='headphone' className='h-[700px] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection