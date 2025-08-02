import { configureStore } from "@reduxjs/toolkit"
import ProductSlice from "../Features/ProductSlice"

export const Store = configureStore({
    reducer : {
        Cart : ProductSlice
    }
})