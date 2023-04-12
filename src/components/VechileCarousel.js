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
                <div className='specsTable'>
                    {/* This shows the correct car spec when a certain car picture is picked with the id  */}
                    <h1 className='carNameCarousel  text-3xl font-semibold pb-2 '>{show.model} {show.make}</h1>
                    <table className="carSpecs">
                        <caption className="p-5 text-lg font-semibold text-center text-white">
                            Price per day: £{show.pricePd}
                        </caption>
                        <tbody className='text-center'>
                            <tr className="bg-white">
                                <th scope="row" className='py-2'>
                                    Make
                                </th>
                                <td className='py-2'>
                                    {show.make}
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row"className='py-2'>
                                    Model
                                </th>
                                <td className='py-2'>
                                    {show.model}
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className='py-2'>
                                    Doors
                                </th>
                                <td className='py-2'>
                                    {show.doors}
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className='py-2'>
                                    Seats
                                </th>
                                <td className='py-2'>
                                    {show.seats}
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className='py-2'>
                                    Year
                                </th>
                                <td className='py-2'>
                                    {show.year}
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className='py-2'>
                                    Transmission
                                </th>
                                <td className='py-2'>
                                    {show.transmission}
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className='py-2'>
                                    Fuel
                                </th>
                                <td className='py-2'>
                                    {show.fuel}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pickCar flex flex-row">
                    {carsAvailable.map((cars, i) =>
                        <>
                            <div className="thumbnail" key={i}>
                                <img className={carImage.id === i ? "clicked" : ""} src={cars.img} onClick={() => handleClick(i)} height="90" width="120" alt='thumbnail' />
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