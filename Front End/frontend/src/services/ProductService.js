import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/products';
const CATEGORY_URL = 'http://localhost:8080/api/categories';

export const addProduct = async (product) => {
    try {
        const response = await axios.post(BASE_URL, product);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting product by ID:', error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error getting all products:', error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await axios.get(CATEGORY_URL);
        return response.data;
    } catch (error) {
        console.error('Error getting categories:', error);
        throw error;
    }
};
