import React from 'react'
import AboutIcons from '../components/AboutIcons'
import HeroBanner from '../components/HeroBanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faWarehouse, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import CustomerService from '../assets/images/customerservice.png'
import getKeys from '../assets/images/getkeys.png'
import '../assets/styles/About.css'




function About() {
  return (
    <>
      <HeroBanner />
      <div className='aboutPg grid grid-cols-2'>
        <div className='aboutImg ml-14 my-14'>
          <img src='https://images.unsplash.com/photo-1529369623266-f5264b696110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='Man standing next to car' className='aboutImgs mt-8'></img>
          <img src='https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'  alt='Man using car steering wheel'className='aboutImgs mt-8 fadeInClass'></img>
        </div>
        <div className='aboutText'>
          <h1 className='text-4xl font-bold my-8'>How it all started</h1>
          <p>We started from only having 5 cars to over 30 in a matter of years.After more than 5 years in business, we decided to give a fresher look to our brand and our services. With our fully renewed fleet of vehicles, we are ready to meet all expectations and requirements.</p>
          <div className='statSection flex'>
            <div>
            </div>
            <div>
              
            </div>

          </div>
          <p className='stat'><span className='statIcon mr-10' id='carIcon'><FontAwesomeIcon icon={faCar} /></span>30 vechiles</p> 
          <p className='stat'><span className='statIcon mr-9'><FontAwesomeIcon icon={faWarehouse} /></span>50 warehouses</p>
          <p className='stat'><span className='statIcon mr-9' id='mechanicIcon'><FontAwesomeIcon icon={faScrewdriverWrench} /></span>50+ mechanics</p>
          {/* <div className='aboutFromHomepage flex w-20'> */}
          <div className='aboutFromHomepage grid grid-cols-3 mb-8'>
            <div className='onlineSelect '>
              <div className='iconWrapper' id='laptopWrapper'>
                <FontAwesomeIcon icon={faLaptop} className='aboutIcon w-12 h-10' style={{ color: "#000000", }} id='laptopIcon' />
              </div>
              <h1>Step 1</h1>
              <p>Select a car to rent with specific locations and times to pick-up and drop off.</p>
              <p>Recieve an email with 1 hour to confirm your enquiry.</p>
            </div>
            <div className='callRepresentative'>
              <div className='iconWrapper' id='representativeWrapper'>
                <img className='aboutIcon w-24 h-24' src={CustomerService} alt="Customer Service Icon" id='representativeIcon' />
              </div>
              <h1>Step 2</h1>
              <p>24/7 access call from our one of our representatives to confirm your enquiry<br></br> with payment processing.</p>


            </div>
            <div className='driveAway'>
              <div className='iconWrapper' id='keysWrapper'>
                <img className='aboutIcon w-24 h-24' src={getKeys} alt='Get keys' id='keygivingIcon' />
              </div>
              <h1>Step 3</h1>
              <p>Pick up your car and zoom away!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
