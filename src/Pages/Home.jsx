import React from 'react'
import Navbar from '../Company/Navbar'
import CategoryMenu from '../Company/CategoryMenu'
import FoodItem from '../Company/FoodItem'
import Card from '../Company/Card'

const Home = () => {
  return (
    <div className='m-6'>
        <Navbar />
        <CategoryMenu />
        <FoodItem/>
        <Card />
    </div>
  )
}

export default Home