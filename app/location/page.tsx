import HeaderImgThingy from '@/components/HeaderImgThingy'
import React from 'react'

const page = () => {
    return (
        <div>
            <header className='header p-20 box-border'>
                <HeaderImgThingy img='/assets/food4.jpg' titleThingy='Where We Are' />
            </header>
        </div>
    )
}

export default page