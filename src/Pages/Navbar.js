import React from 'react'
import PageLogo from '../assets/images/ZMLG.png'
import NavItems from '../assets/data/NavbarItem.json'
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="bg-white p-3">
        <div className="flex flex-wrap justify-between mx-auto ">
          <a href="/" className="flex">
            <img src={PageLogo} className="h-12 item-start" alt="ZoomAway Logo" />
            <span className="self-center text-lg font-semibold whitespace-nowrap"><span className='logoZoomText'>Zoom</span>Away</span>
          </a>
          <div className="flex items-center lg:order-2">
            <a href="#" className="signUpBtn font-medium rounded-lg text-lg px-2 py-2 mr-2" id='signupBtn'>Sign up</a>
            <a href="#" className="registerBtn focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-lg px-2 py-2">Register</a>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className='navbarItems flex flex-col mt-4 text-lg font-medium lg:flex-row lg:space-x-8 lg:mt-0 '>
              {NavItems.map((headerItems, index) =>
                <li key={index} className='md-ml10 text-lg'>
                  <a
                    href={headerItems.url}
                    id={headerItems.id}
                  > <Link to={headerItems.linkTo}>{headerItems.title}</Link>
                  </a></li>

              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar