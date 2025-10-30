import React from 'react';
import headphone from "../assets/image-hero.jpg";
import { heroSectionProducts } from "./../utills/featuredData.js";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#191919] flex items-center justify-center text-white">
      <div className="custom-container flex items-center w-full justify-between gap-12 relative">


        <div
          className="flex flex-col justify-center gap-4 flex-1 w-full h-[700px] bg-cover bg-center bg-no-repeat rounded-lg p-10"
          style={{
            backgroundImage: `url(${headphone})`,
          }}
        >
          <h1 className="uppercase pt-30 text-[#808080] font-bold tracking-[10px] text-lg leading-6">
            New Product
          </h1>

          {heroSectionProducts?.map((product, index) => (
            <div key={index} className='flex flex-col gap-8 items-start'>
              <h2 className="font-semibold text-6xl max-w-md">{product.heading}</h2>

              <p className="text-[#808080] max-w-sm leading-relaxed ">
                {product.description}
              </p>

              <button
                className="bg-[#D87D4A] py-2 px-2 w-[200px] text-lg font-medium text-white hover:bg-[#FBAF85] transition-colors"
                onClick={() => navigate(`products/${product.slug}`)}
              >
                See Product
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
