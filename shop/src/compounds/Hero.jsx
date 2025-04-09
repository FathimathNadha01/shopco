import React from 'react'
import images from '../assets/images/Images'

function Hero() {
  return (
    <div>
        <div className='flex lg:gap-70 gap-10  px-8 mt-8 flex-wrap lg:flex-nowrap'>
        <div>
          <h1 className='font-bold text-4xl bungee-tint-regular'>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
          <p className='mt-3'>Browse through our device range of meticulously crafted garments.designed <br /> to bring out your individuality and cater to your sense of style</p>
          <button className='rounded-4xl w-full lg:w-fit bg-black text-white px-7 py-2 mt-5'>Shop Now</button>
          <div className='flex gap-4 flex-wrap justify-center lg:justify-start mt-7'>
            <div>
            <h1 className='font-bold text-2xl'>200+</h1>
            <h1>International Brands</h1>
            <div className='vl'></div>
            </div>
            <div>
            <h1 className='font-bold text-2xl'>2000+</h1>
            <h1>High Quality Products</h1>
            </div>
            <div>
            <h1 className='font-bold text-2xl'>30,000+</h1>
            <h1>Happy Customers</h1>
            </div>
          </div>
        </div>
        <div className=''>
          <img className='' src={images.peopletwo}></img>
          {/* <img className='absolute top-25 left-30 ' src={images.stars}></img> */}
          {/* <img className='absolute top-10 left-130' src={images.satrone}></img> */}
        </div>
        </div>
       <marquee behavior="" direction="" className='bg-black py-4 px-4 '>
          <div className='flex justify-between gap-10'>

          
          <img src={images.Vector}></img>
          <img src={images.zara}></img>
          <img src={images.gucci}></img>
          <img src={images.prada}></img>
          <img src={images.group}></img>
          </div>
          </marquee> 
              </div>
  )
}

export default Hero