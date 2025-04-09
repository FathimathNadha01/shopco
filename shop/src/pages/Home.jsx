import React from 'react'
import Hero from '../compounds/Hero'
import Arrivals from '../compounds/Arrivals'
import Selling from '../compounds/Selling'
import Styles from '../compounds/Styles'

function Home() {
  return (
    <div className=''>
        <Hero/>
        <Arrivals/>
        <hr />
        <Selling/>
        <Styles/>
        
    </div>
  )
}

export default Home