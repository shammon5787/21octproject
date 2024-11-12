import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: []
    },
    reducers:{
        addCard:(state, action)=>{
            state.cart.push(action.payload)
        }
    }
})
export const {addCard} = CardSlice.actions
export default CardSlice.reducer