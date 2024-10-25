import React from 'react'
import img from '../Food/3.avif'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const CardItem = ({id, name, image, price, qty}) => {
  return (
    <div className='bg-blue-900 p-1.5 rounded-md mt-2 flex gap-3 shadow-md'>
        <MdDelete className='absolute right-5 cursor-pointer hover:text-red-500' />
        <img className='w-[55px] h-[55px] rounded-full' src= {image} alt="" />
        <div className='flex'>
            <div className='leading-5 mt-3 font-semibold'>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <div className='flex gap-4 items-center absolute right-6 mt-8'>
                <FaMinus className='cursor-pointer font-semibold text-xl bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all duration-500' />
                <span>{qty}</span>
                <FaPlus className='cursor-pointer font-semibold text-xl bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all duration-500' />
            </div>
        </div>
    </div>
  )
}

export default CardItem