import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/authSlice"
import productsReducer from "./product/productSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch