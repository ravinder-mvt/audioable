import React from 'react'
import { useParams } from 'react-router-dom'
import { storeData } from '../utills/featuredData';
const Products = () => {
    const { slug } = useParams();
    const selectedProduct = storeData.filter((product) => product.slug === slug)



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
                        <img src={selectedProduct[0]?.image} alt={selectedProduct[0].title} className="w-[700px] h-[650px]" />
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
                        </p>title
                        <h1 className='text-2xl font-semibold'>
                            {selectedProduct[0].price}
                        </h1>

                        <div className='flex items-center justify-between gap-10'>
                            <button className='flex items-center justify-center gap-6 bg-[#F1F1F1] text-[#000000] px-8 py-4 text-xl font-semibold'>
                                <span>
                                    -
                                </span>
                                1
                                <span>
                                    +
                                </span>

                            </button>
                            <button className='bg-[#da804d] py-4 px-8 text-white text-md font-semibold'>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>



                <div className='my-20 flex items-start  justify-center gap-20'>
                    {/* features */}

                    <div className='flex items-start justify-start  flex-col gap-8 w-[60%]'>
                        <div className='flex items-start justify-start w-full'>
                            <h1 className='text-4xl font-bold uppercase flex items-center'>
                                Features
                            </h1>
                        </div>
                        <p className='flex text-lg font-light items-start justify-start flex-col gap-10 max-w-4xl text-[#000000]'>
                            <span>
                                {selectedProduct[0].features}
                            </span>
                            <span>
                                {
                                    selectedProduct[0].feat
                                }
                            </span>
                        </p>
                    </div>
                    {/* conatvee */}
                    <div className='w-[35%] flex flex-col items-center justify-start gap-10'>
                        <div className='flex items-center justify-center w-full'>
                            <h1 className='text-4xl font-bold uppercase justify-center flex items-center'>
                                In the Box
                            </h1>
                        </div>
                        <div className='flex items-center justify-between flex-col gap-2'>
                            {
                                selectedProduct[0]?.content?.map((prod, index) => {
                                    const [quantity, ...rest] = prod.split(" ");


                                    return (<>

                                        <div className='flex items-start justify-start flex-col gap-2 w-full'>

                                            <p className='flex items-center justify-center gap-20'>
                                                <span className='text-xl font-semibold text-[#D87D4A]'>
                                                    {quantity}
                                                </span>
                                                <span className='text-[#000000] text-xl font-light flex items-center justify-center'>
                                                    {
                                                        rest
                                                    }
                                                </span>
                                            </p>

                                        </div>

                                    </>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products