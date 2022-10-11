import React, { useState } from "react";
import { ProductType } from "../types/product";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const Product: React.FC<ProductType> = ( {
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
} ) => {
  const [ ratings ] = useState(
    Math.floor( Math.random() * ( 5 - 1 + 1 ) + 1 ) // randomizes values between 1 and 5
  );

  const [ hasPrime ] = useState( Math.random() < 0.5 ); // randomizes boolean values

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{ category }</p>
      <Image src={ image } height={ 200 } width={ 200 } objectFit="contain" />
      <h4 className='my-3'>{ title }</h4>
      <div className="flex">
        { Array( ratings )
          .fill( [] )
          .map( ( _, i ) => (
            <StarIcon className="h-5 text-yellow-500" />
          ) ) }
      </div>
      <p className='text-xs my-2 line-clamp-2'>{ description }</p>
      <div className='mb-5'>
        <Currency quantity={ price } currency="BGN" />
      </div>
      { hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src="https://links.papareact.com/fdw" alt={ "prime" } />
          <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>
      ) }

      <button className='mt-auto button'>Add to Basket</button>
    </div>
  );
};

export default Product;
