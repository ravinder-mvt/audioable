import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image.png"
import { navTags } from '../utills/featuredData';
import { socialTags } from '../utills/featuredData';
const Footer = () => {


    return (
        <div className='bg-[#191919] w-full h-[400px] flex items-center'>

            <div className='custom-container flex items-center justify-between  gap-20'>
                <div className='flex flex-1 flex-col gap-8'>
                    <div className=''>
                        <img src={logo} alt="" className=''/>
                    </div>
                    <p className='text-[#808080]'>
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.


                    </p>

                    <p className='text-[#808080]'>
                        Copyright 2021. All Rights Reserved
                    </p>
                </div>
                <div className='flex flex-1 flex-col gap-8'>
                    <div className='flex flex-1 gap-8 items-start justify-start'>
                        {
                            navTags.map((tag, index) => {
                                return (
                                    <div key={index}>
                                        <Link className="text-lg text-white">
                                            {tag.name}
                                        </Link>



                                    </div>
                                )
                            })

                        }


                    </div>

                    <div className='flex gap-4 items-center justify-center'>
                        {
                            socialTags.map((tag, index) => {
                                return (
                                    <div className='text-white text-2xl' key={index}>
                                        <Link to={tag.link}>
                                            <img src={tag.icon} alt="" />
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer