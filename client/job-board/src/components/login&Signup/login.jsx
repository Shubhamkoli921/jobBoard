import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateToken } from '../../components/redux/action'; // Adjust the path accordingly
import imgs from '../asstes/19466810_6134223.svg'
import img2 from '../asstes/806210_preview-removebg-preview.png'
import './login.css';

const Login = ({ updateToken }) => {
    // const [loginType, setLoginType] = useState('user');
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/auth/login", {
                username,
                password,
                // loginType
            });

            const { data } = response;
            updateToken(data); // Dispatch Redux action to update token
            localStorage.setItem('token', data.token); // Store token in localStorage
            console.log(data);
            navigate('/jobs');
        } catch (err) {
            setError(err.message || 'An error occurred during login.');
        }
    };

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={darkMode ? '' : 'dark'}>
            <div className={`h-screen w-screen justify-center items-center flex ${darkMode ? 'bg-[#212529]' : 'bg-gray-100'}`}>
                <div className={`${darkMode ? 'bg-[#c77dff]' : 'bg-[#faa307]'} shadow-300 w-[30%] lg:left-14 left-0 ml-0  lg:ml-44 h-full absolute sm:block hidden`}></div>
                <div className={`${darkMode ? 'bg-[#343a40]' : 'bg-white'} flex relative justify-center items-center w-[90%] h-[80%] shadow-2xl`}>
                    <div className='h-[80%] w-[90%] justify-center items-center flex flex-row lg:flex-col  '>
                        <div className={`${darkMode ? 'bg-[#212529]' : 'bg-white'} flex rounded-2xl relative p-5 w-[90%] h-[80%] shadow-2xl`}>
                            <div className='grid w-full h-full lg:grid-cols-2 grid-rows-1'>
                                <div className='flex w-full h-full '>
                                    <div className=' md:hidden lg:hidden'>

                                        <div className='flex justify-around w-full'>
                                            <h1 className={`${darkMode ? 'text-white' : 'text-black'} w-full flex`}>Welcome Back</h1>
                                            <div className='flex w-full justify-end items-start'>
                                                <img alt='' src={img2} className='w-[40%]' />
                                            </div>
                                        </div>
                                        <span className={`${darkMode ? 'text-white' : 'text-black'}` }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, dolores.</span>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='p-4 flex flex-col gap-2'>
                                        <div className='flex justify-between w-full'>
                                            <h1 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Log In</h1>
                                            <label className="switch">
                                                <input onClick={toggleTheme} type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                        </div>
                                        <input
                                            type='text'
                                            placeholder="Username"
                                            className={` ${darkMode ? 'text-white' : 'text-black'} border-transparent border-2  rounded-lg transition-shadow p-2 hover:border-2 hover:border-${darkMode ? 'blue-500' : '[#faa307]'} hover:shadow-xl ${darkMode ? 'bg-[#202c39]' : 'bg-white'}`}
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder='Password'
                                            className={`${darkMode ? 'bg-[#202c39]' : 'bg-white'} ${darkMode ? 'text-white' : 'text-black'} border-transparent border-2 rounded-lg transition-shadow p-2 hover:border-2 hover:border-${darkMode ? 'blue-500' : '[#faa307]'} hover:shadow-xl`}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className='p-4 flex flex-col gap-2'>
                                        <div className='flex items-center gap-2 justify-between'>
                                            <div className='flex items-center gap-2 h-full'>
                                                <label htmlFor="checkbox" className={`${darkMode ? 'text-white' : 'text-black'} text-[10px] lg:text-[15px]`}>Remember me</label>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='flex items-center gap-2 h-full'>
                                                <span className={`${darkMode ? 'text-white' : 'text-gray-400'}  text-[12px] lg:text-[15px]`}>Forget password ?</span>
                                            </div>
                                        </div>
                                        <button className={`p-2 justify-center flex w-full uppercase ${darkMode ? 'text-white' : 'text-white'} ${darkMode ? 'bg-[#c77dff]' : 'bg-[#faa307]'}`} onClick={handleLogin}>Login </button>
                                        {error && <div className={`${darkMode ? 'text-black' : 'text-white'}`}>Error: {error}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${darkMode ? 'bg-[#c77dff]' : 'bg-[#faa307]'} w-[33%] shadow-2xl lg:flex h-[90%] left-14 ml-28 absolute sm:block hidden  `}>
                            <div className='sm:block hidden'>
                                <div className='p-4 flex flex-col -mt-2'>
                                    <div className='justify-end flex p-4 -mt-2'>
                                        <img alt='' src={img2} className='w-[20%]' />
                                    </div>
                                    <div className=''>
                                        <h1 className={`text-${darkMode ? 'white' : 'white'} font-bold text-3xl`}>Welcome Back</h1>
                                        <span className={`text-${darkMode ? 'white' : 'white'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, amet.</span>
                                    </div>
                                    <div className='justify-center flex'>
                                        <img className='w-[60%]' alt='' src={imgs} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const mapDispatchToProps = {
    updateToken,
};

export default connect(null, mapDispatchToProps)(Login);
