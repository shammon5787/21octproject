import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const listUniqueCategory = ()=>{
        const uniqueCategory = [... new Set(FoodData.map((item)=>item.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
      listUniqueCategory()
    }, [])
    const dispatch = useDispatch()
    
  return (
    <div className='mt-20'>
        <h1 className='text-3xl font-bold uppercase'>order your favorite food</h1>
        <div className='flex flex-row gap-4 py-2 overflow-x-scroll lg:overflow-x-hidden'>
        <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-900 px-2 py-0.5 rounded-md hover:bg-green-700 font-semibold'>All</button>
            {
                categories.map((category, i)=>{
                    return(
                        <button onClick={()=>dispatch(addCategory(category))} key={i} className='bg-blue-900 px-2 py-0.5 rounded-md hover:bg-green-700 font-semibold'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu