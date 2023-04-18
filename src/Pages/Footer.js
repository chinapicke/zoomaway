import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneFlip  } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/Footer.css'
import {useRef, useState } from 'react'
    import emailjs from '@emailjs/browser';

function Footer() {

    const [emailSubscription, setEmailSubscription] = useState('')
    const [clicked, setClicked] = useState(false);
    const [buttonText, setButtonText] = useState('Submit');

    const subscription  = useRef()
    const sendSubscription = (e) => {
        e.preventDefault();
        setEmailSubscription("")
    emailjs.sendForm('zoom.away2023', 'template_mdo1ekx', subscription.current, '6lLJPwhSduTTQoF0a')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setClicked(!clicked);
    setButtonText('Submitted');
}

const footerEmailEnter = (e) => {
    setEmailSubscription(e.target.value)
}

  return (
    <>
    <div className="callUs">
        <h1 className='text-white text-center pt-6'>Call us on <span className='numberAndIcon'>0208 123 4567<FontAwesomeIcon icon={faPhoneFlip} /></span></h1>
    </div>
    <footer className="bg-zinc-700">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h1 className="mb-6 text-white">Zoom<span>Away</span></h1>
            <ul className="text-black footerSubheadings">
                <li className="mb-4">
                    <p>We have a range of vechiles to help you get to your destination by a click of a button.</p>
                </li>
                <li className="mb-4">
                    <a  className="hover:underline"> 0208 123 4567 </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">zoomaway@gmail.com</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-8 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-black footerSubheadings">
                <li className="mb-4 ">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">How we work</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Press</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Community</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-8 text-sm font-semibold text-gray-900 uppercase dark:text-white">Working Hours</h2>
            <ul className="text-black footerSubheadings">
                <li className="mb-4">
                    Mon-Sat: 07:00-21:00
                </li>
                <li className="mb-4">
                 Sunday: Closed
                </li>
                <li className="mb-4">
                 Public Holidays: Closed
                </li>

            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Subscription</h2>
            <ul className="text-black footerSubheadings">
                <li className="mb-4">
                    Sign up for exclusive promotions and our monthly newsletter
                </li>
                </ul>
                <form ref={subscription} onSubmit={sendSubscription}> 
                <input  
                type="text"
                className= "flex bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 text-center"
                placeholder='Email address'
                onChange={footerEmailEnter}
                value={emailSubscription}
                name='newsletterEmail'
                ></input>
                <button
                className='footerBtn bg-black text-white rounded-lg text-sm px-5 py-2.5 mb-2'
                style={{ backgroundColor: clicked ? "green" : "black" }}
                >{buttonText}</button>
                </form>

        </div>
    </div>
    </div>
</footer>
    </>
  )
}

export default Footer
