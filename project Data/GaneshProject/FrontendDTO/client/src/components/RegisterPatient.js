import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const PatientRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
    gender: "",
    birthDate: "",
    age: "",
    area: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    allergy: false,
    bloodPressure: false,
    description: "",
    diabetes: false,
    height: "",
    history: "",
    weight: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/patients", formData);
      navigate("/login"); // Redirect after successful registration
    } catch (err) {
      setError("Registration failed. Please check the server logs.");
      console.error("Registration error:", err);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Patient Registration
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                maxLength="50"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                maxLength="50"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                maxLength="50"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                minLength="6"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                maxLength="20"
              />
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Birth Date</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                min="0"
              />
            </div>
            <div>
              <label className="block text-gray-700">Area</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                maxLength="100"
              />
            </div>
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                maxLength="100"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                maxLength="100"
              />
            </div>
            <div>
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                maxLength="100"
              />
            </div>
            <div>
              <label className="block text-gray-700">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                maxLength="20"
              />
            </div>
            <div className="flex items-center gap-4">
              <div>
                <label className="block text-gray-700">Allergy</label>
                <input
                  type="checkbox"
                  name="allergy"
                  checked={formData.allergy}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Blood Pressure</label>
                <input
                  type="checkbox"
                  name="bloodPressure"
                  checked={formData.bloodPressure}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Diabetes</label>
                <input
                  type="checkbox"
                  name="diabetes"
                  checked={formData.diabetes}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                min="0"
              />
            </div>
            <div>
              <label className="block text-gray-700">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                min="0"
              />
            </div>
            <div>
              <label className="block text-gray-700">Medical History</label>
              <textarea
                name="history"
                value={formData.history}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                rows="4"
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                rows="4"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default PatientRegistrationForm;
