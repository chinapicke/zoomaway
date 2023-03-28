import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CarOne from '../assets/images/focus.png'

function Modal() {
    const [showModal, setShowModal] = useState(false);
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
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
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
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <h4> Please fill in the below form and submit to sned us your enquiry</h4>
                                    <img src={CarOne} className=' h-52' />
                                    <h1>This is where a title will go</h1>
                                    <h2>Pick up desination:</h2>
                                    <h3>Pick up time and date:</h3>
                                    <h2>Drop off desination:</h2>
                                    <h3>Drop off time and date:</h3>
                                </div>
                                <form>
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
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="email" className='bg-gray-300 w-96'required />
                                        <label >Email address</label>
                                    </div>
                                    <div class="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="number" className='bg-gray-300' required />
                                            <label>Age</label>
                                        </div>
                                        <div class="relative z-0 w-full mb-6 group">
                                            <input type="tel" className='bg-gray-300' required />
                                            <label>Phone number</label>
                                        </div>
                                    </div>
                                </form>
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