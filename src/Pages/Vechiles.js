import React from 'react'
import { carsAvailable } from '../assets/data/cars'
import { useNavigate} from 'react-router-dom';
import {Link, Route, Routes} from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';



function Vechiles() {
    const navigate = useNavigate

    return (
        <>
        <HeroBanner />
        <h1 className=' vechilePgTitle text-5xl font-bold my-8 text-center pt-6'>Our Vechiles</h1>
        <div className='carCards grid grid-cols-2 md:grid-cols-3 gap-4'>
            {carsAvailable.map((card) =>
                <div class=" indiviCar max-w-sm m-5 border border-gray-200 rounded-lg shadow flex flex-col justify-between">
                    <a href="#">
                        <img src={card.img} alt="car options" className="px-2" />
                    </a>
                    <div class="p-5 carContent">
                            <div className='carName mb-2 text-3xl font-bold tracking-tight '>
                                <h2 >{card.make} {card.model}</h2>
                            </div>
                            <div className='carPrice mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                                <h2 className='font-semibold text-center'>£ {card.pricePd}</h2>
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
                        <Link to="/">
                        <button className='bookBtn text-white text-center font-bold rounded-lg px-5 py-2.5 mr-2 mb-2 mt-4 flex  ' >
                            Book Now</button>

                        </Link>
                    </div>
                </div>
            )}

        </div>
        </>
    )
}

export default Vechiles