import React from 'react'
import img from '../Food/4.avif'
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const CardItem = ({id, name, price, image, qty}) => {
    return (
        <div className='p-2 bg-slate-950 rounded-md mt-1 flex gap-4 shadow-md'>
            <MdDelete className='absolute right-6 cursor-pointer hover:text-red-400' />
            <img className='w-[55px] h-[55px] rounded-full' src={image} alt="" />
            <div className='flex items-center justify-between font-semibold'>
                <div className='leading-5'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <div className='flex items-center gap-3 absolute mt-8 right-7'>
                    <FiMinus className='text-xl cursor-pointer' />
                    <span>{qty}</span>
                    <FiPlus className='text-xl cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default CardItem