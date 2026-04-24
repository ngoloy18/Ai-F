import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const businessAPI = {
  validateIdea: (data) => api.post('/validation/idea', data),
  createPlan: (data) => api.post('/planning/create', data),
  marketResearch: (data) => api.post('/research/market', data),
  financialProjections: (data) => api.post('/financial/projections', data),
};

export default api;
