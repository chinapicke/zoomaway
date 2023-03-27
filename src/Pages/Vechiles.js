import React from 'react'
import { useState } from 'react'
import VechileCard from '../components/VechileSpecs'
import { carsAvailable } from '../assets/data/cars'
import Mini from '../assets/images/coop.png'
import Corsa from '../assets/images/corsa.png'
import Focus from '../assets/images/focus.png'
import Soul from '../assets/images/kia.png'
import Juke from '../assets/images/nissan.png'
import Polo from '../assets/images/polo.png'
import Priaus from '../assets/images/toyota.png'
import { FormControlUnstyled } from '@mui/base'

function Vechiles() {
    // let carImage;
    // const handleThis = (event) => {
    //    console.log(event.currentTarget.id)
    //    if (event.currentTarget.id==="Vauxhall"){
    //     console.log('You liked Corsa')
    //     carImage = Corsa;

    //    }
    //    if (event.currentTarget.id==="Ford"){
    //     console.log('You liked Focus')
    //     carImage= Focus;
    //    }
    //    if (event.currentTarget.id==="Nissan"){
    //     console.log('You liked Juke')
    //     carImage= Juke;
    //    }
    //    if (event.currentTarget.id==="Volkswagen"){
    //     console.log('You liked Polo')
    //     carImage= Polo;
    //    }
    //    if (event.currentTarget.id==="Cooper"){
    //     console.log('You liked Cooper')
    //     carImage= Mini;
    //    }
    //    if (event.currentTarget.id==="Kia"){
    //     console.log('You liked Soul')
    //     carImage= Soul;
    //    }
    //    if (event.currentTarget.id==="Toyota"){
    //     console.log('You liked Priaus')
    //     carImage= Priaus;
    //    }
    // }

    const [toggle, setToggle] = useState();
    const [visible, setVisible] = useState(true);

    return (
        <div className="wholeVechilePageGrid ">
            {carsAvailable.map(({ img, title, key, model }) => {
                return (
                    <>
                        <div className='vechileTypes'>
                            <button onClick={() => {
                                setToggle(key);
                                setVisible(false)
                            }}>{title}</button>
                        </div>
                        <div className="img">
                            {visible && key === "1" ? (
                                <img src={img} key={key} className="photo" />
                            ) : null}
                            {toggle === key ? (
                                <>
                                    <img src={img} key={key} className="photo" />
                                </>
                            ) : null}
                        </div>
                        <div>

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