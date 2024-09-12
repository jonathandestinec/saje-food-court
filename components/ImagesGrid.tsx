"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Qwitcher_Grypen, Raleway } from 'next/font/google'

const raleway = Raleway({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const qwitcher_grypen = Qwitcher_Grypen({ weight: ["400", "700"], subsets: ["latin-ext"] })

const ImagesGrid = () => {
    return (
        <div>
            <div className=' w-full flex items-center justify-center gap-8 ml-auto mr-auto flex-wrap'>

                <div className=" relative lg:w-max md:w-max w-10/12 ml-auto mr-auto overflow-hidden">
                    <motion.div
                        className=' absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex items-center justify-center opacity-0 z-10 rounded-2xl pb-6'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h3
                            className={` ${qwitcher_grypen.className} text-center font-semi-bold md:text-4xl lg:text-4xl text-3xl text-white mt-[100%] pb-5`}
                            initial={{ opacity: 0, transform: "translateY(20px)" }}
                            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Aldos Pumpkin Kibbe
                        </motion.h3>
                    </motion.div>

                    <Image src={"/assets/aldos/food7.jpg"} width={300} height={300} alt='' className=' rounded-2xl mb-3 relative' />
                </div>

                <div className=" relative lg:w-max md:w-max w-10/12 ml-auto mr-auto overflow-hidden">
                    <motion.div
                        className=' absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex items-center justify-center opacity-0 z-10 rounded-2xl pb-6'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h3
                            className={` ${qwitcher_grypen.className} text-center font-semi-bold md:text-4xl lg:text-4xl text-3xl text-white mt-[100%] pb-28`}
                            initial={{ opacity: 0, transform: "translateY(20px)" }}
                            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Fish And Fries
                        </motion.h3>
                    </motion.div>

                    <Image src={"/assets/aldos/food2.jpg"} width={300} height={300} alt='' className=' rounded-2xl mb-3 relative' />
                </div>

                <div className=" relative lg:w-max md:w-max w-10/12 ml-auto mr-auto overflow-hidden">
                    <motion.div
                        className=' absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex items-center justify-center opacity-0 z-10 rounded-2xl pb-6'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h3
                            className={` ${qwitcher_grypen.className} text-center font-semi-bold md:text-4xl lg:text-4xl text-3xl text-white mt-[100%] pb-44`}
                            initial={{ opacity: 0, transform: "translateY(20px)" }}
                            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Pizza
                        </motion.h3>
                    </motion.div>

                    <Image src={"/assets/aldos/food1.jpg"} width={300} height={300} alt='' className=' rounded-2xl mb-3 relative' />
                </div>

                <div className=" relative lg:w-max md:w-max w-10/12 ml-auto mr-auto overflow-hidden">
                    <motion.div
                        className=' absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex items-center justify-center opacity-0 z-10 rounded-2xl pb-24'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h3
                            className={` ${qwitcher_grypen.className} text-center font-semi-bold md:text-4xl lg:text-4xl text-3xl text-white pb-28 initial={{opacity:0, transform: "translateY(20px)"}} mt-[100%]`}
                            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Dessert
                        </motion.h3>
                    </motion.div>

                    <Image src={"/assets/aldos/food9.jpg"} width={300} height={300} alt='' className=' rounded-2xl mb-3 relative' />
                </div>
            </div>
        </div>
    )
}

export default ImagesGrid