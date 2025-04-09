import React, { useContext, useState } from 'react'
import { FilterContext } from '../context/Filtercontext';

function Filters() {
    const[filter,setfiler]=useState('')
    console.log(filter);
    const {fetchfilterdata}=useContext(FilterContext)
    console.log(filter);
    
    
  return (
    <div>
        <div className='border-1 rounded-2xl  mt-6 space-y-3'>
            <p className='font-bold p-5'>Filters</p>

            <hr />
            
             <input type="radio" onChange={(e)=>setfiler(e.target.value)} value={'T-Shirt'} name='dress'/>T-Shirt
             <input type="radio" value={'Polo'} onChange={(e)=>setfiler(e.target.value)} name='dress'/>Polo
             
             <input type="radio" value={'Shirt'} onChange={(e)=>setfiler(e.target.value)} name='dress'/>Shirt
           
            <hr />
            <h1 className='font-bold'>Price</h1>
            <hr />
            <h1 className='font-bold'>Colors</h1>
            <div className='flex gap-5'>
                <button className='bg-red-300 w-[30px] h-[30px] rounded-full'></button>
                <button className='bg-yellow-600 w-[30px] h-[30px] rounded-full'></button>
                <button className='bg-red-600 w-[30px] h-[30px] rounded-full'></button>
                <button className='bg-green-400 w-[30px] h-[30px] rounded-full'></button>
                <button className='bg-blue-200 w-[30px] h-[30px] rounded-full'></button>
            </div>
            <div className='flex gap-5'>
                <button className='bg-red-800 w-[30px] h-[30px] rounded-full'></button>
                <button className='bg-blue-800 w-[30px] h-[30px] rounded-full'></button>
                <button className='bg-green-400 w-[30px] h-[30px] rounded-full'></button>
                <button className='bg-black w-[30px] h-[30px] rounded-full'></button> 
                <button className='bg-yellow-300 w-[30px] h-[30px] rounded-full'></button>
            </div>
            <hr />
            <h1 className='font-bold'>Size</h1>
            <div className='flex gap-3'>
                <button className='rounded-2xl py-3 px-2 bg-gray-200'>XX-Small</button>
                <button className='rounded-2xl py-3 px-2 bg-gray-200'>X-Small</button>
                <button className='rounded-2xl py-3 px-2 bg-gray-200'>Small</button>
            </div>
            <div className='flex gap-3'>
                <button className='rounded-2xl py-3 px-2 bg-gray-200'>Medium</button>
                <button className='rounded-2xl py-3 px-2 bg-black text-white'>Large</button>
                <button className='rounded-2xl py-3 px-2 bg-gray-200'>X-Large</button>

            </div>
            <hr />
            <h1 className='font-bold'>Dress Style</h1>
            <p>Casual</p>
            <button onClick={()=>fetchfilterdata(filter)} className='bg-black text-white rounded-3xl w-full'>Apply Filter</button>

        </div>
        
    </div>
  )
}

export default Filters