import React from 'react'
import images from '../assets/images/Images'
import { Link } from 'react-router-dom'


function Styles() {
  return (
    <div className='bg-gray-100 rounded-4xl mt-10  mx-[35px]'>
        <h1 className='text-center font-bold text-4xl'>BROWSE BY DRESS STYLE</h1>
        
        <div className='flex justify-center gap-10 mt-6'>
            <div  className='relative'>
                <img className='rounded-4xl' src={images.imageone} alt="" />
                <Link to={'/filter/Casual'} className='absolute top-5 left-5 text-2xl font-bold'>Casual</Link>
            </div>
            <div className='relative'>
                <img className='rounded-4xl'src={images.formal}></img>
                <Link to={'/filter/Formal'} className='absolute top-5 left-5 text-2xl font-bold'>formal</Link>
            </div>
        </div>
        <div className='flex justify-center gap-10 mt-5'>
            <div className='relative'>
                <img className='rounded-4xl' src={images.party}></img>
                <p className='absolute top-5 left-5 text-2xl font-bold'>Party</p>
            </div>
            <div className='relative mb-10'>
                <img className='rounded-4xl' src={images.gym}></img>
                <p className='absolute top-5 left-5 text-2xl font-bold '>Gym</p>
            </div>
        </div>
        
    </div>
  )
}

export default Styles