import axios from "axios";
import { toast } from "react-toastify";

const CATEGORY_URL = 'http://localhost:8080/api/categories'; // Adjust the URL as needed

export const getCategories = async () => {
    try {
        const response = await axios.get(CATEGORY_URL);
        return response.data;
    } catch (error) {
        console.error('Error getting categories:', error);
        throw error;
    }
}

export const getCategoryById=async (id)=>{
    try{
        const response=await axios.get(`${CATEGORY_URL}/${id}`);
        return response.data;
    }
    catch(error){
        console.log(error);
        toast.error('Something went wrong...');
        throw error;
    }
}

export const addCategories=async (category)=>{
    try{
        const response=await axios.post(CATEGORY_URL,category,{
            headers: {
                'Content-Type': 'application/json'
            }})
        
        return response.data;
    }
    catch(error) {
        console.log('Saving Categories failed...',error);
        throw error;
    }
};

export const editCategories=async (id,category)=>{
    try{
        const response=await axios.put(`${CATEGORY_URL}/${id}`,category,{
            headers:{"Content-Type":'application/json'}
        })
        return response.data;
    }
    catch(error){
        console.log('Updation failed...',error);
        throw error;
    }
}
