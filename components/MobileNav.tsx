"use client"

import { Raleway } from 'next/font/google'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const raleway = Raleway({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })

const MobileNav = () => {

    const [currentPath, setCurrentPath] = useState("/")

    useEffect(() => {

        if (window !== undefined) {
            setCurrentPath(window.location.pathname)
        }

    }, [])

    const handleToggleMenu = () => {
        const menu = document.querySelector(".mobile-menu")
        menu?.classList.toggle("open")
    }

    return (
        <div className=''>
            <div className=' lg:hidden w-full h-screen bg-white fixed z-20 block pt-8 mobile-menu p-0'>

                <div className=' w-full flex items-center justify-end pr-8 box-border'>
                    <i className="fi fi-rr-cross text-black text-lg cursor-pointer" onClick={handleToggleMenu}></i>
                </div>

                <div className=' w-4/5 pt-3 pb-3 ml-auto mr-auto text-start'>
                    <a href="/" className={`${raleway.className} ${currentPath === "/" ? "font-semibold text-amber-400" : "font-normal text-black"} text-lg hover:bg-white hover:bg-opacity-25 w-full pt-3 pb-3`}>HOME</a>
                </div>

                <div className=' w-4/5 pt-3 pb-3 ml-auto mr-auto text-start'>
                    <a href="/about" className={`${raleway.className} ${currentPath === "/about" ? "font-semibold text-amber-400" : "font-normal text-black"} text-lg hover:bg-white hover:bg-opacity-25 w-full pt-3 pb-3`}>ABOUT</a>
                </div>

                <div className=' w-4/5 pt-3 pb-3 ml-auto mr-auto text-start'>
                    <a href="/menu" className={`${raleway.className} ${currentPath === "/menu" ? "font-semibold text-amber-400" : "font-normal text-black"} text-lg hover:bg-white hover:bg-opacity-25 w-full pt-3 pb-3`}>MENU</a>
                </div>

                <div className=' w-4/5 pt-3 pb-3 ml-auto mr-auto text-start'>
                    <a href="/location" className={`${raleway.className} ${currentPath === "/location" ? "font-semibold text-amber-400" : "font-normal text-black"} text-lg hover:bg-white hover:bg-opacity-25 w-full pt-3 pb-3`}>LOCATION</a>
                </div>
                <div className=' w-4/5 pt-3 pb-3 ml-auto mr-auto text-start'>
                    <a href="/contact" className={`${raleway.className} ${currentPath === "/contact" ? "font-semibold text-amber-400" : "font-normal text-black"} text-lg hover:bg-white hover:bg-opacity-25 w-full pt-3 pb-3`}>CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default MobileNav