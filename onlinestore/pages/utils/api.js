import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com'; // Replace with your API URL

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
    
  } catch (error) {
    throw new Error('Error fetching products.');
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product details.');
  }
};
