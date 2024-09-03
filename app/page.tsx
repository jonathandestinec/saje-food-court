import React from 'react'
import { Qwitcher_Grypen, Raleway, Shantell_Sans, Yeseva_One } from 'next/font/google'
import Image from 'next/image'
import LoadingComponent from '@/components/LoadingComponent'
import ImagesGrid from '@/components/ImagesGrid'
import Footer from '@/components/Footer'

const qwitcher_grypen = Qwitcher_Grypen({ weight: ["400", "700"], subsets: ["latin-ext"] })
const raleway = Raleway({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const shantell_sans = Shantell_Sans({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const yeseva_one = Yeseva_One({ weight: ["400"], subsets: ["latin-ext"] })

const page = () => {
  return (
    <div className=' w-screen overflow-x-hidden'>

      <LoadingComponent />

      <header className=' flex items-center justify-center h-screen header' id='header'>

        <div className=' header-img lg:h-[500px] md:h-[600px] h-[80vh] w-4/5 lg:mt-28 md:mt-20 mt-32 ring-4 ring-amber-200/70 flex items-center justify-center rounded-xl relative md:scale-100 lg:scale-100 scale-90 lg:p-0 md:p-0 p-5'>

          <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden lg:w-48 lg:h-48 md:w-36 md:h-36 h-28 w-28 ring-2 ring-amber-400'>
            <Image src={"/assets/food8.jpg"} alt='' className=' filter saturate-[120%] brightness-90 blur-[1px]' width={230} height={230} />
          </div>

          <div className='absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/3 rounded-full overflow-hidden lg:w-40 lg:h-40 md:w-36 md:h-36 h-28 w-28 ring-2 ring-amber-400'>
            <Image src={"/assets/food5.jpg"} alt='' className='filter saturate-[125%] brightness-90 blur-[1px]' width={200} height={200} />
          </div>

          <div className='header-img-bg active-header-img'></div>

          <div className=''>
            <p className={`${shantell_sans.className} text-lg font-medium text-center mb-5`}>More Flavors For Less</p>
            <h1 className={`${yeseva_one.className} text-5xl bg-clip-text text-transparent bg-gradient-to-r lg:from-white lg:via-amber-200 lg:to-white md:from-white md:via-amber-200 md:to-white from-white to-amber-300 lg:text-left md:text-left text-center`}>Taste The Difference</h1>

            {/* Lines */}
            <div className=' flex items-center justify-center w-full mt-2 gap-20'>
              <hr className=' border-0 border-t-[1px] border-t-amber-200 w-2/6' />
              <hr className=' border-0 border-t-[1px] border-t-amber-200 w-2/6' />
            </div>

            <p className={`${raleway.className} text-base font-normal text-center mt-5`}>
              Intercontinental dishes and Bakery house. <br />Bringing the heat to your food. <br />No one can compete with our dishes
            </p>

            <div className=' w-max ml-auto mr-auto mt-7 bg-white rounded-full text-black pl-10 pr-10'>
              <a href="#menu-section">
                <p className={`${raleway.className} text-center pt-2 pb-2 font-normal text-sm`}>SEE MORE</p>
              </a>
            </div>

          </div>
        </div>
      </header>

      <section id='menu-section' className=' w-full lg:h-screen h-max lg:p-10 md:p-28 md:pl-10 md:pr-10 p-10 bg-white mt-10 flex items-center justify-center text-black'>
        <div className=' lg:flex md:flex block items-center justify-between lg:gap-0 md:gap-10 lg:w-4/5 md:w-4/5 w-full relative'>
          <div className=' lg:w-1/2 md:w-1/2 w-full ml-auto mr-auto'>
            <h4 className={`${qwitcher_grypen.className} text-amber-500 text-3xl mb-3`}>Our Delicacy</h4>
            <h1 className={`${yeseva_one.className} lg:text-7xl md:text-6xl text-4xl`}>Our Menu</h1>
            <p className={`${raleway.className} mt-5 font-light`}>
              Our menu is crafted to provide the best possible dining experience. Our chefs are passionate about their craft and love to create memorable meals that cater to the diverse tastes of our guests.
            </p>

            <div className=' lg:mb-0 md:mb-0 mb-16'>
              <a href="/menu" className={`${raleway.className} font-light`}>
                <button className=' pl-7 pr-7 ring-1 ring-black pt-2 pb-2 border-0 rounded-full mt-8 flex items-center justify-center gap-3'>
                  VIEW OUR MENU
                  <span>
                    <i className="fi fi-tr-arrow-small-right flex items-center justify-center text-base menu-arrow-right"></i>
                  </span>
                </button>
              </a>
            </div>
          </div>

          <div className=' lg:w-1/2 md:w-1/2 w-11/12 ml-auto mr-auto flex items-center justify-end relative'>
            <Image src={"/assets/food7.jpg"} alt='' width={350} height={500} className=' ring-2 ring-amber-500' />

            <Image src={"/assets/sunflower-png-28722.png"} alt='' width={100} height={100} className=' absolute filter brightness-125 saturate-[90%] sun-flower' />
          </div>

          <Image src={"/assets/palm1.png"} alt='' width={250} height={250} className=' absolute bottom-0 left-0 transform rotate-[-140deg] lg:-translate-x-52 md:-translate-x-52 -translate-x-32 lg:translate-y-28 md:translate-y-28 translate-y-10' />

        </div>
      </section>

      <section id='offers-section' className=' w-full lg:p-28 md:p-20 p-10 lg:pt-16 md:pt-16 pt-5 box-border mt-10 text-white relative border-b-4 border-b-amber-300'>

        <div className='arc absolute'></div>

        <h1 className={`${yeseva_one.className} lg:text-7xl md:text-6xl text-4xl`}>Our Services</h1>

        <div className=' flex flex-wrap items-center lg:gap-0 md:gap-5 gap-3 justify-between w-full lg:mt-10 md:mt-10 mt-5'>

          <button className={` ${raleway.className} font-semibold rounded-full lg:text-base md:text-base text-sm text-left pl-10 pr-12 pt-[10px] pb-[10px] fles items-center bg-gradient-to-r from-amber-700 to-amber-300 backdrop-blur-xl`}>
            INTERCONTINANTAL FOODS
          </button>

          <button className={` ${raleway.className} font-semibold rounded-full lg:text-base md:text-base text-sm text-left pl-10 pr-12 pt-[10px] pb-[10px] fles items-center bg-gradient-to-r from-amber-700 to-amber-300 backdrop-blur-xl`}>
            LOCAL DELICACY
          </button>

          <button className={` ${raleway.className} font-semibold rounded-full lg:text-base md:text-base text-sm text-left pl-10 pr-12 pt-[10px] pb-[10px] fles items-center bg-gradient-to-r from-amber-700 to-amber-300 backdrop-blur-xl`}>
            BAKERY HOUSE
          </button>
        </div>

        <p className={`${raleway.className} mt-5 font-medium w-3/4 text-neutral-300`}>
          Our services are designed to cater to your specific needs and preferences. We offer a variety of options to help you create a dining experience that suits your taste buds.
        </p>

      </section>

      <section id='item-of-the-week-section' className=' w-full lg:p-28 md:p-20 pt-5 p-10 mt-10 mb-10 box-border relative'>

        <Image src={"/assets/leaf1.png"} alt='' width={300} height={300} className=' absolute filter brightness-125 top-0 right-0 transform lg:-translate-y-40 md:-translate-y-40 -translate-y-28 rotate-[180deg] lg:w-[300px] md:w-[250px] w-[150px]' />

        {/* <h1 className={`${yeseva_one.className} text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500`}>Featured Dishes</h1> */}

        <div className=' lg:flex md:flex block md:gap-20 items-center justify-between w-full ml-auto mr-auto mt-16'>

          <div className=' lg:w-1/2 md:w-1/2 w-5/6 ml-auto mr-auto flex items-center justify-start relative'>
            <Image src={"/assets/food12.jpg"} alt='' width={300} height={500} className=' filter brightness-110 saturate-[110%] ring-2 ring-amber-50/90 transform -rotate-6' />
            <Image src={"/assets/spiral2.svg"} alt='' width={300} height={500} className=' absolute bottom-0 right-0 transform lg:translate-y-5 lg:-translate-x-7 rotate-12 -z-10 md:translate-y-32 translate-y-16 md:-translate-x-36' />
          </div>

          <div className=' lg:w-1/2 md:w-1/2 w-full ml-auto mr-auto md:mt-0 lg:mt-0 mt-28'>
            <div className=' text-left text-amber-100'>
              <h5 className={`${raleway.className} text-sm mb-5 text-white`}>
                YOUR SPECIAL OCCASION DESTINATION
              </h5>
              <h4 className={`kalnia-normal text-4xl`}>
                Our Singapore noodle is a premium taste that yearns to be <span className=' italic'>savored, </span>
              </h4>
              <p className={`kalnia-normal text-4xl`}>
                delight your taste <span className=' italic'>buds</span>
              </p>
            </div>

            <p className={`${raleway.className} text-sm mb-5 text-white mt-5`}>
              It’s a harmonious dish, and is a must try for any food lover
            </p>

            <button className={` ${raleway.className} font-medium rounded-full text-base text-left pl-10 pr-12 pt-[10px] pb-[10px] fles items-center bg-gradient-to-r from-amber-700 to-amber-300 backdrop-blur-xl mt-3`}>SINGAPORE NOODLES</button>
          </div>
        </div>

      </section>

      <section id='foods-section' className=' w-full md:p-40 md:pt-16 md:pb-16 lg:p-40 p-10 pb-10 pt-0 mb-10 box-border relative'>
        <ImagesGrid />
      </section>

    </div>
  )
}

export default page