import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Offers from '../compounds/Offers'

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
        <div>
            <Header/>
        </div>
        <div className='flex-grow'>
            <Outlet/>
        </div>
        <div className='mb-[-20px] z-50'>
       <Offers />
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout