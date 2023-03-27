import React from 'react'
import SearchBar from './SearchBar'
import HeroImage from '../assets/images/bwcar.jpg'

function Hero() {
  return (
    <section className='heroSection'>
      <div className='heroBackground'>
        <img src={HeroImage} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover bg-center"></img>
      < SearchBar />
      </div>
    </section>
  )
}
// absolute inset-0 -z-10 h-96 w-full object-cover

export default Hero