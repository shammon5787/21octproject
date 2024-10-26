import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: []
    },
    reducers:{
        addCard:(state, action)=>{
            const existingItem = state.cart.find((item)=>item.id)
            state.cart.push(action.payload)
        },
        removeCard:(state, action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload.id)
        }
    }
})

export const {addCard, removeCard} = CardSlice.actions
export default CardSlice.reducer