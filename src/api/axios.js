import axios from 'axios';

// Usa la variable de entorno
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Accede a la variable de entorno
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

export default instance;
