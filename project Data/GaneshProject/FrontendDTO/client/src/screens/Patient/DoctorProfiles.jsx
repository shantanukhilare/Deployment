import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../Images/DoctorProfile.jpeg';
import { FetchAllDoctors } from '../../services/DoctorService';

const DoctorProfiles = () => {
    const [doctors, setDoctors] = useState([]);
    const [startDate, setStartDate] = useState('2024-08-01'); // Example start date
    const [endDate, setEndDate] = useState('2024-08-31'); // Example end date

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const data = await FetchAllDoctors();
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className="bg-beige h-screen">
            <h2 className="text-center text-2xl font-semibold mb-8">Book an Appointment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {doctors.map(doctor => (
                    <div key={doctor.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src={image} alt={`${doctor.firstName} ${doctor.lastName}`} />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">
                                {doctor.firstName} {doctor.lastName}
                            </h3>
                            <p className="text-gray-600">{doctor.specialization}</p>
                            <p className="text-gray-600">Consultation Fees: ${doctor.consultationFees}</p>
                            <Link
                                to={`/doctor/${doctor.id}/slots`}
                                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorProfiles;
