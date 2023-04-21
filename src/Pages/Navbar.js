import React from 'react'
import PageLogo from '../assets/images/ZMLG.png'
import NavItems from '../assets/data/NavbarItem.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Register from '../components/Register'

function Navbar() {
  // mobile hamburger menu
  const [mobileOpen, setMobileOpen] = useState(false)

  // register modal
  const [openRegister, setOpenRegister]=useState(false)


  const openDropdown = () => {
    setMobileOpen(current => !current);
  }
  return (
    <header className="bg-white">
      <nav className="bg-white p-2">
        <div className="flex flex-wrap justify-between mx-auto ">
          <a href="/" className="flex">
            <img src={PageLogo} className="h-14 item-start" alt="ZoomAway Logo" />
            <span className=" zoomText self-center text-md font-semibold whitespace-nowrap"><span className='logoZoomText'>Zoom</span>Away</span>
          </a>
          <div className="flex items-center lg:order-2 ">
            <a href="#" className="signUpBtn font-medium rounded-lg text-sm lg:text-lg mr-2 lg:px-2 lg:py-2 md:px-2 md:py-2 px-1 py-1" id='signupBtn'>Sign in</a>
            <button className="registerBtn focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm lg:text-lg lg:px-2 lg:py-2 md:px-2 md:py-2 px-1 py-1" 
            onClick={()=>setOpenRegister(true)}
            >Register
            </button>
            {openRegister && <Register/>}

          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 " id="menu-default">
            <ul className='navbarItems flex flex-col mt-4 text-lg font-medium md:flex-row md:space-x-8 md:mt-0 '>
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
          <div className='mobileBarIcon lg:hidden md:block sm:block pt-4' onClick={openDropdown}>
            <FontAwesomeIcon icon={faBars} size="xl"/>
          </div>
          {mobileOpen?
            <ul className='mobileItems lg:hidden pt-8 block text-center text-2xl font-bold tracking-wide'>
              {NavItems.map((headerItems, index) =>
                <li key={index} className='md-ml10 text-lg'>
                  <a
                    href={headerItems.url}
                    id={headerItems.id}
                  > <Link to={headerItems.linkTo}>{headerItems.title}</Link>
                  </a></li>
              )}
            </ul>: null
            }
        </div>
      </nav>
    </header>
  )
}

export default Navbar