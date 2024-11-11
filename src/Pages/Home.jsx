import React from 'react'
import Navbar from '../Company/Navbar'
import CategoryMenu from '../Company/CategoryMenu'
import FoodItem from '../Company/FoodItem'

const Home = () => {
  return (
    <div className='m-6'>
        <Navbar />
        <CategoryMenu />
        <FoodItem/>
    </div>
  )
}

export default Home