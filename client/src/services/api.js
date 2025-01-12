import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const generateHashtags = async (keyword) => {
  try {
    const response = await axios.post(`${API_URL}/hashtags/generate`, { keyword });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getTrendingHashtags = async () => {
  try {
    const response = await axios.get(`${API_URL}/hashtags/trending`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}; 