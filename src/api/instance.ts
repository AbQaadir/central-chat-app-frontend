import axios from "axios";

export const getChatInstance = () => {
  // Check if window.config is available, with fallback
  const config = (window as any).config;
  const baseURL = config?.choreoApiUrl || 'http://localhost:8080';
  
  console.log('API Base URL:', baseURL); // For debugging
  
  return axios.create({ 
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 30000 // 30 seconds timeout
  });
};