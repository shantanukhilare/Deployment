import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PatientProfile = () => {
  const [patientData, setPatientData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const email = sessionStorage.getItem("userEmail");
  const role = sessionStorage.getItem("userRole");

  useEffect(() => {
    if (role === "ROLE_PATIENT" && email) {
      // Fetch patient details by email
      axios
        .get(`http://localhost:8080/patients/email?email=${email}`)
        .then((response) => {
          setPatientData(response.data);
          setFormData(response.data); // Initialize form data with fetched patient data
        })
        .catch((error) => console.error("Error fetching patient data:", error));
    } else {
      navigate("/login");
    }
  }, [email, role, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    // Save updated patient data
    axios
      .put(`http://localhost:8080/patients/${formData.id}`, formData)
      .then(() => {
        setPatientData(formData);
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating patient data:", error));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Patient Profile</h2>
        <div className="space-y-4">
          {!isEditing ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 font-medium">
                    First Name
                  </label>
                  <p className="mt-1">{patientData.firstName}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Last Name</label>
                  <p className="mt-1">{patientData.lastName}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Email</label>
                  <p className="mt-1">{patientData.email}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Phone Number
                  </label>
                  <p className="mt-1">{patientData.phoneNo}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Gender</label>
                  <p className="mt-1">{patientData.gender}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Birth Date
                  </label>
                  <p className="mt-1">{patientData.birthDate}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Age</label>
                  <p className="mt-1">{patientData.age}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Area</label>
                  <p className="mt-1">{patientData.area}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">City</label>
                  <p className="mt-1">{patientData.city}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">State</label>
                  <p className="mt-1">{patientData.state}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Country</label>
                  <p className="mt-1">{patientData.country}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">ZIP Code</label>
                  <p className="mt-1">{patientData.zipCode}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Allergy</label>
                  <p className="mt-1">{patientData.allergy ? "Yes" : "No"}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Blood Pressure
                  </label>
                  <p className="mt-1">
                    {patientData.bloodPressure ? "Yes" : "No"}
                  </p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Diabetes</label>
                  <p className="mt-1">{patientData.diabetes ? "Yes" : "No"}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Height (cm)
                  </label>
                  <p className="mt-1">{patientData.height}</p>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Weight (kg)
                  </label>
                  <p className="mt-1">{patientData.weight}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-600 font-medium">
                    Medical History
                  </label>
                  <p className="mt-1">{patientData.medicalHistory}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-600 font-medium">
                    Description
                  </label>
                  <p className="mt-1">{patientData.description}</p>
                </div>
              </div>
              <div className="text-center mt-8">
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
                  <label className="text-gray-600 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Area</label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Allergy</label>
                  <input
                    type="checkbox"
                    name="allergy"
                    checked={formData.allergy || false}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Blood Pressure
                  </label>
                  <input
                    type="checkbox"
                    name="bloodPressure"
                    checked={formData.bloodPressure || false}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">Diabetes</label>
                  <input
                    type="checkbox"
                    name="diabetes"
                    checked={formData.diabetes || false}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-medium">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-600 font-medium">
                    Medical History
                  </label>
                  <textarea
                    name="medicalHistory"
                    value={formData.medicalHistory || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-600 font-medium">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description || ""}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
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

export default PatientProfile;
