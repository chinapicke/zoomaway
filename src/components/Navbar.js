import React from 'react'
import PageLogo from '../assets/images/zoomaway.png'
import { NavItems } from './NavbarItems'
import '../assets/styles/Navbar.css'

function Navbar() {
  return (
    <header className="bg-white">
      <nav class="bg-white pt-3">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" class="flex items-center">
            <img src={PageLogo} class=" h-20 lg:h-30" alt="ZoomAway Logo" />
            <span class="self-center text-lg font-semibold whitespace-nowrap"><span className='logoZoomText'>Zoom</span>Away</span>
          </a>
          <div class="flex items-center lg:order-2">
            <a href="https://www.facebook.com/" class=" focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">Sign up</a>
            <a href="https://www.facebook.com/" class=" focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 da">Register</a>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className='navbarItems flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 '>
              {NavItems.map((headerItems) =>
                <li key={headerItems.cName} className='md-ml10 text-md'>
                  <a
                    href={headerItems.url}
                    id={headerItems.id}
                  >{headerItems.title}
                  </a></li>

              )}
            </ul>
            {/* {NavbarBtns.map((buttonItems) =>
            <button className={buttonItems.cName} 
            href={buttonItems.url} 
            id={buttonItems.id}>
            {buttonItems.title}
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar