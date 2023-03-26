import React from 'react'
import HeroImage from '../assets/images/bwcar.jpg'
import SearchBar from './SearchBar'

function Homepage() {
  return (
    <section className="homepage relative isolate overflow-hidden bg-gray-900 py-24 lg:py-32">
      <img src={HeroImage} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover md:object-center "></img>
      < SearchBar />
    </section>
  )
}

export default Homepage