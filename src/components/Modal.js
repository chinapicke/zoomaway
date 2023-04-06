import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { newList } from './SearchBar'
import { carsAvailable } from '../assets/data/cars'
import { useState } from 'react'

let userDetailList = ([])
function Modal({ open, onClose }) {

    const carUrl = () => {

        if (newList[0].car === "Vauxhall Corsa") {
            return carsAvailable[0].img;
        }
        else if (newList[0].car === "Ford Focus") {
            return carsAvailable[1].img;
        }
        else if (newList[0].car === "Nissan Juke") {
            return carsAvailable[2].img;
        }
        else if (newList[0].car === "Volkswagen Polo GT") {
            return carsAvailable[3].img;
        }
        else if (newList[0].car === "Cooper Mini") {
            return carsAvailable[4].img;
        }
        else if (newList.car === "Kia Soul") {
            return carsAvailable[5].img;
        }
        else {
            return carsAvailable[6].img
        }

    }

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [telephone, setTelephone] = useState('')
    const [userDetails, setUserDetails] = useState([])

    const sendEmail = (e) => {
        e.preventDefault()
        setFName("")
        setLName("")
        setEmail("")
        setAge("")
        setTelephone("")

        const information = [
            {
                firstName: fName,
                lastName: lName,
                email: email,
                age: age,
                phone: telephone
            }
        ]
        
        userDetailList = [...information, ...userDetails]
        setUserDetails(userDetailList)
        console.log(userDetailList)
        onClose()
       
    }

    const fnameEnter = (e) => {
        setFName(e.target.value)
    }
    const lnameEnter = (e) => {
        setLName(e.target.value)
    }
    const emailEnter = (e) => {
        setEmail(e.target.value)
    }
    const ageEnter = (e) => {
        setAge(e.target.value)
    }
    const telephoneEnter = (e) => {
        setTelephone(e.target.value)
    }

    // to show text if the input is blank 
    const fNameError = fName ===""
    const lNameError = lName ===""
    const emailError = email ===""
    const ageError = age ===""
    const phoneError = telephone ===""

    const validation = () => {
        return fNameError, lNameError, emailError, ageError, phoneError
      }
      

    if (!open) return null;
    return (
        <div className="justify-center items-center flex h-full fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={onClose}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl"
                onClick={(e) => e.stopPropagation()}>
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Nearly there..
                        </h3>
                        <button onClick={onClose}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">{
                        newList.map((data) =>
                            <>

                                <h4> Please fill in the below form and submit to send us your enquiry</h4>
                                <img src={carUrl(data)} className='w-54 h-48 modalImg' alt='Your selected car' />
                                <h1 className='modalInput' id='modalCar'>Car: {data.car}</h1>
                                <h2 className='modalInput' id='modalPickup'>Pick up desination: {data.pickup}</h2>
                                <h3 className='modalInput' id='modalPDateTime'>Pick up time and date: {data.pickupDate} {data.pickupTime}</h3>
                                <h2 className='modalInput' id='modalDropoff'>Drop off desination: {data.dropoff}</h2>
                                <h3 className='modalInput' id='modalDDateTime'>Drop off time and date: {data.dropDate} {data.dropTime}</h3>
                            </>)

                    }
                    </div>
                    <form>
                        <div className="grid md:grid-cols-2 sm:gap-5">
                            <div className=" z-0 w-full mb-6 group">
                                <input type="text"
                                    className='bg-gray-300'
                                    value={fName}
                                    onChange={fnameEnter}
                                />
                                <label >First name</label>
                            </div>
                            <div className=" z-0 w-full mb-6 group">
                                <input type="text"
                                    className='bg-gray-300'
                                    value={lName}
                                    onChange={lnameEnter} />
                                <label>Last name</label>
                            </div>
                        </div>
                        <div className=" z-0 w-full mb-6 group">
                            <input type="email"
                                className='bg-gray-300 w-96'
                                value={email}
                                onChange={emailEnter}
                                />
                            <label >Email address</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className=" z-0 w-full mb-6 group">
                                <input type="number"
                                    className='bg-gray-300'
                                    value={age}
                                    onChange={ageEnter}
                                    min="18"
                                    max='120'
                                    />
                                    {/* Need to limit lowest number user can input  */}
                                <label>Age</label>
                            </div>
                            <div className=" z-0 w-full mb-6 group">
                                <input type="tel"
                                    className='bg-gray-300'
                                    value={telephone}
                                    onChange={telephoneEnter}
                                    />
                                <label>Phone number</label>
                            </div>
                        </div>
                    </form>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={sendEmail}
                            disabled={validation()}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal