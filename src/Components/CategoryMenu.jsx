import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const listUniqueCategory = ()=>{
        const uniqueCategory = [... new Set(FoodData.map((item)=>item.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
      listUniqueCategory()
    }, [])
    
  return (
    <div className='mt-20'>
        <h1 className='text-3xl font-bold uppercase'>order your favorite food</h1>
        <div className='flex flex-row gap-4 py-2 overflow-x-scroll lg:overflow-x-hidden'>
            {
                categories.map((category, i)=>{
                    return(
                        <button className='bg-blue-900 px-2 py-0.5 rounded-md hover:bg-green-700 font-semibold'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu