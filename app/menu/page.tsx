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
        "/assets/menu1.jpg",
        "/assets/menu2.jpg",
        "/assets/menu3.jpg",
        "/assets/menu4.jpg",
        "/assets/menu5.jpg",
        "/assets/menu6.jpg",
        "/assets/menu7.jpg",
        "/assets/menu8.jpg",
        "/assets/menu9.jpg",
    ]

    return (
        <div className=' w-full'>
            <header className=' header p-3 box-border pb-0 pt-10'>
                <HeaderImgThingy img='/assets/food2.jpg' titleThingy='Our Menu' className=" w-3/4" />

                <div className=' w-11/12 ml-auto mr-auto flex items-center justify-center lg:mt-28 md:mt-28 mt-40 mb-16 relative'>
                    <Image src={"/assets/menu0.jpg"} width={700} height={200} alt='Our Menu' className='rounded-2xl filter' />

                    <div className='absolute top-0 right-0 transform  -translate-y-1/2 rounded-full overflow-hidden lg:w-48 lg:h-48 md:w-36 md:h-36 w-36 h-36 ring-2 ring-amber-400'>
                        <Image src={"/assets/food3.jpg"} alt='' className=' filter saturate-[120%] brightness-90' width={230} height={230} />
                    </div>
                </div>

            </header>

            <MenuComponent menuImgs={menuImgs} />
        </div>
    )
}

export default page