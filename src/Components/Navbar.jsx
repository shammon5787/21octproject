import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-2'>
        <div className='text-4xl font-bold text-blue-600'>
            <h1>{new Date().toUTCString().slice(0, 16)}</h1>
            <h1 className='uppercase'>welcome to over fast food center</h1>
        </div>
        <input className='p-2 w-full lg:w-[350px] rounded-md outline-none text-black' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar