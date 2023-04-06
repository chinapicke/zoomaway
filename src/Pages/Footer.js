import React from 'react'
import FAQ from '../components/FAQ'
import '../assets/styles/Footer.css'

function Footer() {
  return (
    <>
    <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h1 class="mb-6">Zoom<span>Away</span></h1>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <p>We have a range of vechiles to help you get to your destination by a click of a button.</p>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline"> 0208 123 4567 </a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">zoomaway@gmail.com</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">How we work</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Press</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Community</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Working Hours</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    Mon-Sat: 07:00-21:00
                </li>
                <li class="mb-4">
                 Sunday: Closed
                </li>
                <li class="mb-4">
                 Public Holidays: Closed
                </li>

            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Subscription</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    Sign up for exclusive promotions and our monthly newsletter
                </li>
                </ul>
                <input 
                type="text"
                className= "flex"
                placeholder='Email address'></input>
                <button>Submit</button>

        </div>
    </div>
    </div>
</footer>
    </>
  )
}

export default Footer
