import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='text-4xl font-bold'>
            <h1> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='uppercase'>welcome to our fast food center</h1>
        </div>
        <input className='p-2 w-full lg:w-[25vw] rounded-md outline-none text-black ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar