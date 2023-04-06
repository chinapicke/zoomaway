import React from 'react'
import { useState } from 'react'
import { carsAvailable } from '../assets/data/cars'
import '../assets/styles/Vechiles.css'
import Modal from '../components/Modal.js'

function VechileCarousel() {
    // state for the carousel of car images
    const [carImage, setCarImage] = useState(carsAvailable[0])
    const [show, setShow] = useState(carsAvailable[0])


    //   function to get the index of the car image 
    const handleClick = (index) => {
        console.log(index);
    // sets index to the car.json file
        const slider = carsAvailable[index];
        const table = carsAvailable[index];
    // changes the state when to show the image/table with the correct id
        setShow(table)
        setCarImage(slider)

    }

    return (
        <>
        <div className="carousel">
            <div className='carImg'>
            <img src={carImage.img} height="300" width="500" alt='Main' />
            </div>
            <div>
                {/* This shows the correct car spec when a certain car picture is picked with the id  */}
                <h1>{show.model} {show.make}</h1>
            <table className="w-30 carSpecs">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Price per day: £{show.pricePd}
                </caption>
                <tbody>
                    <tr className="bg-gray-600">
                        <th scope="row" className="px-6 py-4 ">
                            Make
                        </th>
                        <td className="px-6 py-4">
                            {show.make}
                        </td>
                    </tr>
                    <tr className="bg-gray-600">
                        <th scope="row" className="px-6 py-4">
                            Model
                        </th>
                        <td className="px-6 py-4">
                            {show.model}
                        </td>
                    </tr>
                    <tr className="bg-gray-600">
                        <th scope="row" className="px-6 py-4">
                            Doors
                        </th>
                        <td className="px-6 py-4">
                            {show.doors}
                        </td>
                    </tr>
                    <tr className="bg-gray-600">
                        <th scope="row" className="px-6 py-4">
                            Seats
                        </th>
                        <td className="px-6 py-4">
                            {show.seats}
                        </td>
                    </tr>
                    <tr className="bg-gray-600">
                        <th scope="row" className="px-6 py-4">
                            Year
                        </th>
                        <td className="px-6 py-4">
                            {show.year}
                        </td>
                    </tr>
                    <tr className="bg-gray-600">
                        <th scope="row" className="px-6 py-4">
                            Transmission
                        </th>
                        <td className="px-6 py-4">
                            {show.transmission}
                        </td>
                    </tr>
                    <tr className="bg-gray-600">
                        <th scope="row" className="px-6 py-4">
                            Fuel
                        </th>
                        <td className="px-6 py-4">
                            {show.fuel}
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="flex flex-row">
                {carsAvailable.map((cars, i) =>
                    <>
                        <div className="thumbnail" key={i}>
                            <img className={carImage.id === i ? "clicked" : ""} src={cars.img} onClick={() => handleClick(i)} height="70" width="100" alt='thumbnail' />
                        </div>
                    </>
                )}
            </div>
        </div>
        <div>
            <Modal />
        </div>
        </>
    )
}

export default VechileCarousel