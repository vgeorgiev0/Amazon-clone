import React from 'react';
import Head from "next/head";
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';
import { GetServerSideProps } from 'next';
import { ProductType } from '../../types/product';

interface HomeProps {
  products: ProductType[]
}

const Home: React.FC<HomeProps> = ( { products } ) => {

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={ products } />

      </main>
    </div>
  );
}
export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetch( 'https://fakestoreapi.com/products' ).then( ( res ) => res.json() )
  return {
    props: {
      products,
    }
  }
}