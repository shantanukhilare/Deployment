import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DateSelection = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to the DoctorProfiles page with the selected date as a query parameter
        navigate(`/doctors?date=${selectedDate}`);
    };

    return (
        <div className="bg-beige h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-center text-2xl font-semibold mb-4">Select Date</h2>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700">Select a Date</label>
                    <input
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DateSelection;
