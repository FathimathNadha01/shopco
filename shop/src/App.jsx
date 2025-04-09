import { useState } from 'react'

import './App.css'

import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Card from './compounds/Card'
import Product from './pages/Product'
import Casual from './pages/Casual'
import Cart from './pages/Cart'
import { FilterProvider } from './context/Filtercontext'
import { Cartprovider } from './context/Cartcontext'
import Signup from './pages/Signup'
import ScrollToTop from './compounds/Scrolltotop'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <FilterProvider>
      <Cartprovider>
        <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/filter/:type' element={<Casual/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='login' element={<Login/>}></Route>

        <Route path='/cart' element={<Cart/>}></Route>
        </Route>
      

      </Routes>
      </Cartprovider>

      </FilterProvider>
    </>
  )
}

export default App
