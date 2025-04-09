import React, { useContext } from 'react'
import images from '../assets/images/Images'
import icons from '../assets/icons/Icons'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../context/Cartcontext'

function Header() {
    const {cartdata}=useContext(Cartcontext)
  return (
    <div className='flex px-[30px] justify-between mt-5'>
        <div>
          <Link to={'/'} > <img src={images.shopco}></img></Link>

        </div>
        <div className='hidden lg:flex gap-3'>
        <div className='flex gap-8'>
            <p>Shop</p>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brands</p>
        </div>
        <div className='flex rounded-3xl border-1  bg-gray-100 max-w-[500px] '>
            <img src={icons.search}></img>
            <input className='w-full' type="text" placeholder='search for products...' />
        </div>
        </div>
        <div className='flex gap-3'>
        <Link to={'/cart'} > <img src={icons.cart}></img></Link>
        
        <p>{cartdata.length}</p>
            <img src={icons.Vector}></img>
        </div>
    </div>
  )
}

export default Header