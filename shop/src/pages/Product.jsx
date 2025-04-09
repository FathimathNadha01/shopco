import React, { useContext, useEffect, useState } from 'react'
import Card from '../compounds/Card'
import images from '../assets/images/Images'
import { Star } from 'lucide-react'
import Likes from '../compounds/Likes'
import { useParams } from 'react-router-dom'
import { fashionItems } from '../assets/staticdata/Clothdata'
import { Cartcontext } from '../context/Cartcontext'

function Product() {
const {id}=useParams()
console.log(id);
const [productDetails,setproductDetails]=useState([])
const{addtocart,cartdata}=useContext(Cartcontext)
const [quality,setquality]=useState(0)
 console.log('main cart',cartdata);
 
const fetchproductdetails=()=>{
 const product =   fashionItems.find((items)=>items.id==id)
 console.log(product);
 setproductDetails(product)
}


useEffect(()=>{
fetchproductdetails()
},[id])

console.log("productDetails",productDetails);


  return (
    <div>
    <div className=' grid grid-cols-1 lg:grid lg:grid-cols-2 gap-20 p-10 lg:p-20'>
    <div className='rounded-2xl'>
        <img className='' src={productDetails.image}></img>
    </div>
    <div className='space-y-2'>
        <h1 className='font-bold text-3xl'>{productDetails.name}</h1>
        <div className='flex'>
        <Star fill='gold' stroke='white' />
        <Star fill='gold' stroke='white' />
        <Star fill='gold' stroke='white' />
        <Star fill='gold' stroke='white' />
        <Star fill='gold' stroke='white' />
        <p>{productDetails.rating}</p>
        </div>
        <h1 className='font-bold'>{productDetails.price}</h1>
        <p>{productDetails.description}</p>
        <hr />
        <p>select colors</p>
        <div className='flex gap-5'>
            <button className='bg-black w-[20px] h-[20px] rounded-full'></button>
            <button className='bg-black w-[20px] h-[20px] rounded-full'></button>
            <button className='bg-black w-[20px] h-[20px] rounded-full'></button>
        </div>
        <hr />
        <p>choose size</p>
        <div className='flex gap-3'>
            <button className='rounded-2xl bg-gray-100 px-3 py-2'>Small</button>
            <button className='rounded-2xl bg-gray-100 px-3 py-2'>Medium</button>
            <button className='rounded-2xl bg-black text-white px-3 py-2'>Large</button>
            <button className='rounded-2xl bg-gray-100 px-3 py-2'>X-Large</button>
        </div>
        <hr />
        <div className='flex justify-between items-center mb-5'>
            <div className='flex gap-3'>
                <button onClick={()=>setquality(quality<=0?0:quality-1)} className='bg-gray-100 rounded-full px-2'> - </button>
                {quality}
                <button onClick={()=>setquality(quality+1)} className='bg-gray-100 rounded-full px-2'> + </button>
            </div>
            <div>
                <button onClick={()=>addtocart(id,quality)} className='bg-black text-white rounded-3xl px-20 py-3  '>Add to Cart</button>
            </div>
        </div>


    </div>
    </div>
    <Likes/>
    </div>
  )
}

export default Product