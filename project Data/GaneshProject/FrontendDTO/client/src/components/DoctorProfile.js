import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorProfile = () => {
  const [doctorData, setDoctorData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const email = sessionStorage.getItem("userEmail");
  const role = sessionStorage.getItem("userRole");

  useEffect(() => {
    if (role === "ROLE_DOCTOR" && email) {
      axios
        .get(`http://localhost:8080/doctors/email?email=${email}`)
        .then((response) => {
          setDoctorData(response.data);
          setFormData(response.data);
        })
        .catch((error) => console.error("Error fetching doctor data:", error));
    } else {
      navigate("/login");
    }
  }, [email, role, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:8080/doctors/${formData.id}`, formData)
      .then(() => {
        setDoctorData(formData);
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating doctor data:", error));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Doctor Profile
        </h2>
        <div className="space-y-4">
          {!isEditing ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-700 font-medium">
                    First Name
                  </label>
                  <p className="mt-1 text-gray-600">{doctorData.firstName}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Last Name</label>
                  <p className="mt-1 text-gray-600">{doctorData.lastName}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Email</label>
                  <p className="mt-1 text-gray-600">{doctorData.email}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Phone Number
                  </label>
                  <p className="mt-1 text-gray-600">{doctorData.phoneNo}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Gender</label>
                  <p className="mt-1 text-gray-600">{doctorData.gender}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Birth Date
                  </label>
                  <p className="mt-1 text-gray-600">{doctorData.birthDate}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Age</label>
                  <p className="mt-1 text-gray-600">{doctorData.age}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Area</label>
                  <p className="mt-1 text-gray-600">{doctorData.area}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">City</label>
                  <p className="mt-1 text-gray-600">{doctorData.city}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">State</label>
                  <p className="mt-1 text-gray-600">{doctorData.state}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Country</label>
                  <p className="mt-1 text-gray-600">{doctorData.country}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">ZIP Code</label>
                  <p className="mt-1 text-gray-600">{doctorData.zipCode}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Consultation Fees
                  </label>
                  <p className="mt-1 text-gray-600">
                    ${doctorData.consultationFees}
                  </p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Specialization
                  </label>
                  <p className="mt-1 text-gray-600">
                    {doctorData.specialization}
                  </p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Qualification
                  </label>
                  <p className="mt-1 text-gray-600">
                    {doctorData.qualification}
                  </p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Start Time
                  </label>
                  <p className="mt-1 text-gray-600">{doctorData.startTime}</p>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">End Time</label>
                  <p className="mt-1 text-gray-600">{doctorData.endTime}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-700 font-medium">
                    Description
                  </label>
                  <p className="mt-1 text-gray-600">{doctorData.description}</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-700 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Area</label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Consultation Fees
                  </label>
                  <input
                    type="number"
                    name="consultationFees"
                    value={formData.consultationFees || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Specialization
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Qualification
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">
                    Start Time
                  </label>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium">End Time</label>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-700 font-medium">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description || ""}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="text-center mt-8">
                <button
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-4"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
