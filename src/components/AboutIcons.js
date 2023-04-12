import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import CustomerService from '../assets/images/customerservice.png'
import getKeys from '../assets/images/getkeys.png'



function AboutIcons() {
  return (
    <div className='processes'>
      <div className='onlineSelect '>
        <div className='iconWrapper' id='laptopWrapper'>
          <FontAwesomeIcon icon={faLaptop} className='aboutIcon w-12 h-10' style={{ color: "#000000", }} id='laptopIcon' />
        </div>
        <h1>Step 1</h1>
        <p>Select a car to rent with specific locations and times to pick-up and drop off.</p>
        <p>Recieve an email with 1 hour to confirm your enquiry.</p>
      </div>
      <div className='callRepresentative ml-4'>
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
  )
}


export default AboutIcons
