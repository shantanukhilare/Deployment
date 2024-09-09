import axios from 'axios';

// Base URL of your API
const BASE_URL = 'http://localhost:8080/api/addresses';

// Add an address
export const addAddress = async (addressDTO) => {
    try {
        const response = await axios.post(BASE_URL, addressDTO);
        return response.data;
    } catch (error) {
        console.error("Error adding address", error);
        throw error;
    }
};

// Get all addresses
export const getAllAddresses = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching addresses", error);
        throw error;
    }
};

// Get an address by ID
export const getAddressById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching address with ID ${id}`, error);
        throw error;
    }
};
