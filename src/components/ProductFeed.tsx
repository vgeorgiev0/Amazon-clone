import React from 'react'
import { Product } from '../types/product'

interface ProductFeedProps {
  products: Product[]
}

const ProductFeed: React.FC<ProductFeedProps> = ( { products } ) => {
  return (
    <div>ProductFeed</div>
  )
}

export default ProductFeed