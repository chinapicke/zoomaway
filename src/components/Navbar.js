import React from 'react'
import PageLogo from '../assets/images/ZoomAway.png'
import { NavItems, NavbarBtns } from './NavbarItems'
import '../assets/styles/Navbar.css'

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="navbarflex max-w-7xl items-center justify-between" >
        <div className='logoTitle flex lg:flex-1'>
          <img className="h-24 w-24" src={PageLogo} alt='car rental logo' />
          <h1 className="appName pt-7">Zoom<span>Away</span></h1>
          <div className="navbarMenu pt-7">
            <ul className='navbarItems'>
              {NavItems.map((headerItems) =>
                <li><a className={headerItems.cName} href={headerItems.url} id={headerItems.id}>{headerItems.title}</a></li>

              )}
            </ul>
            {NavbarBtns.map((buttonItems) =>
            <button className={buttonItems.cName} href={buttonItems.url} id={buttonItems.id}>{buttonItems.title}</button>
              )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar