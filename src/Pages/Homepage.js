import React from 'react'
import SearchBar from '../components/SearchBar'
import '../assets/styles/Homepage.css'
import '../assets/styles/Vechiles.css'
import AboutIcons from '../components/AboutIcons'
import VechileCarousel from '../components/VechileCarousel'
import FAQ from '../components/FAQ'
import TestimonalCard from '../components/TestimonalCard'

function Homepage() {

  return (
    <div className='homepage'>
      <div className='heroBackground'>
        <SearchBar />
      </div>
      <div className='aboutHomepage'>
        <AboutIcons />
      </div>
      <div className='vechileCarousel'>
        <VechileCarousel />
      </div>
      <div className='reviewHomepage'>
        <TestimonalCard/>
      </div>
      <div className='FAQsection'>
        <FAQ />
      </div>
    </div>
  )
}

export default Homepage