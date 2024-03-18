// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbSettingsStar } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';


const JobDash = () => {
    const navigate = useNavigate();
    const [job, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [filters, setFilters] = useState({ jobType: [], experienceLevel: [] });

    useEffect(() => {
        // Fetch jobs from API and update both jobs and filteredJobs
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/job', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            setJobs(data.jobs);
            setFilteredJobs(data.jobs); // Initially set filteredJobs to all jobs
        };
        fetchData();
    }, []);

    useEffect(() => {
        // Filter jobs whenever filters change
        const filterJobs = () => {
            let filtered = job;
            if (filters.jobType.length > 0) {
                filtered = filtered.filter(job => filters.jobType.includes(job.jobType));
            }
            if (filters.experienceLevel.length > 0) {
                filtered = filtered.filter(job => filters.experienceLevel.includes(job.experienceLevel));
            }
            setFilteredJobs(filtered);
        };
        filterJobs();
    }, [job, filters]);

    const colors = [
        { textColor: 'text-red-500', bgColor: 'bg-red-200 bg-opacity-10' },
        { textColor: 'text-blue-500', bgColor: 'bg-blue-200 bg-opacity-10 ' },
        { textColor: 'text-green-500', bgColor: 'bg-green-200 bg-opacity-10' },
    ];

    const handleApply = (jobId) => {
        navigate(`/apply/${jobId}`);
    };

    const handleFilterChange = (type, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [type]: prevFilters[type].includes(value)
                ? prevFilters[type].filter(item => item !== value)
                : [...prevFilters[type], value]
        }));
    };




    return (
        <div>
            <div className="w-full h-screen justify-between scale-95 gap-3 p-2 flex row-span-3">

                <div className="flex flex-col gap-2 w-[20%] ">
                    <div className='bg-[#161a1d] rounded-md p-4 flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl'>Filter</h1>
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <h1 className='text-xl'>Location</h1>
                            <input
                                className='p-2 rounded-md h-[40px] border-2 border-gray-500 bg-transparent w-[100%]'
                            />
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <h1 className='text-xl'>Job Type</h1>
                            <div className='flex gap-2 flex-col grid-cols-3'>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type='checkbox'
                                        id='fullTime'
                                        className='h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-300 rounded cursor-pointer'
                                        onChange={() => handleFilterChange('jobType', 'fullTime')}
                                    />
                                    <label htmlFor='fullTime'>Full-Time</label>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type='checkbox'
                                        id='partTime'
                                        className='h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-300 rounded cursor-pointer'
                                        onChange={() => handleFilterChange('jobType', 'partTime')}
                                    />
                                    <label htmlFor='partTime'>Part-Time</label>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type='checkbox'
                                        id='remote'
                                        className='h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-300 rounded cursor-pointer'
                                        onChange={() => handleFilterChange('jobType', 'remote')}
                                    />
                                    <label htmlFor='remote'>Remote</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <h1 className='text-xl'>Experience Level</h1>
                            <div className='flex gap-2 flex-col grid-cols-3'>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type='checkbox'
                                        id='Entry'
                                        className='h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-300 rounded cursor-pointer'
                                        onChange={() => handleFilterChange('experienceLevel', 'Entry')}
                                    />
                                    <label htmlFor='Entry'>Entry-level</label>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type='checkbox'
                                        id='Intermediate'
                                        className='h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-300 rounded cursor-pointer'
                                        onChange={() => handleFilterChange('experienceLevel', 'Intermediate')}
                                    />
                                    <label htmlFor='Intermediate'>Intermediate</label>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type='checkbox'
                                        id='Experience'
                                        className='h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-300 rounded cursor-pointer'
                                        onChange={() => handleFilterChange('experienceLevel', 'Experience')}
                                    />
                                    <label htmlFor='Experience'>Experience</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#161a1d] rounded-md p-4 flex w-full h-full'>
                        Logout
                    </div>
                </div>




                <div className="flex flex-col w-[60%] h-full   ">
                    <div className=" w-full h-full overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                        <div className="w-full h-[250px] flex flex-col justify-center items-center rounded-md bg-[#f77f00] ">
                            <div className="flex p-4">
                                <div className='w-[80%] flex flex-col justify-center gap-2'>
                                    <h1 className="text-xl">Are you looking for a dream job ?</h1>
                                    <span className="text-md">Rsl Solutions is a place where you can fnd your dream job in a various skills more than, 10000 jobs are availbale here.</span>
                                </div>
                                <div className='w-[20%] flex justify-end'>
                                    <TbSettingsStar size={80} className='opacity-30' />
                                </div>

                            </div>
                            <div className="w-[100%] p-4 gap-2 h-full flex items-center justify-center">
                                <input
                                    placeholder="Search"
                                    className=" w-[100%] h-[40px] rounded-md text-black border-none p-4"
                                />
                                <button className="border-2 border-white p-2 rounded-md">Search</button>
                            </div>
                        </div>
                        {job ? <div>
                            {job.map((item, index) => (
                                <div className="w-full h-[380px] bg-[#161a1d] mt-2 rounded-md" key={index}>
                                    <div className='flex flex-col justify-evenly w-full'>
                                        <div className='scale-95 p-4 flex flex-col gap-4'>
                                            <div className='flex w-full h-full justify-between '>
                                                <div className='flex flex-col'>
                                                    <h1 className='text-2xl'>{item.title}</h1>
                                                    <div className='flex gap-2 text-sm text-gray-400'>
                                                        <span className='uppercase'>{item.location}</span>
                                                        <span>|</span>
                                                        <span>Rs.{item.salary}</span>
                                                        <span>|</span>
                                                        <span>{item.jobType}</span>
                                                        <span>|</span>
                                                        <span>{item.experienceLevel}</span>
                                                    </div>
                                                </div>
                                                {/* Add logo */}
                                            </div>
                                            <div>
                                                <p className='text-gray-400'>{item.description}</p>
                                            </div>
                                            <div className='flex gap-4 w-full overflow-auto' style={{ scrollbarWidth: 'none' }}>
                                                {item.requirements && Array.isArray(item.requirements) && item.requirements.map((requirement, idx) => (
                                                    <span key={idx} className={`p-2 text-sm rounded-lg ${colors[idx % colors.length].bgColor} ${colors[idx % colors.length].textColor}`}>
                                                        {requirement}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='w-full flex-col h-full flex gap-4 scale-95 p-4'>
                                            <button className='bg-[#f77f00] p-2 w-[100px] gap-2 justify-center items-center flex rounded-md' onClick={() => handleApply(item._id)}>Apply <FaExternalLinkAlt size={13} /></button>

                                            <span className='text-gray-400'>Posted On {item.date} </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> : <div className="w-full h-full border-2 bg-[#161a1d] flex text-[#f77f00] font-semibold justify-center items-center mt-2 rounded-md"> Please Login To See The Job Post</div>}



                    </div>

                </div>


                {/* right side bar */}
                <div className=" h-full flex flex-col w-[20%] gap-2 ">
                    <div className=" bg-[#161a1d] w-full h-[450px] rounded-md">
                        <div className='scale-95 p-4 flex flex-col gap-4'>
                            <div className='w-full h-[80px] flex justify-center '>Photo</div>
                            <div className='w-full flex justify-center gap-1 flex-col'>
                                <h1 className='text-xl text-center'>Shubham</h1>
                                <span className='text-center text-sm text-gray-400'>Software Developer</span>
                            </div>
                            <div className='flex justify-center w-full h-full '>
                                <button className='p-3 rounded-md border-2 bg-transparent border-white'>Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-[#161a1d]   w-full h-full rounded-md" >
                        <div className='p-4 overflow-auto h-[260px]' style={{ scrollbarWidth: 'none' }}>

                            <h1 className='text-center text-xl'>Skills</h1>
                            <div className='p-4 grid w-full  grid-cols-2  gap-3' >
                                <span>React</span>
                                <span>Node</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                                <span>JavaScript</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Python</span>
                                <span>Java</span>
                                <span>C++</span>
                                <span>PHP</span>
                                <span>Ruby</span>
                                <span>Swift</span>
                                <span>Kotlin</span>
                                <span>Scala</span>
                                <span>Dart</span>
                                <span>Rust</span>
                                <span>Go</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default JobDash