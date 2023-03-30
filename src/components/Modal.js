import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { newList } from './SearchBar'
import { carsAvailable } from '../assets/data/cars'

function Modal() {

    const [showModal, setShowModal] = useState(false);


    const carUrl=() => {
   
        if (newList[0].car === "Vauxhall Corsa"){
        return carsAvailable[0].img;
        }
        else if(newList[0].car ==="Ford Focus"){
            return carsAvailable[1].img;
        }
        else if(newList[0].car ==="Nissan Juke"){
            return carsAvailable[2].img;
        }
        else if(newList[0].car ==="Volkswagen Polo GT"){
            return carsAvailable[3].img;
        }
        else if(newList[0].car ==="Cooper Mini"){
            return carsAvailable[4].img;
        }
        else if(newList.car ==="Kia Soul"){
            return carsAvailable[5].img;
        }
        else{
            return carsAvailable[6].img
        }

    }


    

    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Open regular modal
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex h-full fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Nearly there..
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </span>
                                    </button>
                                </div>                                
                                <div className="relative p-6 flex-auto">{
                                    newList.map((data)=>
                                    <>
                                    
                                    <h4> Please fill in the below form and submit to send us your enquiry</h4>
                                    <img src={carUrl(data)} />
                                    <h1>Car: {data.car}</h1>
                                    <h2>Pick up desination: {data.pickup}</h2>
                                    <h3>Pick up time and date: {data.pickupDate} {data.pickupTime}</h3>
                                    <h2>Drop off desination: {data.dropoff}</h2>
                                    <h3>Drop off time and date: {data.dropDate} {data.dropTime}</h3>
                                    </>)

                                }
                                </div>
                                {/* <form>
                                    <div className="grid md:grid-cols-2 sm:gap-5">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" className='bg-gray-300' required />
                                            <label >First name</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" className='bg-gray-300' required />
                                            <label>Last name</label>
                                        </div>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="email" className='bg-gray-300 w-96' required />
                                        <label >Email address</label>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="number" className='bg-gray-300' required />
                                            <label>Age</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="tel" className='bg-gray-300' required />
                                            <label>Phone number</label>
                                        </div>
                                    </div>
                                </form> */}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Modal