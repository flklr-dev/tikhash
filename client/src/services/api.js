import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const generateHashtags = async (keyword) => {
  try {
    const response = await api.post('/api/hashtags/generate', { keyword });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Server error');
    } else if (error.request) {
      throw new Error('Network error - please check your connection');
    } else {
      throw new Error('Error generating hashtags');
    }
  }
};

export const getTrendingHashtags = async () => {
  try {
    const response = await api.get('/api/hashtags/trending');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching trending hashtags');
  }
}; 