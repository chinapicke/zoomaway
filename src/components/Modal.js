import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { newList } from './SearchBar'
import { carsAvailable } from '../assets/data/cars'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

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

    const form = useRef();
    // const info = useRef();

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
        

        emailjs.sendForm('zoom.away2023', 'template_v8mm9ng', form.current, '6lLJPwhSduTTQoF0a')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
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
    const fNameError = fName === "" 
    const lNameError = lName === ""
    const emailError = email === ""
    const ageError = age === ""
    const phoneError = telephone === ""


    const validation = () => {
        return (fNameError)+(lNameError)+(emailError)+(ageError)+(phoneError)
    }



    if (!open) return null;
    return (
        <div className=" modalPopup w-full fixed inset-0 outline-none focus:outline-none bg-gray-900 bg-opacity-50"
            onClick={onClose}>
            <div className="relative w-auto my-3 mx-auto max-w-3xl"
                onClick={(e) => e.stopPropagation()}>
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                        <h1 className="modalHeading font-black text-3xl font-semibold w-full text-center">
                            Nearly there...
                        </h1>
                        <button onClick={onClose}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div className=" modalContent relative p-6 flex-auto">{
                        newList.map((data) =>
                            <>

                                <h2 className='text-lg'> Please fill in and sumbit the form below to send us your enquiry.</h2>
                                <img src={carUrl(data)} className=' h-48 modalImg justify-center' alt='Your selected car' />
                                <div className='wasPicked text-left'>
                                    <h3 className='modalInput' id='modalCar' name='car_type'>Car:  <span className='text-base'>{data.car}</span></h3>
                                    <h3 className='modalInput' id='modalPickup' name='pickUp_date'>Pick up desination: <span className='text-base'>{data.pickup}</span></h3>
                                    <h3 className='modalInput' id='modalPDateTime' name='pickUp_time'>Pick up time and date: <span className='text-base'> {data.pickupDate} {data.pickupTime}</span></h3>
                                    <h3 className='modalInput' id='modalDropoff' name='dropOff_date'>Drop off desination: <span className='text-base'>{data.dropoff}</span> </h3>
                                    <h3 className='modalInput' id='modalDDateTime' name='dropOff_time'>Drop off time and date: <span className='text-base'>{data.dropDate} {data.dropTime}</span> </h3>
                                </div>
                            </>)

                    }
                    </div>
                    <form ref={form}>
                        <div className="modalForm grid md:grid-cols-2 sm:gap-5">
                            <div className=" w-full pr-8 mb-2 group">
                            <label>First name:</label>
                                <input type="text"
                                    className='fName ml-2 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-64 p-1 text-center'
                                    value={fName}
                                    onChange={fnameEnter}
                                    name='first_name'
                                />
                            </div>
                            <div className="pr-8 w-full group">
                            <label>Last name:</label>
                                <input type="text"
                                    className='lName ml-2 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-64 p-1 text-center'
                                    value={lName}
                                    onChange={lnameEnter} 
                                    name='last_name'/>
                                    
                            </div>
                        </div>
                        <div className="w-full px-8 group">
                        <label>Email:</label>
                            <input type="email"
                                className='email ml-2 mb-2 bg-gray-300  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1 text-center'
                                value={email}
                                onChange={emailEnter}
                                name='email'
                            />
                        </div>
                        <div className="mb-2 grid md:grid-cols-2 md:gap-6">
                            <div className=" ml-1 w-full group">
                            <label>Age:</label>
                                <input type="number"
                                    className='age ml-2 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-64 p-1 text-center'
                                    value={age}
                                    onChange={ageEnter}
                                    min="18"
                                    max='120'
                                    name='age'
                                />
                                {/* Need to limit lowest number user can input  */}

                            </div>
                            <div className="pr-3 w-full group">
                            <label className='break-words'>Phone:</label>
                                <input type="tel"
                                    className='phoneNumber ml-2 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-64 p-1 text-center'
                                    value={telephone}
                                    onChange={telephoneEnter}
                                    name='phone_number'
                                />
                            </div>
                        </div>
                    </form>
                    <div className="flex items-center justify-center p-3 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="emailSentBtn bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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