import React, { useState } from 'react';

const PaymentForm = () => {
    const [name, setName] = useState('');
    const [money, setMoney] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const handlePayment = () => {
        // Logic to handle payment
        console.log(`Paying ${money} to ${name}`);
    };

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>  
                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="money">
                        Money
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                        id="money"
                        type="number"
                        placeholder="Enter amount"
                        value={money}
                        onChange={(e) => setMoney(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handlePayment}
                    >
                        Pay Money
                    </button>
                    <label className="switch">
                        <input type="checkbox" onClick={toggleDarkMode} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
