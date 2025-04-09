import React from 'react'
import images from '../assets/images/Images'
import icons from '../assets/icons/Icons'
import Offers from '../compounds/Offers'

function Footer() {
  return (
    <>
   
    <div className='px-20 bg-gray-100 py-[40px]'>
    <div className='flex lg:justify-start gap-30 flex-wrap'>
        
        
        <div className='text-start'>
           <img className='w-[100px]' src={images.shopco}></img>
           <p className='mt-4'>Lorem ipsum dolor sit, <br /> amet consectetur adipisicing elit. <br /> Maiores, dolores.</p>
           <div className='flex gap-3 mt-4 mb-6'>
            <img className='w-[20px] h-[20px]' src={icons.twitter}></img>
            <img className='w-[20px] h-[20px]' src={icons.fb}></img>
            <img className='w-[20px] h-[20px]' src={icons.instagram}></img>
            <img className='w-[20px] h-[20px]' src={icons.github}></img>
            
           </div>
        </div>
        <div className='grid grid-cols-2 lg:grid lg:grid-cols-4 gap-10 '>
        
        <div>
            <h1 className='font-bold'>COMPANY</h1>
            <p className='mt-4'>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
        </div>
        <div>
            <h1 className='font-bold'>HELP</h1>
            <p className='mt-4'>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
        
        
        <div>
            <h1 className='font-bold'>FAQ</h1>
            <p className='mt-4'>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
        </div>
        <div>
            <h1 className='font-bold'>RESOURCES</h1>
            <p className='mt-4'>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to -Blog</p>
            <p>Youtube Playlist</p>
        </div>
        </div>
        
        
    </div>
    <hr className='text-gray-300' />
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
            <p>Shop.co &copy; 2000-2023, All Rights Reserved</p>
        </div>
        <div className="flex space-x-4">
            <img className="w-[40px]" src={icons.epay} alt="ePay" />
            <img className="w-[40px]" src={icons.gpay} alt="GPay" />
            <img className="w-[40px]" src={icons.paypal} alt="PayPal" />
            <img className="w-[40px]" src={icons.visa} alt="Visa" />
        </div>
    </div>
    </div>
    </>
    
    


    
    
    
  )
}

export default Footer