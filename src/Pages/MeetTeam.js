import React from 'react'
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
        img: 'https://thumbs.dreamstime.com/b/suave-bearded-male-portrait-suave-bearded-male-portrait-100259877.jpg',
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
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000',
    },

]


function MeetTeam() {
    return (
        <div className='teamProfiles'>
            <section class="bg-white">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-4">Our Team</h2>
                    </div>
                    <div class="grid gap-8 mb-6 md:mb-4 md:grid-cols-2">
                        {teamMembers.map((profile) =>
                            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex  dark:border-gray-700">
                                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg profileImg" src={profile.img} alt={profile.name} />
                                <div class="p-5">
                                    <h3 class="text-xl font-bold">
                                        {profile.name}
                                    </h3>
                                    <span class>{profile.position}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MeetTeam