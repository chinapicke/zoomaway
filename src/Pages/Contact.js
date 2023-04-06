import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import HeroBanner from '../components/HeroBanner'


function Contact() {
    return (
        <>
        <HeroBanner />
        <div className='wholeContactPage grid grid-cols-2 md:grid-cols-2 gap-4'>
            <div className='contactInfoAside'>
                <h1>Want to ask a question or more information?</h1>
                <h2>We promise to try answer your question/enquiry within 48 hours. Please check your email inbox/spam.</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline"><span><FontAwesomeIcon icon={faPhone} /></span>0208 123 4567</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline"><span><FontAwesomeIcon icon={faEnvelope} /></span>zoomaway@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div className='contactForm'>
                <section>
                    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <form action="#" class="space-y-8">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium ">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <label for="subject" className="block mb-2 text-sm font-medium ">Subject</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" className="block mb-2 text-sm font-medium ">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 d" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center">Send message</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}

export default Contact