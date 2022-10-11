import Image from 'next/image'
import React from 'react'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'


type Props = {}


const Header = ( props: Props ) => {

  const { data: session, status } = useSession()

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            className='cursor-pointer active:scale-95'
            src={ 'https://links.papareact.com/f90' }
            alt='Logo'
            width={ 150 }
            height={ 40 }
            objectFit={ 'contain' } />
        </div>

        {/* Search */ }

        <div className='hidden sm:flex items-center h-10 bg-yellow-400 rounded-md hover:bg-yellow-500 flex-grow cursor-pointer whitespace-nowrap'>
          <input type={ 'text' } className='w-6 flex-grow h-full p-2 flex-shrink rounded-l-md focus:outline-none' />
          <SearchIcon className='h-12 p-4 active:scale-125' />
        </div>


        <div className='flex space-x-6 mx-6 items-center text-sm text-white'>
          <div onClick={ !session ? () => signIn() : () => signOut() } className='link text-right'>
            <p>{ session ? `Hello ${ session?.user.name }` : 'Sign In' }</p>
            { session && <p className='font-extrabold md:text-sm'>Sign Out</p> }
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'> & Orders</p>
          </div>
          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-5 w-5 bg-yellow-400 rounded-full text-black font-bold text-center'>0</span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
          </div>
        </div>
      </div>

      <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header