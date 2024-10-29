import React from 'react'
import img from '../Food/4.avif'
import { MdOutlineStarPurple500 } from "react-icons/md";

const FoodCard = () => {
    return (
        <div className='bg-gradient-to-t from-blue-600 to-blue-950 w-full lg:w-[22vw] rounded-md'>
            <div className='p-3 flex flex-col items-center'>
                <img className='rounded-md w-[200px] h-[100px] cursor-grab hover:scale-110 transition-all duration-500' src={img} alt="" />
            </div>
            <div className='bg-green-950 rounded-b-md p-3'>
                <div className='flex items-center justify-between font-semibold'>
                    <h1>pizza</h1>
                    <h1>$:45</h1>
                </div>
                <p>Lorem consectetur adipisicing elit. Quibusdam, assumenda!</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-1.5'>
                        <MdOutlineStarPurple500 className='text-yellow-400 text-3xl' />
                        <h1>4</h1>
                    </span>
                    <button className='bg-blue-900 px-2 py-0.5 rounded-md hover:bg-green-700 font-semibold'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard