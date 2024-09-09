// src/services/apiService.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Base URL for your API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle registration
export const registerPatient = (patientData) => {
  return api.post('/patients', patientData);
};

// // Function to handle login
// export const loginUser = (loginData) => {
//   return api.post('/login', loginData);
// };

// Other API functions can go here...

export default api;
