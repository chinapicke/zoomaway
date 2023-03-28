import { DatePicker } from '@mui/x-date-pickers';
import React from 'react'
import { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { carsAvailable } from '../assets/data/cars'


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


function SearchBar() {

  const { selectCar, setSelectCar } = useState("")
  const { selectPickip, setSelectPickup } = useState("")
  const { selectPDate, setSelectPDate } = useState("")
  const { selectDropoff, setSelectDropoff } = useState("")
  const { selectDDate, setSelectDDate } = useState("")

  const formSubmit = (e) => {
    e.preventDefault()
    setSelectCar("")
    setSelectPickup("")
    setSelectPDate("")
    setSelectDropoff("")
    setSelectDDate("")
    // opens modal that confirms the order and for the user to fill in form with their details
  }

  // const carSelected = (event) => {
  //   console.log(event.target.value)
  // };


  return (
    <form className="selectCarForm">
      <div>
        <div>
          <label className="block">
            Select a car
          </label>
          <select>
            {
              carsAvailable.map((select) =>
                <option
                  value={selectCar}
                // onChange={(e) => select}
                >{select.make} {select.model}</option>
              )
            }
          </select>
        </div>
      </div>

      <div >
        <label className="block">
          Pick-up Destination
        </label>
        <div>
          <select >
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
      </div>

      <div>
        <label className="block">
          Pick-up Time
        </label>
        <div>
          <input type="time" className='timePickup'></input>
        </div>
      </div>

      <div>
        <div>
          <label className="block" >
            Drop-off Destination
          </label>
          <div className="relative">
            <select >
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
      </div>

      <div>
        <label className="block">
          Drop-off Time
        </label>
        <div>
          <input type="time" className='timePickup'></input>
        </div>
      </div>

      <button onClick={formSubmit}>Submit</button>
    </form >
  )
}

export default SearchBar