import React from 'react'
import { carsAvailable } from '../assets/data/cars'
import {Routes, Route, useNavigate} from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGasPump } from '@fortawesome/free-solid-svg-icons'


function Vechiles() {
    const navigate = useNavigate

    const redirectHome = () => {
    navigate('/')
    }

    return (
        <div className='carCards grid grid-cols-2 md:grid-cols-3 gap-4'>
            {carsAvailable.map((card) =>
                <div class=" indiviCarmax-w-sm m-5 border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src={card.img} alt="" />
                    </a>
                    <div class="p-5 carContent">
                        <div className='makePrice grid grid-cols-2'>
                            <div className='carName mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                                <h1>{card.make} {card.model}</h1>
                            </div>
                            <div className='carPrice mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                                <h1>£ {card.pricePd}</h1>
                            </div>
                        </div>
                        <div className='carInfo grid grid-cols-2'>
                            <div className='carFuel mb-2 text-md font-bold tracking-tight text-gray-900'>
                                <p>Fuel Type: {card.fuel}</p>
                            </div>
                            <div className='carTransmission mb-2 text-md font-bold tracking-tight text-gray-900'>
                                <p>Transission: {card.transmission}</p>
                            </div>
                            <div className='carSeats mb-2 text-md font-bold tracking-tight text-gray-900'>
                                <p>Seats: {card.seats}</p>
                            </div>
                            <div className='carDoors mb-2 text-md font-bold tracking-tight text-gray-900'>
                                <p>Doors: {card.doors}</p>
                            </div>
                        </div>
                        <button className='bg-gray-700' onClick={redirectHome}>Book Now</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Vechiles