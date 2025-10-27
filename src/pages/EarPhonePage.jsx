import React from 'react'
import speaker1 from "../assets/image-zx91.jpg";
import speaker2 from "../assets/image-zx7.jpg";
import arrow from "../assets/asset 7.svg"
import ListnerImg from "../assets/asset 13.jpeg";
import Ear1 from "../assets/boat.jpg";
import Ear2 from "../assets/asset 9.png";
import { products } from '../utills/featuredData'
const EarPhonePage = () => {
    return (
        <div>
            <div className='h-[200px] flex items-center justify-center bg-[#191919]'>
                <h1 className='flex items-center justify-center font-bold text-6xl uppercase text-white tracking-wide leading-0'>
                    Earphones
                </h1>
            </div>
            <div className='custom-container my-10 flex flex-col gap-8'>
                {/* headphones */}
                <div className='flex items-stretch justify-center my-10'>
                    <div>
                        <img src={Ear1} alt="headphoe1" className='w-[800px] h-[600px]' />
                    </div>

                    <div className='flex items-start justify-center flex-col pl-30 gap-10'>
                        <h1 className='text-[#D87D4A] text-xl font-semibold'>
                            New Product

                        </h1>
                        <h1 className='font-semibold text-3xl'>
                            YX1 Wireless

                            <br /> Earphones

                        </h1>
                        <p className='leading-relaxed max-w-2xl text-[#807878] '>
                            Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature


                        </p>
                        <button className='uppercase bg-[#D87D4A] py-3 px-2 w-[200px] text-white'>
                            See product
                        </button>
                    </div>

                </div>
                <div className='flex items-stretch justify-center my-10'>
                    <div className='flex items-start justify-center flex-col pr-30 gap-10'>
                        <h1 className='text-[#D87D4A] text-xl font-semibold'>
                            New Product

                        </h1>
                        <h1 className='font-semibold text-3xl'>
                            XX99 Mark I
                            <br /> Earphones
                        </h1>
                        <p className='leading-relaxed max-w-2xl text-[#807878] '>
                            As the gold standard for earphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.



                        </p>
                        <button className='uppercase bg-[#D87D4A] py-3 px-2 w-[200px] text-white'>
                            See product
                        </button>
                    </div>
                    <div>
                        <img src={Ear2} alt="headphoe1" className='w-[800px] h-[600px]' />
                    </div>



                </div>
                <div className='flex items-center justify-between my-40'>
                    {/* shop */}
                    {
                        products.map((product, index) => {
                            return (
                                <div className='bg-[#F1F1F1] text-[#191919] w-[360px] h-[200px] border-radius-[20px] gap-2 p-4 flex flex-col items-center bg-cover justify-center' >
                                    <img src={product.img} alt="img" className='h-[100px] w-[100px]  -mt-20 object-cover' />
                                    <h1 className='text-2xl font-medium'>{product.heading}</h1>
                                    <h2 className='flex items-center justify-center gap-4'>
                                        Shop
                                        <span>
                                            <img src={arrow} alt="arrow" />
                                        </span>
                                    </h2>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='flex items-center justify-between my-40 gap-10 '>
                    {/* Audio gear */}

                    <div className='flex-1 flex flex-col gap-8'>
                        <h1 className='text-5xl font-semibold text-[#191919] uppercase leading-tight'>
                            Bringing you the
                            <span className='text-red-500 px-2'>
                                best
                            </span>

                            audio gear
                        </h1>

                        <p className='text-[#7e7a7a] font-normal tracking-wide leading-relaxed'>
                            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.


                        </p>
                    </div>
                    <div className='flex-1'>
                        <img src={ListnerImg} alt="music listner" className='w-full h-[600px] object-cover rounded-xl' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EarPhonePage