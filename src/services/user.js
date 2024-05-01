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
      const { Result, token } = response.data; // Extract result and token from response
      if (Result === "OK") {
        localStorage.setItem("token", token); // Store token in local storage
        return response; // Return token if result is "OK"
      } else {
        throw new Error(response.data.Msg || "Unknown error occurred"); // Throw error with message from response
      }
    } catch (error) {
      throw error.response.data.Msg || "Unknown error occurred"; // Throw error response message from the backend
    }
  },
  
  // Create a new user account
  createAccount: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      console.log("Response:", response); // Log the response for debugging

      if (response.data.Result == "OK") {
        toast.success("Registration successful.");
        return response; // Return response data
      } else {
        toast.error(response.data.Msg);
        throw new Error(response.data.Msg);
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
    }
  },
};

export default authService; // Export authService module
