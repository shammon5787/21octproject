import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'

const FoodItem = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {
                FoodData.map((food) => {
                    return (
                        <FoodCard />
                    )
                })
            }
        </div>
    )
}

export default FoodItem