import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import QuestionMark from '../assets/images/questionmak.png'


const FAQquestions = [
    {
        question: 'Why ZoomAway?',
        answer: 'We are an independent car rental company that started in 2021 and always put our customers first. We offer affordable cars to rent whilst allowing you to choose your vechile, requested destination and time. We highly value our customers experiece and will always try to help problem solve issues if they occur.',
        id:'questionOne'
    },
    {
        question: 'How long will I have to wait until my enquiry is confirmed?',
        answer: 'Once you submit your enquiry, we aim to call you within 12 hours. If you enquire outside of our opening hours, one of our representatives will aim to call you by 7am the nexy day.',
        id:'questionTwo'

    },
    {
        question: 'Who is able to rent from us?',
        answer: 'Anyone can rent from us if you are aged 18 and over, certified driving license for a minimum of 2 years and available funds to rent.',
        id:'questionThree'
    }
]

function FAQ() {

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
        <>
        <h1 className='FAQTitle text-3xl font-bold pt-5 text-center '>Frequently Asked Questions</h1>
            <div className='FAQwrapper h-80 grid grid-cols-2 mb-5'>
                <div>
                    <img src={QuestionMark} alt='Question mark' className='questionMark'/>
                </div>
                <div className='accordion w-2/3'>
                    {FAQquestions.map((item, i) =>
                        <div className='item'>
                            <div className='questionTitle' onClick={() => openFAQ(i)}>
                                <h2>{item.question}</h2>
                                <span>{selectedFAQ === i ? <FontAwesomeIcon icon={faChevronUp} style={{ color: "#000000", }} /> : <FontAwesomeIcon icon={faChevronDown} style={{ color: "#000000", }} />}</span>
                            </div>
                            <div className={selectedFAQ === i ? 'questionAnswer show' : 'questionAnswer'}>
                                <h3 className='FAQanswer' id={item.id}>{item.answer}</h3>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default FAQ