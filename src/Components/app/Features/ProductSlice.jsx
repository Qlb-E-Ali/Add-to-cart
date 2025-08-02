import { createSlice } from "@reduxjs/toolkit"

const ProductSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {

            const existProduct = state.find((item) => item.id === action.payload.id)

            if (!existProduct) {
                state.push(action.payload)
            }
            else {
                existProduct.qty += 1
            }

        },
        removeProduct: (state, action) => {

            const index = state.findIndex((item) => item.id === action.payload.id)

            console.log(index);


            state.splice(index, 1)

        },
        incrementQty: (state, action) => {

            const existProduct = state.find((item) => item.id === action.payload.id)
            existProduct.qty += 1
        },
        decrementQty: (state, action) => {
            const existProduct = state.find((item) => item.id === action.payload.id)
            existProduct.qty -= 1
        },
    }
})

export const { addProduct, decrementQty, incrementQty, removeProduct } = ProductSlice.actions

export default ProductSlice.reducer;