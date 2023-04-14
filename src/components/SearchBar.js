import React from 'react'
import { useState } from 'react'
import { carsAvailable } from '../assets/data/cars'
import Modal from '../components/Modal'
import moment from 'moment/moment'


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
    // disables button to be clicked twice
    e.currentTarget.disabled = true;
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
  const timePError = selectPTime === '' || selectPTime <= "07:00" || selectPTime >= "21:00"
  const timeDError = selectDTime === '' || selectDTime <= "07:00" || selectDTime >= "21:00"
  const datePError = selectPDate === ''
  const dateDError = selectDDate === ''
  
  // Submit button disabled if inputs not filled in
  const validation = () => {
    return (carError)
    // +(destPError)+(destDError)+(timePError)+(timeDError)+(datePError)+(dateDError)
  }

  // date limit min and max
  const minDate = (moment().format("YYYY-MM-DD"))

  return (
    <form className="selectCarForm grid grid-cols-4 gird-rows-2" >
      <div>
        <div>
          <label className="inputFormLabel block"
          id='carLabel'>
            Select a car
          </label>
          <select
            value={selectCar}
            onChange={carSelect}
            className='searchBarInputs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 text-center'
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
            {carError && showCarError ? <p className='validationText'>You did not select a car</p> : null}</span>
        </div>
      </div>

      <div >
        <label className="inputFormLabel block"
        id='pickUpDestLabel'>
          Pick-up Destination
        </label>
        <div>
          <select
            value={selectPickup}
            onChange={destPickUp}
            className='searchBarInputs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 text-center'
          >
            <option value="">--Select a destination--</option>
            {
              locations.map((place) =>
                <option>{place.destination}</option>
              )
            }
          </select>
          <span>
            {/* Condition that if selectCar = 0, then show the p tag with the error  */}
            {destPError && showPickdestError ? <p className='validationText'>You did not select a pick-up destination</p> : null}</span>

        </div>
      </div>

      <div>
        <label className=" inputFormLabel block">
          Pick-up Date
        </label>
        <div>
          <input type='date'
            format='yyyy-MM-dd'
            value={selectPDate}
            onChange={datePickUp}
            className='searchBarInputs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 text-center'

          />
          <span>
            {/* Condition that if selectCar = 0, then show the p tag with the error  
            - Need to create another condition if date before today*/}
            {datePError && showPdateError ? <p className='validationText'>You did not select a pick-up date</p> : null}</span>

        </div>
      </div>

      <div>
        <label className="inputFormLabel block">
          Pick-up Time
        </label>
        <div>
          <input type="time"
            className='searchBarInputs timePickup bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 text-center'
            value={selectPTime}
            onChange={timePickUp}
          />
        </div>
        <span>
          {/* Condition that if selectCar = 0, then show the p tag with the error  */}
          {timePError && showPtimeError ? <p className='validationText'>You did not select a pick-up time between 07:00 and 21:00 </p> : null}</span>
      </div>

      <div>
        <div>
          <label className="inputFormLabel block"
          id='dropOffDestLabel' >
            Drop-off Destination
          </label>
          <div className="relative">
            <select
              value={selectDropoff}
              onChange={destDropOff}
              className='searchBarInputs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 text-center'
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
              {destDError && showDropdestError ? <p className='validationText'>You did not select a drop-off destination</p> : null}</span>

          </div>
        </div>
      </div>

      <div>
        <label className="inputFormLabel block">
          Drop-off Date
        </label>
        <div >
          <input type='date'
            format='yyyy-MM-dd'
            value={selectDDate}
            onChange={dateDropOff}
            min={minDate}
            className='searchBarInputs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 text-center'
          />
          <span>
            {/* Condition that if selectCar = 0, then show the p tag with the error  */}
            {dateDError && showDdateError ? <p className='validationText'>You did not select a drop-off date</p> : null}</span>

        </div>
      </div>

        <div>
          <label className="inputFormLabel block">
            Drop-off Time
          </label>
          <div>
            <input type="time"
              className='searchBarInputs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 text-center'
              value={selectDTime}
              onChange={timeDropOff}></input>
            <span>
              {/* Condition that if selectCar = 0, then show the p tag with the error  */}
              {timeDError && showDtimeError ? <p className='validationText'>You did not select a drop-off time between 07:00 and 21:00</p> : null}</span>

          </div>
        </div>

        <button className="formSubmitBtn text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-64 h-12"
        type='button'
          onClick={formSubmit}
          disabled={validation()}>
          Submit
          <Modal
            open={showModal}
            onClose={() => {
              setShowModal(false);
              // this refreshes the page so modal doesn't shw 2 arrays of the users input 
              window.location.reload(true)
            }}
          />
        </button>
    </form >
  )
}

export { newList }
export default SearchBar