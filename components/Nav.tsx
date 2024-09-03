"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Qwitcher_Grypen, Raleway, Yeseva_One, Lora } from 'next/font/google'
import { cn } from '@/lib/utils'

const qwitcher_grypen = Qwitcher_Grypen({ weight: ["400", "700"], subsets: ["latin-ext"] })
const raleway = Raleway({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const lora = Lora({ weight: ["400", "500", "600", "700",], subsets: ["latin-ext"] })
const yeseva_one = Yeseva_One({ weight: ["400"], subsets: ["latin-ext"] })

const DesktopNav = () => {

    const handleToggleMenu = () => {
        const menu = document.querySelector(".mobile-menu")
        menu?.classList.toggle("open")
    }

    // Check if the scrollSection is visibe or not
    const [menuVisible, setMenuVisible] = useState(false)

    useEffect(() => {
        const menuSection = document.querySelector(".header");

        const observer = new IntersectionObserver(
            ([entry]) => {
                setMenuVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        menuSection && observer.observe(menuSection)

        return () => {
            if (menuSection) {
                observer.unobserve(menuSection);
            }
        };

    }, [])

    return (
        <div className={cn(` w-full h-20 bg-emerald-950/60 backdrop-blur-xl fixed z-10 top-0 flex items-center justify-between lg:pr-12 lg:pl-12 md:pr-10 md:pl-5 pr-5 pl-0 box-border shadow-lg dex-nav transition-all ease-in-out duration-1000`, {
            "transform -translate-y-96": !menuVisible,
            "transform translate-y-0": menuVisible
        })}>
            <div className=' h-max flex items-center justify-center gap-2 w-max lg:scale-100 md:scale-100 scale-75'>
                <Image src={"/assets/logo.png"} alt='Logo' width={75} height={75} className=' filter brightness-150' />
                <h1 className={`${lora.className} font-light lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100 md:text-lg text-base`}>SAJE FOOD COURT</h1>
            </div>

            <div className=' lg:flex items-center justify-center gap-7 font-extralight hidden'>
                <a href="/" className={`text-base nav-link relative font-medium ${raleway.className}`}>
                    HOME
                    <span className='nav_underline'></span>
                </a>
                <a href="/about" className={`text-base nav-link relative font-medium ${raleway.className}`}>
                    ABOUT
                    <span className='nav_underline'></span>
                </a>
                <a href="/menu" className={`text-base nav-link relative font-medium ${raleway.className}`}>
                    MENU
                    <span className='nav_underline'></span>
                </a>
                <a href="/location" className={`text-base nav-link relative font-medium ${raleway.className}`}>
                    WHERE ARE WE ?
                    <span className='nav_underline'></span>
                </a>
                <a href="/contact" className={`text-base nav-link relative font-medium ${raleway.className}`}>
                    CONTACT US
                    <span className='nav_underline'></span>
                </a>
            </div>

            <div className=' flex items-center justify-center gap-5 lg:scale-100 md:scale-100 scale-90'>
                <div className=' menu-btn-contaier bg-gradient-to-r from-amber-500 to-amber-200 rounded-[100px] flex items-center justify-center font-ligt'>
                    <a href="/menu" className=' our-menu-btn bg-emerald-950 flex items-center justify-center text-base'>
                        OUR MENU
                    </a>
                </div>

                <i className="fi fi-rr-menu-burger text-xl flex items-center justify-center lg:hidden cursor-pointer" onClick={handleToggleMenu}></i>
            </div>
        </div>
    )
}

export default DesktopNav