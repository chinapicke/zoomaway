import React from 'react'
import { useState } from 'react'
import { carsAvailable } from '../assets/data/cars'
import Modal from '../components/Modal'
// import CarContext from './CarContext'


const locations = [
  {
    id: 1,
    destination: 'London Heathrow Airport T1'
  },
  {
    id: 2,
    destination: 'London Gatwick Airport T1'
  },
  {
    id: 3,
    destination: 'London Bridge'
  },
  {
    id: 4,
    destination: 'Birmingham Bullring'
  },
  {
    id: 5,
    destination: 'Birmingham International Airport'
  },
  {
    id: 6,
    destination: 'Manchester Old Trafford'
  },
  {
    id: 7,
    destination: 'Manchester Airport'
  },

]
let newList = ([])

function SearchBar() {

  const [selectCar, setSelectCar] = useState("")
  const [selectPickup, setSelectPickup] = useState("")
  const [selectPDate, setSelectPDate] = useState("")
  const [selectDropoff, setSelectDropoff] = useState("")
  const [selectDDate, setSelectDDate] = useState("")
  const [selectPTime, setSelectPTime] = useState("")
  const [selectDTime, setSelectDTime] = useState("")
  const [userEnquiry, setUserEnquiry] = useState([])

  // modal
  const [showModal, setShowModal] = useState(false);

  // form validation
  const [showCarError, setShowCarError] = useState(true);
  const [showPickdestError, setShowPickdestError] = useState(true);
  const [showDropdestError, setShowDropdestError] = useState(true);
  const [showPdateError, setShowPdateError] = useState(true);
  const [showDdateError, setShowDdateError] = useState(true);
  const [showPtimeError, setShowPTimeError] = useState(true);
  const [showDtimeError, setShowDTimeError] = useState(true);




  const formSubmit = (e) => {
    e.preventDefault()
    setSelectCar("")
    setSelectPickup("")
    setSelectPDate("")
    setSelectDropoff("")
    setSelectDDate("")
    setSelectDTime("")
    setSelectPTime("")
    const input = [
      {
        car: selectCar,
        pickup: selectPickup,
        pickupDate: selectPDate,
        pickupTime: selectPTime,
        dropoff: selectDropoff,
        dropDate: selectDDate,
        dropTime: selectDTime
      }
    ]
    // console.log(input)
    newList = [...input, ...userEnquiry]
    setUserEnquiry(newList)
    console.log(newList)
    setShowModal(true)
  }

  // getting the users input
  const carSelect = (e) => {
    setSelectCar(e.target.value)
  }
  const destPickUp = (e) => {
    setSelectPickup(e.target.value)
  }
  const destDropOff = (e) => {
    setSelectDropoff(e.target.value)
  }
  const datePickUp = (e) => {
    setSelectPDate(e.target.value)
  }
  const dateDropOff = (e) => {
    setSelectDDate(e.target.value)
  }
  const timePickUp = (e) => {
    setSelectPTime(e.target.value)
  }
  const timeDropOff = (e) => {
    setSelectDTime(e.target.value)
  }


// To show text if there is no input
  const carError = selectCar === ''
  const destPError = selectPickup === ''
  const destDError = selectDropoff === ''
  const timePError = selectPTime === ''
  const timeDError = selectDTime === ''
  const datePError = selectPDate === ''
  const dateDError = selectDDate === ''

// Submit button disabled if inputs not filled in
const validation = () => {
  return carError 
  // & destPError & destDError & timePError & timeDError & datePError & dateDError
}


  return (
    <form className="selectCarForm" >
      <div>
        <div>
          <label className="block">
            Select a car
          </label>
          <select
            value={selectCar}
            onChange={carSelect}
          >
            <option value="">--Select a car--</option>

            {
              carsAvailable.map((select) =>
                <option
                >{select.make} {select.model}</option>

              )
            }
          </select>
          <span>
            {/* Condition that if selectCar = 0, then show the p tag with the error  */} 
            {carError && showCarError ? <p>You did not select a car</p> : null }</span>
        </div>
      </div>

      <div >
        <label className="block">
          Pick-up Destination
        </label>
        <div>
          <select
            value={selectPickup}
            onChange={destPickUp}
          >
            <option value="">--Select a destination--</option>
            {
              locations.map((place, i) =>
                <option>{place.destination}</option>
              )
            }
          </select>
          <span>
            {/* Condition that if selectCar = 0, then show the p tag with the error  */} 
            {destPError && showPickdestError ? <p>You did not select a pick-up destination</p> : null}</span>

        </div>
      </div>

      <div>
        <label className="block">
          Pick-up Date
        </label>
        <div>
          <input type='date'
            format='yyyy-MM-dd'
            value={selectPDate}
            onChange={datePickUp}
          />
          <span>
            {/* Condition that if selectCar = 0, then show the p tag with the error  
            - Need to create another condition if date before today*/}
            {datePError && showPdateError ? <p>You did not select a pick-up date</p> : null}</span>

        </div>
      </div>

      <div>
        <label className="block">
          Pick-up Time
        </label>
        <div>
          <input type="time"
            className='timePickup'
            value={selectPTime}
            onChange={timePickUp} />
        </div>
        <span>
          {/* Condition that if selectCar = 0, then show the p tag with the error  */}
          {timePError && showPtimeError ? <p>You did not select a pick-up time</p> : null}</span>
      </div>

      <div>
        <div>
          <label className="block" >
            Drop-off Destination
          </label>
          <div className="relative">
            <select
              value={selectDropoff}
              onChange={destDropOff}
            >
              <option value="">--Select a destination--</option>

              {
                locations.map((place, i) =>
                  <option>{place.destination}</option>
                )
              }
            </select>
            <span>
              {/* Condition that if selectCar = 0, then show the p tag with the error  */}
              {destDError && showDropdestError ? <p>You did not select a drop-off destination</p> : null}</span>

          </div>
        </div>
      </div>

      <div>
        <label className="block">
          Drop-off Date
        </label>
        <div >
          <input type='date'
            format='yyyy-MM-dd'
            value={selectDDate}
            onChange={dateDropOff}
          />
          <span>
            {/* Condition that if selectCar = 0, then show the p tag with the error  */}
            {dateDError && showDdateError ? <p>You did not select a drop-off date</p> : null}</span>

        </div>

        <div>
          <label className="block">
            Drop-off Time
          </label>
          <div>
            <input type="time"
              className='timePickup'
              value={selectDTime}
              onChange={timeDropOff}></input>
            <span>
              {/* Condition that if selectCar = 0, then show the p tag with the error  */}
              {timeDError && showDtimeError ? <p>You did not select a drop-off time</p> : null}</span>

          </div>
        </div>

        <button className="bg-white"
          onClick={formSubmit} 
          disabled={validation()}>
          Submit
          <Modal
            open={showModal}
            onClose={() => {setShowModal(false);
              // this refreshes the page so modal doesn't shw 2 arrays of the users input 
               window.location.reload(true)}}
          />
        </button>
      </div>
    </form >
  )
}

export { newList }
export default SearchBar