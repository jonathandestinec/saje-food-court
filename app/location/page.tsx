import HeaderImgThingy from '@/components/HeaderImgThingy'
import { Yeseva_One } from 'next/font/google'
import React from 'react'

const yeseva_one = Yeseva_One({ weight: ["400"], subsets: ["latin-ext"] })

const page = () => {
    return (
        <div>
            <header className='header p-20 box-border pb-10'>
                <HeaderImgThingy img='/assets/aldos/food4.jpg' titleThingy='Where We Are' />
            </header>

            <section className=' w-full lg:p-28 md:p-20 pt-5 p-10 mt-0 mb-10 box-border relative'>

                <div className=' w-4/5 ml-auto mr-auto mt-0 h-96'>

                    <h1 className={`${yeseva_one.className} md:text-5xl text-2xl text-center mb-10`}>Google Maps</h1>

                    <iframe className=" h-full w-full border-0" src="https://www.google.com/maps/embed/v1/place?q=Aldo's+Restaurant+Abuja&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>

                </div>

            </section>

        </div>
    )
}

export default page