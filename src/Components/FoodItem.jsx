import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'

const FoodItem = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
       {
         FoodData.map((food)=>{
            return(
                <FoodCard key={food.id} id = {food.id} name = {food.name} image = {food.image} price = {food.price} desc = {food.desc} rating = {food.ratting} />
            )
        })
       }
    </div>
  )
}

export default FoodItem