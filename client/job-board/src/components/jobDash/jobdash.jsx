import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
const JobDash = () => {

    const colors = [
        { textColor: 'text-red-500', bgColor: 'bg-red-200' },
        { textColor: 'text-blue-500', bgColor: 'bg-blue-200' },
        { textColor: 'text-green-500', bgColor: 'bg-green-200' },
        // Add more colors if needed
    ];

    const data = [
        'iOS Developer',
        'Software Engineer',
        'Frontend Developer',
        'Backend Developer',

    ];

    return (
        <div>
            <div className="w-full h-screen justify-between scale-95 gap-3 p-2 flex row-span-3">
                {/* left side bar  */}
                <div className="bg-[#161a1d] flex w-[20%] rounded-md">
                    <div className='scale-95 p-4 flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl'>Filter</h1>

                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <h1>Location</h1>
                            <input
                                className='p-2 rounded-md h-[40px] border-2 border-gray-500 bg-transparent w-[100%]'
                            />
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <h1>Job Type</h1>
                            <div className='flex gap-2 flex-col grid-cols-3'>
                                <div className='flex gap-2'>

                                    <input
                                        type='checkbox'

                                    />
                                    <span>Full-Time</span>
                                </div>
                                <div className='flex gap-2'>

                                    <input
                                        type='checkbox'
                                        className='bg-red-500'

                                    />
                                    <span>Part-Time</span>
                                </div>
                                <div className='flex gap-2'>

                                    <input
                                        type='checkbox'

                                    />
                                    <span>Remote</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* middle section  */}
                <div className="flex flex-col w-[60%] h-full  ">
                    <div className=" w-full h-full overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                        <div className="w-full h-[250px] flex flex-col justify-center items-center rounded-md bg-[#f77f00] ">
                            <div className="flex flex-col p-4">
                                <h1 className="text-xl">Are you looking for a dream job ?</h1>
                                <span className="text-md">Rsl Solutions is a place where you can fnd your dream job in a various skills more than, 10000 jobs are availbale here.</span>
                            </div>
                            <div className="w-[90%] h-full flex items-center justify-center">
                                <input
                                    placeholder="Search"
                                    className="m-4 w-[100%] h-[40px] rounded-md text-black border-none p-4"
                                />
                                <button className="border-none">Search</button>
                            </div>
                        </div>

                        {/* job desc section */}
                        <div className="w-full h-[380px] bg-[#161a1d] mt-2 rounded-md">
                            <div className='flex flex-col justify-evenly w-full'>
                                <div className='scale-95 p-4 flex flex-col gap-4'>
                                    <div className='flex w-full h-full justify-between '>
                                        <div className='flex flex-col' >
                                            <h1 className='text-2xl'>Building an end to end application</h1>
                                            <div className='flex gap-2 text-sm text-gray-400'>
                                                <span>Remote-work</span>
                                                <span>|</span>
                                                <span>$3000-$4000</span>
                                                <span>|</span>
                                                <span>14 applicants</span>
                                            </div>
                                        </div>
                                        <div>
                                            logo
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim obcaecati quibusdam cupiditate sunt veritatis exercitationem maxime vitae, quaerat delectus aliquid, laborum ipsa sint explicabo alias! Quos explicabo temporibus omnis facere ipsa sint, ullam, porro numquam iste cum aliquam! Necessitatibus, dolores. Facere qui beatae modi aliquam deserunt, explicabo eius iure dolore.</p>
                                    </div>
                                    <div className='flex gap-4 w-full overflow-auto' style={{ scrollbarWidth: 'none' }}>
                                        {data.map((item, index) => (
                                            <span
                                                key={index}
                                                className={`p-2  text-sm rounded-lg ${colors[index % colors.length].bgColor} ${colors[index % colors.length].textColor}`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-full flex-col h-full flex gap-4 scale-95 p-4'>
                                    <button className='bg-[#f77f00] p-2 w-[100px] gap-2 justify-center items-center flex rounded-md'>Apply <FaExternalLinkAlt size={13} /></button>
                                    <span className='text-gray-400'>Postend on date 14/12/2022 </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[380px] bg-[#161a1d] mt-2 rounded-md">
                            dgfyhgfdhfgh
                        </div>
                    </div>

                </div>


                {/* right side bar */}
                <div className="bg-[#161a1d]  flex w-[20%] rounded-md"></div>
            </div>
        </div>
    )
}

export default JobDash