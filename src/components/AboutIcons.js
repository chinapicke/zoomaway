import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import CustomerService from '../assets/images/customerservice.png'
import getKeys from '../assets/images/getkeys.png'



function AboutIcons() {
  return (
    <div className='procsess'>
      <div className='onlineSelect'>
      <FontAwesomeIcon icon={faLaptop} className='w-12 h-12'style={{color: "#000000",}} />
            <h1>Step 1</h1>
            <p>Select a car to rent with specific locations and times to pick-up and drop off.</p>
            <p>Recieve an email with 1 hour to confirm your enquiry.</p>
      </div>
      <div className='callRepresentative'>
        <img className='w-12 h-12'src={CustomerService} alt="Customer Service Icon" />
        <h1>Step 2</h1>
        <p>24/7 access call from our one of our representatives to confirm your enquiry with payment processing.</p>


      </div>
      <div className='driveAway'>
        <img className='w-14 h-14' src={getKeys} alt='Get keys' />
      <h1>Step 3</h1>
        <p>Pick up your car and zoom away!</p>
      </div>
    </div>
  )
}


export default AboutIcons
