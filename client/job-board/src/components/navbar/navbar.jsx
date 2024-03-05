import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between w-full p-4  ">
                <h1 className="text-xl lg:text-sm font-bold flex">Job Board</h1>
                <div className="text-xl flex justify-center w-[50%] lg:text-sm font-bold">
                    <ul className="flex justify-around w-full">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Login</li>
                    </ul>
                </div>
                <h1 className="text-xl lg:text-sm font-bold">Register</h1>
            </div>
        </div>
    )
}

export default Navbar