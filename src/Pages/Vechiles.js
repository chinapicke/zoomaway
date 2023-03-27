import React from 'react'
import { useState } from 'react'
// import VechileCard from '../components/VechileSpecs'
import { carsAvailable } from '../assets/data/cars'
import '../assets/styles/Vechiles.css'

function Vechiles() {
    const [toggle, setToggle] = useState(1);
    // const [visible, setVisible] = useState(true);

    return (
        <div className="wholeVechilePageGrid grid grid-cols-3">
            {carsAvailable.map(({ img, title, key, model, make, doors, seats, year, transmission, fuel, pricePd }) => {
                return (
                    <>
                        <div className='vechileTypes'>
                            <button onClick={() => {
                                setToggle(key);
                                // setVisible(false)
                            }}>{title}</button>
                        </div>
                        <div className="carimg">
                            {/* {visible && key === "1" ? (
                                <img src={img} key={key} className="photo" />
                            ) : null} */}
                            {toggle === key ? (
                                <>
                                    <img src={img} key={key} className="photo" />
                                </>
                            ) : null}
                        </div>
                        <div>
                            <div className='vechileCard grid grid-cols-'>
                                <div className='carSpecs'>
                                    {/* {visible && key === "1" ? (
                                        <table className="w-full ">
                                            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                                Price per day: £{pricePd}
                                            </caption>
                                            <tbody>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4 ">
                                                        Make
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {make}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Model
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {model}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Doors
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {doors}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Seats
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {seats}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Year
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {year}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Transmission
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {transmission}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Fuel
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {fuel}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    ) : null} */}
                                    {toggle === key ? (
                                        <>
                                                                                <table className="w-full ">
                                            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                                Price per day: £{pricePd}
                                            </caption>
                                            <tbody>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4 ">
                                                        Make
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {make}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Model
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {model}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Doors
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {doors}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Seats
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {seats}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Year
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {year}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Transmission
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {transmission}
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-600">
                                                    <th scope="row" className="px-6 py-4">
                                                        Fuel
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {fuel}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </>
                                    ) : null}
                                </div>
                            </div>


                        </div>

                    </>
                )
            })}

            {/* <div className='carTypes flex flex-col'>
                <button id="Vauxhall" onClick={handleThis}>Vauxhall Corsa</button>
                <button id="Ford" onClick={handleThis}>Ford Focus</button>
                <button id="Nissan" onClick={handleThis}>Nissan Juke</button>
                <button id="Volkswagen" onClick={handleThis}>Volkswagen Polo</button>
                <button id="Cooper" onClick={handleThis}>Mini Cooper</button>
                <button id="Kia" onClick={handleThis}>Kia Soul</button>
                <button id="Toyota" onClick={handleThis}>Toyota Priuas</button>
            </div>
            <div className='carImg'>
                <img src={carImage} alt='Car image'></img>
            </div>
            <div className='vechilecard'>
                {carsAvailable.map((details) =>
                    <VechileCard
                        pricePd={details.pricePd}
                        make={details.make}
                        model={details.model}
                        doors={details.doors}
                        seats={details.seats}
                        transmission={details.transmission}
                        year={details.year}
                        fuel={details.fuel}
                    />
                )}

            </div> */}
        </div>
    )
}

export default Vechiles