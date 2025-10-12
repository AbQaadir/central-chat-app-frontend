import axios from "axios";

export const getChatInstance = () => {
  return axios.create({ 
    baseURL: window.config.choreoApiUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};