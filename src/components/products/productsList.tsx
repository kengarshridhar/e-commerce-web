// import React from 'react'
import ProductCard from './productsCard'

const ProductsList = () => {
  return (
    <div className="grid gap-6 content-center sm:grid-cols-2 lg:grid-cols-3">
        {[
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
        ].map((value, index) => (
            <ProductCard key={index} product={value} />
        ))}
    </div>
  )
}

export default ProductsList