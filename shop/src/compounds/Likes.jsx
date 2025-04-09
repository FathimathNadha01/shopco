import React from 'react'
import Card from './Card'
import { fashionItems } from '../assets/staticdata/Clothdata'



function Likes() {
  return (
    <div>
        <h1 className='font-bold text-3xl text-center'>YOU MIGHT ALSO LIKE</h1>
        <div className=' w-[400px] lg:w-full overflow-auto'>
        <div className='flex lg:grid lg:grid-cols-4 gap-6'>
        {fashionItems.slice(0,4).map(items=>(
        <Card productData={items}/>

        ))}
        </div>
    </div>
    </div>
  )
}

export default Likes