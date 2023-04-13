import React from 'react'
import SearchBar from '../components/SearchBar'
import '../assets/styles/Homepage.css'
import '../assets/styles/Vechiles.css'
import AboutIcons from '../components/AboutIcons'
import VechileCarousel from '../components/VechileCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const FAQquestions = [
  {
      question: 'Why ZoomAway?',
      answer: 'We are an independent car rental company that started in 2021 and always put our customers first. We offer affordable cars to rent whilst allowing you to choose your vechile, requested destination and time. We highly value our customers experiece and will always try to help problem solve issues if they occur.'
  },
  {
      question: 'How long will I have to wait until my enquiry is confirmed?',
      answer: 'Once you submit your enquiry, we aim to call you within 12 hours. If you enquire outside of our opening hours, one of our representatives will aim to call you by 7am the nexy day.'
  },
  {
      question: 'Who is able to rent from us?',
      answer: 'Anyone can rent from us if you are aged 18 and over, certified driving license for a minimum of 2 years and available funds to rent.'
  }
]

function Homepage() {
  const customerReviews = [
    {
      id: 1,
      name: 'Lance Stance',
      review: 'Easy and quick communication from sending my enquiry to getting the keys to the car. Very happy with the service this company provides.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 2,
      name: 'Kate Sade',
      review: 'Confidential and easy to navigate.',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: 3,
      name: 'Trent Howl',
      review: 'Car was in great condition and the company was able to help with changing drop-off destination.',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    }
  ]

  
  const [selectedFAQ, setSelectedFAQ] = useState(null)

  const openFAQ = (i) => {
      if (selectedFAQ === i) {
          return setSelectedFAQ(null)
      }
      else {
          setSelectedFAQ(i)
      }
    }
  return (
    <div className='homepage'>
      <div className='heroBackground'>
        <SearchBar />
      </div>
      <div className='aboutHomepage ml-7'>
        <AboutIcons />
      </div>
      <div className='vechileCarousel'>
        <VechileCarousel />
      </div>
      <div className='textBanner'>
        <h1 className='font-bold text-4xl text-center py-10'>Enabling you to reach your destination whilst saving you money and stress!</h1>
        <p className='font-normal text-2xl text-center'><span className='spanOrange'>24/7</span> Support</p>
      </div>
      <div className="testimonials">
        <h1 className='testimonialHeading text-4xl font-bold my-8 text-center'>Testimonials</h1>
        <h2 className='testimonialSubheading text-lg font-semibold text-center mb-10'>Hear from some of our happy customers...</h2>
        <div className='allReviews grid grid-cols-2 md:grid-cols-3 gap-4 w-full p-5 mb-6'>
          {customerReviews.map((review) =>
            <blockquote className=" individualReview bg-gray-100 p-8 h-100  ">
              <div className="flex items-center gap-4 viewedReview">
                <img
                  alt={review.name}
                  src={review.img}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="reviewText text-xl underline underline-offset-2">
                  <p className="reviewerName font-medium">{review.name}</p>
                </div>
              </div>

              <p className="reviewQuote relative mt-4 text-gray-500 text-xl italic">
                <span>&ldquo;</span>
                {review.review}

                <span >&rdquo;</span>
              </p>
            </blockquote>
          )}

        </div>
      </div>
      <div className='FAQsection'>
        {/* <h1 className='FAQTitle text-4xl font-bold pt-5 text-center mb-0'>Frequently Asked Questions</h1> */}
        <div className='FAQwrapper grid grid-cols-2 mb-5'>
          <div>
            <img src='http://clipart-library.com/new_gallery/135-1358536_index-of-transparent-background-question-mark-icon.png' alt='Question mark' className='questionMark w-80 h-80' />
          </div>
          <div className='accordion w-2/3'>
          <h1 className='FAQTitle text-4xl font-bold pt-5 text-center mb-10'>Frequently Asked Questions</h1>
            {FAQquestions.map((item, i) =>
              <div className='item'>
                <div className='questionTitle' onClick={() => openFAQ(i)}>
                  <h2>{item.question}</h2>
                  <span>{selectedFAQ === i ? <FontAwesomeIcon icon={faChevronUp} style={{ color: "#000000", }} /> : <FontAwesomeIcon icon={faChevronDown} style={{ color: "#000000", }} />}</span>
                </div>
                <div className={selectedFAQ === i ? 'questionAnswer show' : 'questionAnswer'}>
                  <h3 className='FAQanswer'>{item.answer}</h3>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Homepage