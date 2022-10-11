import React from "react";
import { ProductType } from "../../types/product";
import Product from "./Product";

interface ProductFeedProps {
  products: ProductType[];
}

const ProductFeed: React.FC<ProductFeedProps> = ( { products } ) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      { products.slice( 0, 4 ).map(
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
      <img className='md:col-span-full' src='https://links.papareact.com/dyz' alt='Ad' />
      <div className='md:col-span-2'>
        { products.slice( 4, 5 ).map(
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
      { products.slice( 5, products.length ).map(
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
