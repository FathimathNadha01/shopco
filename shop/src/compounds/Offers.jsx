import React from 'react'

function Offers() {
  return (
    <div className='flex flex-wrap bg-black mx-[35px] rounded-3xl px-10 p-5 justify-between'>
        <div>
            <h1 className='text-white font-bold text-4xl'>STAY UPTO DATE ABOUT <br/> OUR LATEST OFFERS</h1>

        </div>
        <div className='grid grid-cols-1'>
            
            <input type="text" placeholder='enter your email address' className='bg-white border-2xl rounded-3xl py-2 px-2 w-full lg:w-fit' /> 
            <button className=' font-bold bg-white rounded-4xl border-2xl py-2 px-2 mt-3 w-full lg:w-fit'>Subscribe to Newsletter</button>
        
        </div>
    </div>
  )
}

export default Offers