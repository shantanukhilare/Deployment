import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const DoctorSlots = () => {
    const { doctorId } = useParams();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const startDate = query.get('startDate');
    const endDate = query.get('endDate');

    const [slots, setSlots] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSlots = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/appointments/doctor/${doctorId}/available-slots`, {
                    params: {
                        date: startDate,
                        startTime: '00:00', // Fetching slots for the entire day
                        endTime: '23:59'
                    }
                });
                setSlots(response.data);
            } catch (error) {
                setError('Error fetching available slots');
                console.error('Error fetching slots:', error);
            }
        };

        if (doctorId && startDate && endDate) {
            fetchSlots();
        }
    }, [doctorId, startDate, endDate]);

    return (
        <div className="bg-beige h-screen">
            <h2 className="text-center text-2xl font-semibold mb-8">Available Slots</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {slots.length === 0 ? (
                <p className="text-center">No available slots</p>
            ) : (
                <ul className="list-disc pl-5">
                    {slots.map((slot, index) => (
                        <li key={index} className="mb-2">{slot}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DoctorSlots;
