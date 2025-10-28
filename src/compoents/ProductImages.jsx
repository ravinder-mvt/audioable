import React from 'react'
import img1 from "../Images/men.jpg";
import img2 from "../Images/headphone2.jpg";
import img3 from "../Images/subheadphone1.jpg";
const ProductImages = () => {
    return (
        <div className='py-20'>
            <div className="custom-container">

                {/* we will do this with griding now */}


                <div className='grid grid-cols-[1.2fr_1.8fr] gap-4'>

                    <div className='grid grid-rows-2  gap-4'>
                        <img src={img1} alt="mens"  className='w-full h-full object-cover rounded-lg'/>
                        <img src={img2} alt="headphone" className='w-full h-full object-cover rounded-lg'/>
                    </div>

                    <div>
                        <img src={img3} alt="subheadphone" className='w-full object-cover rounded-lg'/>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default ProductImages