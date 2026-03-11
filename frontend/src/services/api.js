import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const getProjects = () => api.get('/projects');
export const getSkills = () => api.get('/skills');
export const submitContact = (data) => api.post('/contact', data);

export default api;
