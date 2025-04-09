import React from 'react'
import Card from './Card'
import { fashionItems } from '../assets/staticdata/Clothdata'


function Selling() {
  return (
    <div>
        <h1 className='font-bold text-4xl text-center mt-10'>TOP SELLING</h1>
        <div className=' w-[400px] lg:w-full overflow-auto'>
        <div className='flex lg:grid lg:grid-cols-4 gap-6'>
        {fashionItems.slice(5,9).map(items=>(
        <Card productData={items}/>

        ))}
        </div>
        </div>
        <div className='flex justify-center'>
        <button className="rounded-4xl bg-gray-100 mx-auto w-fit px-5 py-2 mt-10 ">View All</button>
        </div>
    </div>
  )
}

export default Selling