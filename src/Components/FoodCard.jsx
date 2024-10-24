import React from 'react'
import img from '../Food/2.avif'
import { FaStar } from "react-icons/fa";

const FoodCard = ({id, name, price, desc, image, rating}) => {
    return (
        <div className='bg-blue-950 w-full lg:w-[23vw] flex flex-col items-center rounded-md'>
            <div className='p-3'>
                <img className='w-[200px] h-[100px] cursor-pointer rounded-md hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='bg-green-900 rounded-b-md w-full p-3'>
                <div className='flex items-center justify-between font-semibold'>
                    <h1>{name}</h1>
                    <h1>$ {price}</h1>
                </div>
                <p>{desc}.</p>
                <div  className='flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                        <FaStar className='text-yellow-400' />
                        <h1 className='font-semibold'> {rating} </h1>
                    </span>
                    <button className='bg-gray-900 px-1.5 text-xl rounded-md font-semibold hover:bg-zinc-400 hover:text-black transition-all duration-500 my-2'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard