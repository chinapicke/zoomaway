import React from 'react'
import '../assets/styles/Testimonials.css'


function TestimonalCard() {


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



  return (
    <>
      <div className="testimonialsTitle">
        <h1>Testimonals</h1>
        <h2>Hear from some of our happy customers</h2>
        <div className='slider grid grid-cols-2 md:grid-cols-3 gap-4 w-full p-5'>
          {customerReviews.map((review) =>
            <blockquote className="bg-gray-100 p-8 h-100  ">
              <div className="flex items-center gap-4 viewedReview">
                <img
                  alt={review.name}
                  src={review.img}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">{review.name}</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                {review.review}

                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          )}

        </div>
      </div>
    </>
  )
}

export default TestimonalCard