import conf from '../conf/conf';
import axios from "axios";

const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${conf.backend_url}/login`, credentials);
      const { token } = response.data;
      localStorage.setItem("token", token); // Store token in local storage
      return token;
    } catch (error) {
      throw error.response.data; // Throw error response from the backend
    }
  },

  logout: () => {
    localStorage.removeItem("token"); // Remove token from local storage
  },

  isAuthenticated: () => {
    const token = localStorage.getItem("token");
    return token ? true : false;
  },

  getToken: () => {
    return localStorage.getItem("token");
  },
};

export default authService;
