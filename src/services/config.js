import axios from "axios";
import conf from "../conf/conf";

const API_URL = conf.user_backend_url; // API base URL

const configService = {
  // Get places
  getPlaces: async () => {
    try {
      const requestData = { act: "getplaces" };
      const response = await axios.post(`${API_URL}/getall`, requestData);
      return response.data; // Return places data
    } catch (error) {
      console.error("Error fetching places:", error); // Log error for debugging
      throw new Error("Error fetching places");
    }
  },

  // Get zones for a place
  getZones: async (placeId) => {
    try {
      const requestData = { act: "getzones", placeid: placeId };
      const response = await axios.post(`${API_URL}/getall`, requestData);
      return response.data; // Return zones data
    } catch (error) {
      console.error("Error fetching zones:", error); // Log error for debugging
      throw new Error("Error fetching zones");
    }
  },

  // Get gates for a zone
  getGates: async (zoneId) => {
    try {
      const requestData = { act: "getgates", zoneid: zoneId };
      const response = await axios.post(`${API_URL}/getall`, requestData);
      return response.data; // Return gates data
    } catch (error) {
      console.error("Error fetching gates:", error); // Log error for debugging
      throw new Error("Error fetching gates");
    }
  },

  // Send OTP
  sendOTP: async (email) => {
    try {
      const requestData = {
        act: "forgotpswd",
        "usr.login": email,
        emailfor: "OTP",
        provider: "bhash",
        emailprovider: "datae",
        senderid: "DTENGN",
        smsfor: "OTP",
        wappfor: "OTP",
      };
      const response = await axios.post(`${API_URL}/forgotpwd`, requestData);
      return response.data; // Return response data
    } catch (error) {
      console.error("Error sending OTP:", error); // Log error for debugging
      throw new Error("Error sending OTP");
    }
  },

  // Reset Password
  resetPassword: async (email, newPassword, otp) => {
    try {
      const requestData = {
        act: "resetpswd",
        "usr.login": email,
        "usr.pwd": newPassword,
        otp: otp,
      };
      const response = await axios.post(`${API_URL}/forgotpwd`, requestData);
      return response.data; // Return response data
    } catch (error) {
      console.error("Error resetting password:", error); // Log error for debugging
      throw new Error("Error resetting password");
    }
  },
};

export default configService; // Export configService module
