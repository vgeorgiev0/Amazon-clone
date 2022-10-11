import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

type Props = {}

const Banner = ( props: Props ) => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-40 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={ false }
        showIndicators={ false }
        showThumbs={ false }
        interval={ 5000 }
      >
        <div>
          <img loading='lazy' src="https://links.papareact.com/gi1" alt="first image" />
        </div>
        <div>
          <img loading='lazy' src="https://links.papareact.com/6ff" alt="first image" />
        </div>
        <img loading='lazy' src="https://links.papareact.com/7ma" alt="first image" />

      </Carousel>
    </div>
  )
}

export default Banner