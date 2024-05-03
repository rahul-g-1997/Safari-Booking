import axios from "axios";
import conf from "../conf/conf";

const API_URL = conf.backend_url; // API base URL

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
};

export default configService; // Export configService module
