import HeaderImgThingy from '@/components/HeaderImgThingy'
import { Raleway } from 'next/font/google'
import React from 'react'

const raleway = Raleway({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })

const page = () => {
    return (
        <div>
            <header className='header lg:p-20 md:p-16 p-10 box-border'>
                <HeaderImgThingy img='/assets/aldos/food7.jpg' titleThingy='Contact Us' className=' w-3/4' />

                <div className=' w-full flex items-center justify-center mt-10'>
                    <a href="https://wa.link/rayj0i">
                        <button className={`${raleway.className} p-4 pl-10 pr-10 ring-1 ring-slate-300 font-semibold rounded-full bg-gradient-to-r from-amber-700 to-amber-400 text-white lg:text-lg md:text-lg text-base lg:w-max w-full`}>
                            On WhatsApp
                        </button>
                    </a>
                </div>


            </header>
        </div>
    )
}

export default page