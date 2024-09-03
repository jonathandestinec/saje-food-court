import { cn } from '@/lib/utils'
import { Yeseva_One } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const yeseva_one = Yeseva_One({ weight: ["400"], subsets: ["latin-ext"] })

const HeaderImgThingy = ({ img, titleThingy, className }: { img: string, titleThingy: string, className: string }) => {
    return (
        <div className={cn(' w-full lg:h-64 md:h-56 h-32 ml-auto mr-auto relative flex items-center justify-center', className)}>
            <Image src={img} width={500} height={200} alt='Header Image Thingy' className=' w-full h-full rounded-2xl absolute top-0 left-0 -z-10 filter brightness-50 hue-rotate-15' />
            <h1 className={`${yeseva_one.className} lg:text-6xl md:text-5xl text-4xl text-center`}>
                {titleThingy}
            </h1>
        </div>
    )
}

export default HeaderImgThingy