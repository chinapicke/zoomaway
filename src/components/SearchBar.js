import React from 'react'
import { useState } from 'react'
import { carsAvailable } from '../assets/data/cars'
import Modal from '../components/Modal'
// import CarContext from './CarContext'
import { useForm } from "react-hook-form";


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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));


  const formSubmit = (e) => {
    e.preventDefault()
    // setSelectCar("")
    // setSelectPickup("")
    // setSelectPDate("")
    // setSelectDropoff("")
    // setSelectDDate("")
    // setSelectDTime("")
    // setSelectPTime("")
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
    // opens modal that confirms the order and for the user to fill in form with their details
    setShowModal(true)

    // const carErrorMessage= document.getElementById('#carValidation')

    // if (selectCar.trim().length !== 0) {
    //   console.log('input value is NOT empty');
    //   return
    // } else {
    //   console.log('input value is empty');

    // }
  }

  // pass the set into an array 

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


  return (
    <form className="selectCarForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label className="block">
            Select a car
          </label>
          <select
            value={selectCar}
            onChange={carSelect}
            {...register("selectCar", { required: 'Car is required' })}
          >
            <option value="">Select a car</option>

            {
              carsAvailable.map((select) =>
                <option
                >{select.make} {select.model}</option>

              )
            }
          </select>
        {errors.selectCar && <span>{errors.selectCar.message}</span>}
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
            {
              locations.map((place, i) =>
                <option>{place.destination}</option>
              )
            }
          </select>
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
              {
                locations.map((place, i) =>
                  <option>{place.destination}</option>
                )
              }
            </select>
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
          </div>
        </div>

        <button className="bg-white">
        {/* // onClick={formSubmit}> */}
          Submit
          {/* <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
          /> */}
        </button>
      </div>
    </form >
  )
}

export { newList }
export default SearchBar