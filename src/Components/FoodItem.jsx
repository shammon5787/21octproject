import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'
import { useSelector } from 'react-redux'

const FoodItem = () => {
  const category = useSelector((state)=>state.category.category)
  const search = useSelector((state)=>state.search.search)
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
       {
         FoodData.filter((item)=>{
          if(category === 'All'){
            return item.name.toLowerCase().includes(search.toLowerCase())
          }
          else{
            return category === item.category && item.name.toLowerCase().includes(search.toLowerCase())
          }
         }).map((item)=>{
          return(
            <FoodCard key={item.id} id = {item.id} name = {item.name} image = {item.image} price = {item.price} desc = {item.desc} rating = {item.ratting} />
          )
         })
       }
    </div>
  )
}

export default FoodItem