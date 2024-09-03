import { Raleway, Yeseva_One } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const raleway = Raleway({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const yeseva_one = Yeseva_One({ weight: ["400"], subsets: ["latin-ext"] })

const Footer = () => {
    return (
        <footer className={` w-full backdrop-blur-xl ${raleway.className} bg-emerald-400/10 p-16 box-border text-center`}>

            <p className=' lg:text-2xl md:text-xl text-lg font-semibold mb-5'>
                Follow Us On Social
            </p>

            <div className=' text-amber-300'>
                <a href="https://www.instagram.com/saje_foodcourt/">
                    <i className="fi fi-brands-instagram text-xl"></i>
                </a>

                <div className=' border-t-2 border-t-amber-300 w-3/4 ml-auto mr-auto mt-5 pt-5 mb-5'>

                    <p className={`${yeseva_one.className} lg:text-4xl md:text-3xl text-lg text-center`}>
                        We Are Looking Forward To Your Dine With Us
                    </p>

                </div>
            </div>

            <p className='text-center text-white/80 lg:text-xl md:text-lg text-base'> © 2022 Saje Food Court. All rights reserved.
                <span> Powered by 
                    <a href="https://wa.link/6b4r59" className=' underline underline-offset-2 ml-3 text-white'>
                        Oxleaff 🚀
                    </a>
                </span>
            </p>
        </footer>
    )
}

export default Footer