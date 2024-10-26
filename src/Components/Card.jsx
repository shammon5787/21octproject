import React from 'react'
import { IoClose } from "react-icons/io5";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
  const selectCart = useSelector((state) => state.cart.cart)
  return (
    <div className='bg-zinc-800 w-full h-full fixed top-0 right-0 lg:w-[25vw] p-3'>
      <div className='flex items-center justify-between font-semibold'>
        <h1 className='text-2xl'>Your Orders</h1>
        <h1 className='text-4xl cursor-pointer bg-green-50 text-black rounded-full hover:bg-black hover:text-white transition-all duration-500'><IoClose /></h1>
      </div>

      {
        selectCart.map((item) => (
          <CardItem key={item.id} id = {item.id} name = {item.name} price = {item.price} image = {item.image} qty = {item.qty} />
        ))
      }

      <div className='absolute font-semibold bottom-0'>
        <h1>Total Item: </h1>
        <h1>Total Price: </h1>
        <hr />
        <button className='bg-blue-900 px-1.5 text-xl rounded-md font-semibold hover:bg-green-900 transition-all duration-500 my-2 w-[90vw] lg:w-[23vw]'>Check Out</button>
      </div>
    </div>
  )
}

export default Card