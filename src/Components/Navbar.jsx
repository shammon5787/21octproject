import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-2'>
        <div className='text-4xl font-bold text-blue-600'>
            <h1>{new Date().toUTCString().slice(0, 16)}</h1>
            <h1 className='uppercase'>welcome to over fast food center</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full lg:w-[350px] rounded-md outline-none text-black' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar