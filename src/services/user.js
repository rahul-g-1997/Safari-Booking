import axios from "axios";
import conf from "../conf/conf";
import { toast } from "react-toastify";

const API_URL = conf.backend_url; // API base URL

const authService = {
  // Get token from local storage
  getToken: () => {
    return localStorage.getItem("token");
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem("token");
    return token ? true : false; // Return true if token exists, else false
  },

  // Remove token from local storage (logout)
  logout: () => {
    localStorage.removeItem("token"); // Remove token from local storage
  },

  // Login user with provided credentials
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials); // Send login request
      const { token } = response.data; // Extract token from response
      localStorage.setItem("token", token); // Store token in local storage
      return token; // Return token
    } catch (error) {
      throw error.response.data; // Throw error response from the backend
    }
  },

  // Create a new user account
  createAccount: async (userData) => {
    try {
      //const response = await axios.post(`${API_URL}/register`, userData); // Send create account request expres
      const response = await axios.post(API_URL, userData); // Send create account request aws
      // const token = response.data.token; // Extract token from response
      // localStorage.setItem("token", token); // Store token in local storage
      toast.success("Registration successful.");
      return response; // Return token
    } catch (error) {
      toast.error(error.response.data.error);
      throw error.response.data.error; // Throw error response from the backend
    }
  },

  // Get current user data
  getCurrentUser: async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from local storage
      if (!token) throw new Error("No token available"); // Throw error if no token is available

      // Send request to get current user data
      const response = await axios.get(`${API_URL}/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token to request headers
        },
      });

      return response.data; // Return current user data
    } catch (error) {
      return "no user available"; // Return message indicating no user available
    }
  },
};

export default authService; // Export authService module
