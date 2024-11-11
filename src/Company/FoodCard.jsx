import React from 'react'
import img from '../Food/3.avif'
import { MdOutlineStar } from "react-icons/md";

const FoodCard = () => {
  return (
    <div className='bg-zinc-700 rounded-md w-full lg:w-[22vw]'>
        <div className='p-3 flex flex-col items-center'>
            <img className='w-[200px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500' src= {img} alt="" />
        </div>
        <div className='p-3 bg-zinc-800 rounded-b-md'>
            <div className='flex items-center justify-between font-semibold'>
                <h1>Pizza</h1>
                <h1>$: 89</h1>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, corporis!</p>
            <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2'>
                    <MdOutlineStar className='text-yellow-400 text-3xl' />
                    <h1>4</h1>
                </span>
                <button className='bg-blue-800 px-2 rounded-md hover:bg-white hover:text-black font-semibold transition-all duration-500 my-2'>Add To Card</button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard