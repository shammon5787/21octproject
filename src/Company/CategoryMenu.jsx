import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData'

const CategoryMenu = () => {
    
    const [categories, setcategories] = useState([])
    const listUniqueCategory = ()=>{
        const uniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
      listUniqueCategory()
    }, [])
    
  return (
    <div className='mt-24'>
        <h1 className='font-bold text-3xl uppercase'>order your favorite food</h1>
        <div className='flex items-center gap-3 overflow-x-scroll lg:overflow-x-hidden'>
            {
                categories.map((category, i)=>{
                    return(
                        <button key={i} className='bg-blue-800 px-2 py-1 rounded-md hover:bg-white hover:text-black font-semibold transition-all duration-500 my-2'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu