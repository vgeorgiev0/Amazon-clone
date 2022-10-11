import React from "react";
import { ProductType } from "../types/product";
import Product from "./Product";

interface ProductFeedProps {
  products: ProductType[];
}

const ProductFeed: React.FC<ProductFeedProps> = ( { products } ) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
      { products.map(
        ( { category, description, id, image, price, rating, title } ) => (
          <Product
            key={ id }
            category={ category }
            description={ description }
            id={ id }
            image={ image }
            price={ price }
            rating={ rating }
            title={ title }
          />
        )
      ) }
    </div>
  );
};

export default ProductFeed;
