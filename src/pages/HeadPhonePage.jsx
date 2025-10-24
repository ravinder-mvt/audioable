import React from 'react'
import headphoneImg from "../assets/headphone.png";
const HeadPhonePage = () => {
  return (
    <div>

      <div className='h-[200px] flex items-center justify-center bg-[#191919]'>
        <h1 className='flex items-center justify-center font-bold text-6xl uppercase text-white tracking-wide leading-0'>
          Headphones
        </h1>
      </div>
      <div className='custom-container my-10 flex flex-col gap-8'>
        {/* headphones */}
        <div className='flex items-stretch justify-center my-10'>
          <div>
            <img src={headphoneImg} alt="headphoe1" className='w-[800px] h-[600px]' />
          </div>

          <div className='flex items-start justify-center flex-col pl-30 gap-10'>
            <h1 className='text-[#D87D4A] text-xl font-semibold'>
              New Product

            </h1>
            <h1 className='font-semibold text-3xl'>
              XX99 Mark II
              <br /> Headphones

            </h1>
            <p className='leading-relaxed max-w-2xl text-[#807878] '>
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.


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
              XX99 Mark II
              <br /> Headphones

            </h1>
            <p className='leading-relaxed max-w-2xl text-[#807878] '>
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.


            </p>
            <button className='uppercase bg-[#D87D4A] py-3 px-2 w-[200px] text-white'>
              See product
            </button>
          </div>
          <div>
            <img src={headphoneImg} alt="headphoe1" className='w-[800px] h-[600px]' />
          </div>

     

        </div>
            <div className='flex items-stretch justify-center my-10'>
          <div>
            <img src={headphoneImg} alt="headphoe1" className='w-[800px] h-[600px]' />
          </div>

          <div className='flex items-start justify-center flex-col pl-30 gap-10'>
            <h1 className='text-[#D87D4A] text-xl font-semibold'>
              New Product

            </h1>
            <h1 className='font-semibold text-3xl'>
         XX59
              <br /> Headphones

            </h1>
            <p className='leading-relaxed max-w-2xl text-[#807878] '>
              Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.


            </p>
            <button className='uppercase bg-[#D87D4A] py-3 px-2 w-[200px] text-white'>
              See product
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default HeadPhonePage