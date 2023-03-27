import { DatePicker } from '@mui/x-date-pickers';
import React from 'react'
import { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


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


  return (
    <form class="selectCarForm">
      <div>
        <div >
          <label class="block">
            Select a car
          </label>
          <select>
            <option>Ford</option>
          </select>
        </div>
      </div>

      <div >
        <label class="block">
          Pick-up Destination
        </label>
        <div>
          <select >
            <option>New Mexico</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block">
          Pick-up Date
        </label>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
      </div>

      <div>
        <label class="block">
          Pick-up Time
        </label>
        <div>
          <input type="time" className='timePickup'></input>
        </div>
      </div>

      <div>
        <div>
          <label class="block" >
            Drop-off Destination
          </label>
          <div class="relative">
            <select  >
              <option>London</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label class="block">
          Drop-off Date
        </label>
        <div >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
      </div>

      <div>
        <label class="block">
          Drop-off Time
        </label>
        <div>
          <input type="time" className='timePickup'></input>
        </div>
      </div>

      <button>Submit</button>
    </form >
  )
}

export default SearchBar