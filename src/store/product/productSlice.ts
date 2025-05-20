import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { getProducts } from "../../lib/API/utils"

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
  error: boolean
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: false,
}

// Fetch Products
export const FetchProduct = createAsyncThunk("FetchProduct", async () => {
  const products = await getProducts();
  return products;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Create
    // addProduct: (state, action: PayloadAction<Omit<Product, "id">>) => {
    //   const newProduct = {
    //     ...action.payload,
    //     id: Date.now().toString(),
    //   }
    //   state.products.push(newProduct)
    // },

    // // Read - handled by the state itself

    // // Update
    // updateProduct: (state, action: PayloadAction<Product>) => {
    //   const index = state.products.findIndex((product) => product.id === action.payload.id)
    //   if (index !== -1) {
    //     state.products[index] = action.payload
    //   }
    // },

    // // Delete
    // deleteProduct: (state, action: PayloadAction<string>) => {
    //   state.products = state.products.filter((product) => product.id !== action.payload)
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchProduct.pending, (state, action) => {
      state.loading = true;
    })

    builder.addCase(FetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })

    builder.addCase(FetchProduct.rejected, (state, action) => {
      console.error("Error: ", action.payload)
      state.error = true;
    })
  }
})

// export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions

export default productsSlice.reducer
