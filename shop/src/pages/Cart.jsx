import React, { useContext } from 'react'
import { Cartcontext } from '../context/Cartcontext'
import icons from '../assets/icons/Icons'

function Cart() {

    const {cartdata,deleteitem} = useContext(Cartcontext);
  return (
    <>
   
    <h1 className='font-bold text-4xl mt-6 ml-6'>YOUR CART</h1>
    <div className='grid grid-cols-2 gap-10'>
    <div className='border-1 w-[450px] h-[450px] overflow-auto rounded-2xl ml-6  gap-5'>
   {cartdata.map(items=>(

<>
<div className='flex justify-between  p-4 rounded-lg '>
<div >
<img src={items.image} className='h-[100px] w-[100px]'></img>
</div>
<div>
<p>{items.name}</p>
<p>Size:M</p>
<p>color</p>
<p>{items.quality}</p>
<p>{items.price}</p>
</div>
<div>
  <button onClick={()=>deleteitem(items.id)}> <img src={icons.deleteicon}></img> </button>
   
</div>
</div>
<hr />
</>


   )

   

   )}
   </div>
        
        <div className='border-1 w-[300px] h-[390px] rounded-2xl'>
            <h1>Order Summary</h1>

        </div>
    </div>
    </>
  )
}

export default Cart