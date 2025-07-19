import axios from 'axios';

const API = axios.create({
  // baseURL: process.env.BASE_URL || 'http://localhost:5000/api',
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:5000/api',
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
