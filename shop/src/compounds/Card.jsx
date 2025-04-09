import React from 'react'
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function Card({productData}) {

  return (

    <div  className='bg-gray-100 rounded-4xl   py-5 px-5 mt-10 '>
        <div  style={{backgroundImage:`url(${productData.image}}`,
    backgroundSize:'cover',
    backgroundPosition:'center'
    }} className='h-[250px] '>
        {/* <img height={200} width={200} src={productData.image} alt="" /> */}
        </div>
        <Link to={`/product/${productData.id}`}>{productData?.name||'no data'}</Link>
        <div className='flex'>
        <Star fill='gold' stroke='white' />
        <Star fill='gold' stroke='white'/>
        <Star fill='gold' stroke='white'/>
        <Star fill='gold' stroke='white'/>
        <p>{productData.rating}</p>

        </div>
        <p>{productData.occasion}</p>
        <p>{productData.category}</p>
        <p>{productData.price}</p>
    </div>
  )
}

export default Card