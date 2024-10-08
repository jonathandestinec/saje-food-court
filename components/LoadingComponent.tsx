"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion"

import { Qwitcher_Grypen, Raleway, Shantell_Sans, Yeseva_One } from 'next/font/google'

const qwitcher_grypen = Qwitcher_Grypen({ weight: ["400", "700"], subsets: ["latin-ext"] })
const raleway = Raleway({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const shantell_sans = Shantell_Sans({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const yeseva_one = Yeseva_One({ weight: ["400"], subsets: ["latin-ext"] })

const LoadingComponent = () => {

    const overayRef = useRef<HTMLDivElement>(null)

    const handleFadeOutOverlay = () => {
        overayRef.current?.classList.add('opacity-0')
        overayRef.current?.classList.replace("backdrop-blur-xl", "backdrop-blur-sm")

        setTimeout(() => {
            overayRef.current?.classList.add("hidden")
        }, 1000);
    }

    useEffect(() => {
        setTimeout(() => {
            handleFadeOutOverlay()
        }, 5000);
    }, [])

    return (
        <div className=' fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-60 z-50 backdrop-blur-xl transition-all ease-in-out duration-1000 lg:p-0 md:p-10 p-10' ref={overayRef}>
            <div>
                <motion.h1
                    initial={{ transform: "translateY(10px", opacity: 0 }}
                    whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`${yeseva_one.className} md:text-5xl text-3xl text-center transform opacity-0`}
                >Aldos Restaurant Abuja</motion.h1>
                <Image src={"/assets/aldos/logo.jpg"} width={180} height={180} alt='' className=' filter brightness-90 contrast-150 ml-auto mr-auto rounded-full mt-10 mb-10' />
                <motion.h3
                    initial={{ transform: "translateY(10px", opacity: 0 }}
                    whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className={`${raleway.className} text-2xl font-medium text-center opacity-0`}
                >Continental Rooftop Restaurant </motion.h3>
                <motion.p
                    initial={{ transform: "translateY(10px", opacity: 0 }}
                    whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className={`text-center ${raleway.className} mt-5 opacity-0`}
                >
                    📍Jabi lake square plaza
                    🚚 DELIVERY AVAILABLE
                    ☎️ for inquiries pls call: 08187681555
                </motion.p>
            </div>
        </div>
    )
}

export default LoadingComponent