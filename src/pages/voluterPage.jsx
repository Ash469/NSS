import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Replace with your actual deployed Apps Script URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxQsyRxKQlFCv9D9iatoFurRJigl6KaMDfJ362Jt-HAE94of1nNVaw1QzFHBCjAbBWi/exec'; 

const VolunteerHours = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [roll, setRoll] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null); // { name: '...', hours: ... }
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResult(null);
        setLoading(true);

        // Basic validation
        if (!email || !roll) {
            setError('Please enter both Email and Roll Number.');
            setLoading(false);
            return;
        }

        try {
            // Construct the URL with query parameters
            const url = `${SCRIPT_URL}?email=${encodeURIComponent(email)}&roll=${encodeURIComponent(roll)}`;
            
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok. Check the Apps Script URL and deployment settings.');
            }

            const data = await response.json();

            if (data.error) {
                setError(data.error); // Show error from Apps Script (e.g., "Student not found")
            } else {
                setResult(data); // { name: '...', hours: ... }
            }

        } catch (err) {
            console.error('Fetch Error:', err);
            setError('Failed to fetch hours. Please check your connection or try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            {/* Header */}
            <div className="bg-white pb-6 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title text-center">Check Your Volunteer Hours</h2>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                    <p className="text-gray-600 mb-6 text-center">
                        Enter your official IIT Guwahati Email and Roll Number to view your total NSS hours.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="b.xyz@iitg.ac.in"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="roll" className="block text-sm font-medium text-gray-700 mb-1">
                                Roll Number
                            </label>
                            <input
                                type="text"
                                id="roll"
                                value={roll}
                                onChange={(e) => setRoll(e.target.value)}
                                placeholder="2XXXXXXX"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors duration-200 flex items-center justify-center ${
                                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                            }`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Checking...
                                </>
                            ) : (
                                'Get My Hours'
                            )}
                        </button>
                    </form>

                    {/* --- Result Display --- */}
                    {result && !error && (
                        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md text-center">
                            <p className="font-semibold text-green-800">Hi, {result.name}!</p>
                            <p className="text-lg text-green-700">
                                Your total recorded NSS hours are: <strong className="text-2xl">{result.hours}</strong>
                            </p>
                        </div>
                    )}

                    {/* --- Error Display --- */}
                    {error && (
                         <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-md text-center">
                            <p className="font-semibold text-red-700">Error</p>
                            <p className="text-red-600">{error}</p>
                         </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VolunteerHours;
