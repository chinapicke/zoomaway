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
      <div className='aboutHomepage ml-8'>
        <AboutIcons />
      </div>
      <div className='vechileCarousel'>
        <VechileCarousel />
      </div>
      <div className='textBanner'>
        <h1 className='font-bold text-4xl text-center py-10'>Enabling you to reach your destination whilst saving you money and stress!</h1>
        <p className='font-normal text-2xl text-center'><span className='spanOrange'>24/7</span> Support</p>
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