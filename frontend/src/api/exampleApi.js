import axios from 'axios';

// Define the backend API base URL
const API_URL = 'https://localhost:5001/api/Example'; // Adjust the endpoint if needed

// Function to get all examples
export const getExamples = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching examples:', error);
        throw error;
    }
};

// Function to create a new example
export const createExample = async (example) => {
    try {
        const response = await axios.post(API_URL, example);
        return response.data;
    } catch (error) {
        console.error('Error creating example:', error);
        throw error;
    }
};
