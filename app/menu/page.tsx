import * as React from "react"

import HeaderImgThingy from '@/components/HeaderImgThingy'
import { MenuComponent } from '@/components/MenuComponent'
import Image from 'next/image'
import { Raleway, Shantell_Sans, Yeseva_One } from "next/font/google"

const raleway = Raleway({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const yeseva_one = Yeseva_One({ weight: ["400"], subsets: ["latin-ext"] })
const shantell_sans = Shantell_Sans({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })

const page = () => {

    const menuImgs: string[] = [
        "/assets/aldos/menu/aldosmenu8.jpg",
        "/assets/aldos/menu/aldosmenu7.jpg",
        "/assets/aldos/menu/aldosmenu6.jpg",
        "/assets/aldos/menu/aldosmenu5.jpg",
        "/assets/aldos/menu/aldosmenu4.jpg",
        "/assets/aldos/menu/aldosmenu3.jpg",
        "/assets/aldos/menu/aldosmenu2.jpg",
    ]

    return (
        <div className=' w-full'>
            <header className=' header p-3 box-border pb-0 pt-10'>
                <HeaderImgThingy img='/assets/aldos/food2.jpg' titleThingy='Our Menu' className=" w-3/4" />

                <div className=' w-11/12 ml-auto mr-auto flex items-center justify-center lg:mt-28 md:mt-28 mt-40 mb-16 relative'>
                    <Image src={"/assets/aldos/menu/aldosmenu.jpg"} width={700} height={200} alt='Our Menu' className='rounded-2xl filter' />

                    <div className='absolute top-0 right-0 transform  -translate-y-1/2 rounded-full overflow-hidden lg:w-48 lg:h-48 md:w-36 md:h-36 w-36 h-36 ring-2 ring-amber-400'>
                        <Image src={"/assets/aldos/food8.jpg"} alt='' className=' filter saturate-[120%] brightness-90' width={230} height={230} />
                    </div>
                </div>

            </header>

            <MenuComponent menuImgs={menuImgs} />

            <section className=' w-full lg:p-28 md:p-20 pt-5 p-10 mt-10 mb-10 box-border relative'>
                <h1 className={`${yeseva_one.className} md:text-5xl text-2xl text-center mb-10`}>Drinks Menu</h1>

                <Image src={"/assets/aldos/menu/drinks/menu.jpg"} width={700} height={200} alt='Our Menu' className='rounded-2xl filter ml-auto mr-auto contrast-125' />

                <Image src={"/assets/aldos/menu/drinks/menu1.jpg"} width={700} height={200} alt='Our Menu' className='rounded-2xl filter ml-auto mr-auto contrast-125 mt-10' />
            </section>
        </div>
    )
}

export default page