import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../Components/FoodItem'
import Card from '../Components/Card'

const Home = () => {
  return (
    <div className='p-6'>
        <Navbar />
        <CategoryMenu />
        <FoodItem />
        <Card />
    </div>
  )
}

export default Home