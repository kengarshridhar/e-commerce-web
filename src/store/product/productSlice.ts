import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  stock: number
}

interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
}

const initialState: ProductsState = {
  products: [
    {
        id: "1",
        name: "Smartphone X",
        description: "Latest smartphone with advanced features",
        price: 999.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1617997455403-41f333d44d5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stock: 50,
    },
    {
        id: "2",
        name: "Laptop Pro",
        description: "High-performance laptop for professionals",
        price: 1499.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stock: 30,
    },
    {
        id: "3",
        name: "Wireless Headphones",
        description: "Premium noise-cancelling headphones",
        price: 299.99,
        category: "Audio",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stock: 100,
    },
  ],
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Create
    addProduct: (state, action: PayloadAction<Omit<Product, "id">>) => {
      const newProduct = {
        ...action.payload,
        id: Date.now().toString(),
      }
      state.products.push(newProduct)
    },

    // Read - handled by the state itself

    // Update
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id)
      if (index !== -1) {
        state.products[index] = action.payload
      }
    },

    // Delete
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product.id !== action.payload)
    },
  },
})

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions

export default productsSlice.reducer
