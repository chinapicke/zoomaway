import React from 'react'
import PageLogo from '../assets/images/ZoomAway.png'
import { NavItems } from './NavbarItems'

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="navbarflex max-w-7xl items-center justify-between" >
        <div className='logoTitle flex lg:flex-1'>
        <img className="h-24 w-24"src={PageLogo} alt='car rental logo' />
        <h1 className="appName pt-7">Zoom<span>Away</span></h1>
        </div>
        <div className="navbarItems">
          <ul>
            {NavItems.map((headerItems =>)}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar