import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const UniqueCategory = ()=>{
        const listUniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(listUniqueCategory)
    }
    useEffect(() => {
      UniqueCategory()
    }, [])
    
  return (
    <div className='mt-24'>
        <h1 className='uppercase font-bold text-3xl'>order your favorite food</h1>
        <div className='flex items-center gap-4 overflow-x-scroll lg:overflow-x-hidden'>
            {
                categories.map((category, I)=>{
                    return(
                        <button key={I} className='bg-blue-900 px-1.5 text-xl rounded-md font-semibold hover:bg-green-900 transition-all duration-500 my-2'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu