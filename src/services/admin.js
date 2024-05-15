import axios from "axios";
import conf from "../conf/conf";

const USER_API_URL = conf.user_backend_url;
const ADMIN_API_URL = conf.admin_backend_url;

const adminService = {
  // Get places
  getPlaces: async () => {
    try {
      const requestData = { act: "getplaces" };
      const response = await axios.post(`${USER_API_URL}/getall`, requestData);
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
      const response = await axios.post(`${USER_API_URL}/getall`, requestData);
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
      const response = await axios.post(`${USER_API_URL}/getall`, requestData);
      return response.data; // Return gates data
    } catch (error) {
      console.error("Error fetching gates:", error); // Log error for debugging
      throw new Error("Error fetching gates");
    }
  },

  // Save places
  savePlaces: async (placeName, token) => {
    try {
      const requestData = {
        act: "saveplaces",
        "place.nm": placeName,
        token: token,
      };
      const response = await axios.post(`${ADMIN_API_URL}/places`, requestData);
      return response.data; // Return response data after saving places
    } catch (error) {
      console.error("Error saving places:", error); // Log error for debugging
      throw new Error("Error saving places");
    }
  },

  // Delete places
  deletePlace: async (token, placeId) => {
    try {
      const requestData = {
        act: "delplczone",
        token: token,
        v_placeid: placeId, // Set placeid to 0 when deleting zone
        v_zoneid: 0,
        actn: "P",
      };
      const response = await axios.post(`${ADMIN_API_URL}/places`, requestData);
      return response.data; // Return response data after deleting places
    } catch (error) {
      console.error("Error deleting places:", error); // Log error for debugging
      throw new Error("Error deleting places");
    }
  },

  // Save zones
  saveZone: async (placeId, zoneName, token) => {
    try {
      const requestData = {
        act: "savezone",
        token: token,
        placeid: placeId,
        "zone.nm": zoneName,
      };
      const response = await axios.post(`${ADMIN_API_URL}/zone`, requestData);

      // Check if Result in response.data is "ok"
      if (response.data.Result === "OK") {
        return response.data; // Return response data after saving zone
      } else {
        console.error(response.data.Msg); // Log error for debugging
        throw new Error(response.data.Msg);
      }
    } catch (error) {
      console.error("Error saving zone:", error); // Log error for debugging
      throw new Error("Error saving zone");
    }
  },

  // Delete zones
  deleteZone: async (token, zoneId) => {
    try {
      const requestData = {
        act: "delplczone",
        token: token,
        v_placeid: 0,
        v_zoneid: zoneId,
        actn: "Z",
      };
      console.log(requestData);
      const response = await axios.post(`${ADMIN_API_URL}/zone`, requestData);
      // Check if Result in response.data is "ok"
      if (response.data.Result === "OK") {
        return response.data; // Return response data after saving zone
      } else {
        console.error(response.data.Msg); // Log error for debugging
        throw new Error(response.data.Msg);
      }
    } catch (error) {
      console.error("Error deleting zone:", error); // Log error for debugging
      throw new Error("Error deleting zone");
    }
  },

  // Save gates
  saveGate: async (placeId, zoneId, gateName, token) => {
    try {
      const requestData = {
        act: "savegate",
        token: token,
        placeid: placeId,
        zoneid: zoneId,
        "gate.nm": gateName,
      };

      const response = await axios.post(`${ADMIN_API_URL}/gate`, requestData);

      // Check if Result in response.data is "OK"
      if (response.data.Result === "OK") {
        return response.data; // Return response data after saving gate
      } else {
        console.error(response.data.Msg); // Log error message from the response
        throw new Error(response.data.Msg);
      }
    } catch (error) {
      console.error("Error saving gate:", error.message); // Log error for debugging
      throw new Error("Error saving gate");
    }
  },

  // Delete gates
  deleteGate: async (token, gateId) => {
    try {
      const requestData = {
        act: "delgate",
        token: token,
        gateid: gateId,
      };
      const response = await axios.post(`${ADMIN_API_URL}/gate`, requestData);
      return response.data; // Return response data after deleting gate
    } catch (error) {
      console.error("Error deleting gate:", error); // Log error for debugging
      throw new Error("Error deleting gate");
    }
  },

  // Save holiday
  saveHoliday: async (date, remark, token) => {
    try {
      const requestData = {
        act: "saveholiday",
        date: date,
        remark: remark,
        token: token,
      };
      const response = await axios.post(
        `${ADMIN_API_URL}/holidays`,
        requestData
      );
      return response.data; // Return response data after saving holiday
    } catch (error) {
      console.error("Error saving holiday:", error); // Log error for debugging
      throw new Error("Error saving holiday");
    }
  },

  // Search holidays
  searchHoliday: async (token) => {
    try {
      const requestData = {
        act: "srchholiday",
        token: token,
      };
      const response = await axios.post(
        `${ADMIN_API_URL}/holidays`,
        requestData
      );
      return response.data; // Return response data after searching holiday
    } catch (error) {
      console.error("Error searching holiday:", error); // Log error for debugging
      throw new Error("Error searching holiday");
    }
  },

  // Get all details: places, zones, and gates
  getAllDetails: async (token) => {
    try {
      const requestData = {
        act: "getalldtls",
        token: token,
      };
      const response = await axios.post(`${ADMIN_API_URL}/getall`, requestData);
      return response.data; // Return all details data
    } catch (error) {
      console.error("Error fetching all details:", error); // Log error for debugging
      throw new Error("Error fetching all details");
    }
  },
};

export default adminService;
