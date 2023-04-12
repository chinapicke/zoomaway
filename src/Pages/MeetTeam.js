import React from 'react'
import HeroBanner from '../components/HeroBanner'
import '../assets/styles/Meetteam.css'

const teamMembers = [
    {
        id: 1,
        name: 'Bonnie Green',
        position: 'CEO',
        img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    },
    {
        id: 2,
        name: 'Luke Shaw',
        position: 'Head of Marketing',
        img: 'https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
        id: 3,
        name: 'Sophie Hill',
        position: 'Head of Customer Service',
        img: 'https://media.istockphoto.com/id/1089633230/photo/glasses-girl-in-white.jpg?b=1&s=170667a&w=0&k=20&c=EbtEKHYtXoT3sF-XBlmRx9YhmWfG8wB4b4M_QD-Mv5A=',
    },
    {
        id: 4,
        name: 'John Short',
        position: 'Head of Careers',
        img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },

]


function MeetTeam() {
    return (
        <>
        <HeroBanner />
        <div className='teamProfiles'>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="meetPgTitle mb-4 text-5xl font-bold ">Our Team</h2>
                    </div>
                    <div class="grid gap-8 mb-6 md:mb-4 md:grid-cols-2">
                        {teamMembers.map((profile) =>
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex  dark:border-gray-700">
                                <img className="w-full rounded-lg md:rounded-none md:rounded-l-lg profileImg" src={profile.img} alt={profile.name} />
                                <div className="p-5">
                                    <h3 className="personName font-semibold">
                                        {profile.name}
                                    </h3>
                                    <span className='font-normal'>{profile.position}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default MeetTeam