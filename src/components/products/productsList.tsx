import { useSelector } from 'react-redux'
import ProductCard from './productsCard'

import { RootState } from '../../store/store'

const ProductsList = () => {
  const { products } = useSelector( ( state : RootState ) => state.products )

  return (
    <>
      <div className="grid gap-6 content-center sm:grid-cols-2 lg:grid-cols-3">
        {products.length == 0 ? (
          <p className='text-center py-8'> No products found. Try a different search or add a new product. </p>
        )
        : (products.map((value, index) => (
                <ProductCard key={index} product={value} />
              ))
            )}
      </div>
    </>
  )
}

export default ProductsList