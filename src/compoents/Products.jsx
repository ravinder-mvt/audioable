import React from 'react'
import { useParams } from 'react-router-dom'
import { headphonesData } from '../utills/headphonesData';
const Products = () => {
    const { slug } = useParams();
    const selectedProduct = headphonesData.filter((product) => product.slug === slug)
    console.log("selected product=============", selectedProduct)

    console.log("image===", selectedProduct[0]?.image)
    if (!selectedProduct) {
        return <h1>
            product not found!
        </h1>
    }

    return (
        <div>

            <div className=' custom-container'>
                <button className=" my-20 font-medium text-lg tracking-wide text-[#807d7d] border-b-2 border-transparent hover:border-[#8a8888] transition-ease-in-out duration-300 -pb-4">
                    Go Back
                </button>


                {/*  */}

                <div className='flex flex-stretch justify-between items-center'>
                    <div>
                        <img src={selectedProduct[0]?.image} alt={selectedProduct[0].title} className="w-[800px] h-[650px]" />
                    </div>
                    <div
                        className={`flex pl-20 items-start justify-center flex-col gap-10 `}
                    >
                        <h1 className="text-[#D87D4A] text-xl font-semibold">
                            {selectedProduct[0].subTitle}
                        </h1>
                        <h1 className="font-semibold text-3xl">{selectedProduct[0].title}</h1>
                        <p className="leading-relaxed text-[#807878] max-w-xl">
                            {selectedProduct[0].description}
                        </p>
                        <h1 className='text-2xl font-semibold'>
                            {selectedProduct[0].price}
                        </h1>

                        <div className='flex items-center justify-between gap-10'>
                            <button className='flex items-center justify-center gap-6 bg-[#F1F1F1] text-[#000000] px-6 py-4 text-xl font-semibold'>
                                <span>
                                    -
                                </span>
                                1
                                <span>
                                    +
                                </span>

                            </button>
                            <button className='bg-[#da804d] py-4 px-3 text-white text-md font-semibold'>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>



                <div>
                    {/* features */}

                    <div>
                        <h1>
                            Features
                        </h1>
                        <p>
                            As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.

                            From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.
                        </p>
                    </div>
                    <div>
                        <h1>
                            In the Box
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products