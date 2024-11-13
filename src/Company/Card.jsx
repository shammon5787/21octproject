import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { BiSolidCart } from "react-icons/bi";

const Card = () => {
  const [activeCard, setactiveCard] = useState(false)
  const selectItem = useSelector((state) => state.cart.cart)
  const totalitem = selectItem.reduce((totalitem , item)=>totalitem + item.qty, 0)
  const totalprice = selectItem.reduce((totalprice, item)=>totalprice + item.qty * item.price, 0)
  return (
    <>
      <div className={`bg-zinc-700 fixed top-0 right-0 w-full h-full p-3 lg:w-[28vw] ${activeCard ? "translate-x-full" : "translate-x-0"} transition-all duration-500 z-50 `}>
        <div className='flex items-center justify-between font-semibold text-xl '>
          <h1>Your Orders </h1>
          <IoIosClose onClick={() => setactiveCard(true)} className='cursor-pointer text-4xl bg-green-800 rounded-full animate-spin hover:animate-none hover:bg-yellow-400 hover:text-black' />
        </div>
        {
          selectItem.map((item) => {
            return (
              <CardItem key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} qty={item.qty} />
            )
          })
        }
        <div className='absolute bottom-0 font-semibold'>
          <h1>Total Items: {totalitem} </h1>
          <h1>Total Price: {totalprice} </h1>
          <hr />
          <button className='bg-zinc-800 px-2 rounded-md hover:bg-white hover:text-black font-semibold transition-all duration-500 my-2 w-[90vw] lg:w-[25vw] '>Check Out</button>
        </div>
      </div>
      <BiSolidCart onClick={()=>setactiveCard(false)} className={`text-green-700 text-5xl cursor-pointer fixed right-5 bottom-5 bg-white rounded-full hover:text-white hover:bg-blue-500 transition-all duration-500 ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `}/>
    </>
  )
}

export default Card