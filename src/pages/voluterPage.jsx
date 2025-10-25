import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxQsyRxKQlFCv9D9iatoFurRJigl6KaMDfJ362Jt-HAE94of1nNVaw1QzFHBCjAbBWi/exec';

const formatLastUpdated = (timestamp) => {
    if (typeof timestamp !== 'number' || isNaN(timestamp)) {
        return "Could not retrieve date";
    }
    try {
        const date = new Date(timestamp);
        return new Intl.DateTimeFormat('en-IN', {
            dateStyle: 'long',
            timeStyle: 'short',
            timeZone: 'Asia/Kolkata'
        }).format(date);
    } catch (e) {
        console.error("Error formatting date from timestamp:", e);
        return "Error formatting date";
    }
};

const LoadingSpinner = () => (
    <div className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
);

const IdCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-4V3a1 1 0 00-1-1zm0 4a3 3 0 100 6 3 3 0 000-6zM8 9a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM5 14a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const VolunteerHours = () => {
    const navigate = useNavigate();
    const [roll, setRoll] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResult(null);
        setLoading(true);

        if (!roll.trim()) {
            setError('Please enter your Roll Number.');
            setLoading(false);
            return;
        }

        try {
            const url = `${SCRIPT_URL}?roll=${encodeURIComponent(roll.trim())}`;
            const response = await fetch(url);

            if (!response.ok) {
                let errorText = `Network response was not ok (${response.status} ${response.statusText}).`;
                let errorData = { lastUpdated: null }; // Default null on error
                try {
                    errorData = await response.json();
                    if (errorData.error) errorText = errorData.error;
                } catch (jsonError) { }
                setResult({ name: null, hours: null, lastUpdated: errorData.lastUpdated ?? null });
                throw new Error(errorText + ' Check Apps Script URL/deployment.');
            }

            const data = await response.json();

            if (data.error) {
                setError(data.error);
                setResult({ name: null, hours: null, lastUpdated: data.lastUpdated ?? null });
            }
            else if (data.name !== undefined && data.hours !== undefined) {
                setResult({ ...data, lastUpdated: data.lastUpdated ?? null });
            }
            else {
                setError("Received unexpected data structure from the script.");
                setResult({ name: null, hours: null, lastUpdated: data.lastUpdated ?? null });
                console.warn("Unexpected data structure:", data);
            }

        } catch (err) {
            console.error('Fetch Error:', err);
            if (err.message.includes("Failed to fetch")) {
                setError('Network error. Please check your internet connection.');
            } else {
                if (!error) setError(err.message || 'Failed to fetch hours. Please try again later.');
            }
            if (!result) setResult({ name: null, hours: null, lastUpdated: null });

        } finally {
            setLoading(false);
        }
    };

    const displayLastUpdatedTimestamp = result?.lastUpdated ?? null;

    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            <div className="bg-white pb-6 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title text-center !mb-0">Check Your Volunteer Hours</h2>
                </div>
            </div>

            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                    <p className="text-gray-600 mb-6 text-center">
                        Enter your official IIT Guwahati Roll Number to view your total recorded NSS Work hours.
                    </p>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-6">
                            <label htmlFor="roll" className="block text-sm font-medium text-gray-700 mb-1">
                                Roll Number
                            </label>
                            <input
                                type="text"
                                id="roll"
                                value={roll}
                                onChange={(e) => setRoll(e.target.value)}
                                placeholder="e.g., 210101001"
                                required
                                disabled={loading}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors duration-200 flex items-center justify-center ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                                }`}
                        >
                            {loading ? (<><LoadingSpinner /> Checking...</>) : ('Get My Hours')}
                        </button>
                    </form>

                    {result && result.name && !error && (
                        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md text-center animate-fadeIn">
                            <p className="font-semibold text-green-800">Hi, {result.name}!</p>
                            <p className="text-lg text-green-700">
                                Your total recorded NSS Work hours are: <strong className="text-2xl">{result.hours}</strong>
                            </p>
                            <br />

                            <p className="text-center text-sm text-gray-500 mb-6">
                                <ClockIcon /> Data last updated: {formatLastUpdated(displayLastUpdatedTimestamp)}
                            </p>
                        </div>
                    )}

                    {/* Error Display */}
                    {error && (
                        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-md text-center animate-fadeIn">
                            <p className="font-semibold text-red-700">Error</p>
                            <p className="text-red-600">{error}</p>
                            {/* Last updated already shown above form */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VolunteerHours;

