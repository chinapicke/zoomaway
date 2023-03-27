import React from 'react'

function VechileCard(props) {
    return (
        <>
            <div className='vechileCard grid grid-cols-2'>

                <div className='carSpecs'>
                    <table className="w-full ">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                            Price per day: £{props.pricePd}
                        </caption>
                        <tbody>
                            <tr className="bg-gray-600">
                                <th scope="row" className="px-6 py-4 ">
                                    Make
                                </th>
                                <td className="px-6 py-4">
                                    {props.make}
                                </td>
                            </tr>
                            <tr className="bg-gray-600">
                                <th scope="row" className="px-6 py-4">
                                    Model                
                                </th>
                                <td className="px-6 py-4">
                                    {props.model}
                                </td>
                            </tr>
                            <tr className="bg-gray-600">
                                <th scope="row" className="px-6 py-4">
                                    Doors
                                </th>
                                <td className="px-6 py-4">
                                    {props.doors}
                                </td>
                            </tr>
                            <tr className="bg-gray-600">
                                <th scope="row" className="px-6 py-4">
                                    Seats
                                </th>
                                <td className="px-6 py-4">
                                    {props.seats}
                                </td>
                            </tr>
                            <tr className="bg-gray-600">
                                <th scope="row" className="px-6 py-4">
                                    Year
                                </th>
                                <td className="px-6 py-4">
                                    {props.year}
                                </td>
                            </tr>
                            <tr className="bg-gray-600">
                                <th scope="row" className="px-6 py-4">
                                    Transmission
                                </th>
                                <td className="px-6 py-4">
                                    {props.transmission}
                                </td>
                            </tr>
                            <tr className="bg-gray-600">
                                <th scope="row" className="px-6 py-4">
                                    Fuel
                                </th>
                                <td className="px-6 py-4">
                                    {props.fuel}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default VechileCard
