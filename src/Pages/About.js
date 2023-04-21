import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faWarehouse, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import CustomerService from '../assets/images/customerservice.png'
import getKeys from '../assets/images/getkeys.png'
import '../assets/styles/About.css'
import Laptop from '../assets/images/laptop.png'





function About() {
  return (
    <>
      <HeroBanner />
      <div className='aboutPg grid grid-cols-2'>
        <div className='aboutImg ml-2'>
          <img src='https://images.unsplash.com/photo-1529369623266-f5264b696110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='Man standing next to car' className='aboutImgs mt-8'></img>
          <img src='https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='Man using car steering wheel' className='aboutImgs mt-8 fadeInClass'></img>
        </div>
        <div className='aboutText'>
          <h1 className=' aboutPgTitle text-lg font-bold mt-8 text-center  pt-6'>How it all started</h1>
          <p className='aboutPgTitleText pb-3 text-sm text-center mr-3'>We started from only having 5 cars to over 30 in a matter of years. After more than 5 years in business, we decided to give a fresher look to our brand and our services. With our fully renewed fleet of vehicles, we are ready to meet all expectations and requirements.</p>
        </div>
        </div>
        <div className='statSection flex justify-evenly pb-5 mt-4 '>
            <div className=''>
              <span className='statIcon mr-5' id='carAboutIcon' ><FontAwesomeIcon icon={faCar} /></span>
              <p className='stat font-semibold'>30 Vechiles</p>
            </div>
            <div className=''>
              <span className='statIcon 'id='garageAboutIcon'><FontAwesomeIcon icon={faWarehouse} /></span>
              <p className='stat font-semibold'>35 Warehouses</p>
            </div>
            <div>
              <span className='statIcon'id='screwdriverAboutIcon' ><FontAwesomeIcon icon={faScrewdriverWrench} /></span>
              <p className='stat font-semibold'>50+ Mechanics</p>
            </div>
          </div>
          <h2 className='text-2xl font-semibold my-9 text-center italic'>Just follow these simple steps...</h2>
          <div className='aboutFromHomepage grid grid-cols-3 mb-8 mr-3 ml-2'>
            <div className='onlineSelectAbout'>
              <div className='iconWrapperAbout' id='laptopWrapperAbout'>
              <img className='aboutIconAbout w-16 h-16 ' src={Laptop} alt="Laptop Icon" id='laptopIcon' />
              </div>
              <h3 className='steps underline-offset-2'>Step 1</h3>
              <p className='stepsText'>Select a car to rent with specific locations and times to pick-up and drop off.</p>
              <p className='stepsText'>Recieve an email with 1 hour to confirm your enquiry.</p>
            </div>
            <div className='callRepresentativeAbout'>
              <div className='iconWrapperAbout' id='representativeWrapperAbout'>
                <img className='aboutIconAbout w-16 h-16' src={CustomerService} alt="Customer Service Icon" id='representativeIcon' />
              </div>
              <h3 className='steps underline-offset-2' >Step 2</h3>
              <p className='stepsText ml-2'>24/7 access call from our one of our representatives to confirm your enquiry<br></br> with payment processing.</p>


            </div>
            <div className='driveAwayAbout'>
              <div className='iconWrapperAbout' id='keysWrapperAbout'>
                <img className='aboutIconAbout w-16 h-16' src={getKeys} alt='Get keys' id='keygivingIcon' />
              </div>
              <h3 className=' steps underline-offset-2'>Step 3</h3>
              <p className='stepsText'>Pick up your car and zoom away!</p>
            </div>
          </div>
    </>
  )
}

export default About
