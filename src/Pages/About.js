import React from 'react'
import AboutIcons from '../components/AboutIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faWarehouse,faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'




function About() {
  return (
    <div className='aboutPg grid grid-cols-2'>
      <div className='aboutImg'>
        <img src='https://images.unsplash.com/photo-1529369623266-f5264b696110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
      </div>
      <div className='aboutText'>
        <h1>How it all started</h1>
        <p>We started from only having 5 cars to over 30 in a matter of years.After more than 5 years in business, we decided to give a fresher look to our brand and our services. With our fully renewed fleet of vehicles, we are ready to meet all expectations and requirements.</p>
        <p><span><FontAwesomeIcon icon={faCar} /></span>30 vechiles</p>
        <p><span><FontAwesomeIcon icon={faWarehouse} /></span>50 warehouses</p>
        <p><span><FontAwesomeIcon icon={faScrewdriverWrench} /></span>50+ mechanics</p>
        <AboutIcons />
      </div>
    </div>
  )
}

export default About
