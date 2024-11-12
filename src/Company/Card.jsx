import React from 'react'
import { IoIosClose } from "react-icons/io";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
  const selectItem = useSelector((state)=>state.cart.cart)
  return (
    <div className='bg-zinc-700 fixed top-0 right-0 w-full h-full p-3 lg:w-[28vw]'>
      <div className='flex items-center justify-between font-semibold text-xl '>
        <h1>Your Orders </h1>
        <IoIosClose className='cursor-pointer text-4xl bg-green-800 rounded-full animate-spin hover:animate-none hover:bg-yellow-400 hover:text-black' />
      </div>
      {
        selectItem.map((item)=>{
          return(
            <CardItem key={item.id} id = {item.id} name = {item.name} price = {item.price} image = {item.image} qty = {item.qty} />
          )
        })
      }
      <div className='absolute bottom-0 font-semibold'>
        <h1>Total Items: </h1>
        <h1>Total Price: </h1>
        <hr />
        <button className='bg-zinc-800 px-2 rounded-md hover:bg-white hover:text-black font-semibold transition-all duration-500 my-2 w-[90vw] lg:w-[25vw] '>Check Out</button>
      </div>
    </div>
  )
}

export default Card