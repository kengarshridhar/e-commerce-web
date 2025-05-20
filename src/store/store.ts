import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/authSlice"

import productsReducer from "./product/productSlice"

const RootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
})

export const store = configureStore({
  reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch