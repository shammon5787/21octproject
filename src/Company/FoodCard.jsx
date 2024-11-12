import React from 'react'
import img from '../Food/3.avif'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addCard } from '../Store/CardSlice';

const FoodCard = ({id, name, price, image, desc, rating}) => {
    const dispatch = useDispatch()
  return (
    <div className='bg-zinc-700 rounded-md w-full lg:w-[22vw] hover:bg-white transition-all duration-500'>
        <div className='p-3 flex flex-col items-center'>
            <img className='w-[200px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500' src= {image} alt="" />
        </div>
        <div className='p-3 bg-zinc-800 rounded-b-md'>
            <div className='flex items-center justify-between font-semibold'>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <p>{desc}!</p>
            <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2'>
                    <MdOutlineStar className='text-yellow-400 text-3xl' />
                    <h1>{rating}</h1>
                </span>
                <button onClick={()=>dispatch(addCard({id, name, image, price, qty : 1}))} className='bg-blue-800 px-2 rounded-md hover:bg-white hover:text-black font-semibold transition-all duration-500 my-2'>Add To Card</button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard