import axios from "axios";
import conf from "../conf/conf";

// const USER_API_URL = conf.user_backend_url;
const STAFF_API_URL = conf.staff_backend_url; // Adjust the constant to the appropriate API URL if needed

const staffService = {
  // Get staff gates
  getStaffGates: async (token) => {
    try {
      const requestData = {
        act: "getallgates",
        token,
      };
      const response = await axios.post(`${STAFF_API_URL}/gates`, requestData);

      // Check if response status is 200 and data is as expected
      if (response.status === 200 && response.data.Result === "OK") {
        return response.data.Records; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error fetching staff gates:", error); // Log error for debugging
      throw new Error("Error fetching staff gates");
    }
  },

  // Get booking ID by gate ID
  getBookingIdByGateId: async (gateId) => {
    try {
      const requestData = {
        act: "getbookingid",
        gateid: gateId,
      };
      const response = await axios.post(`${STAFF_API_URL}/gates`, requestData);

      if (response.status === 200 && response.data.Result === "OK") {
        return response.data.Records; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error fetching booking ID by gate ID:", error); // Log error for debugging
      throw new Error("Error fetching booking ID by gate ID");
    }
  },

  // Get booking details by booking number
  getBookingDetailsByNumber: async (bookingNumber) => {
    try {
      const requestData = {
        act: "getbkngdtls",
        "booking.no": bookingNumber,
      };
      const response = await axios.post(
        `${STAFF_API_URL}/getbkngdtls`,
        requestData
      );

      if (response.status === 200 && response.data.Result === "OK") {
        return response.data.Records; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error fetching booking details:", error); // Log error for debugging
      throw new Error("Error fetching booking details");
    }
  },

  // Get all Gypsy details by Gypsy code
  getAllGypsyDetails: async (gypsyCode) => {
    try {
      const requestData = {
        act: "getallgypsies",
        "gypsy.cd": gypsyCode,
      };
      const response = await axios.post(
        `${STAFF_API_URL}/gpsydtls`,
        requestData
      );

      if (response.status === 200 && response.data.Result === "OK") {
        return response.data.Records; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error fetching Gypsy details:", error); // Log error for debugging
      throw new Error("Error fetching Gypsy details");
    }
  },

  // Get all Guide details by Guide code
  getAllGuideDetails: async (guideCode) => {
    try {
      const requestData = {
        act: "getallguides",
        "guide.cd": guideCode,
      };
      const response = await axios.post(
        `${STAFF_API_URL}/gpsydtls`,
        requestData
      );

      if (response.status === 200 && response.data.Result === "OK") {
        return response.data.Records; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error fetching Guide details:", error); // Log error for debugging
      throw new Error("Error fetching Guide details");
    }
  },

  // Confirm entry
  confirmEntry: async (bookingNumber, gypsyCode, guideCode, token) => {
    try {
      const requestData = {
        act: "cnfmentry",
        "booking.no": bookingNumber,
        "gypsy.cd": gypsyCode,
        "guide.cd": guideCode,
        token,
      };
      console.log(requestData);
      const response = await axios.post(
        `${STAFF_API_URL}/cnfrmbooking`,
        requestData
      );

      if (response.status === 200 && response.data.Result === "OK") {
        return response.data; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error confirming entry:", error); // Log error for debugging
      throw new Error("Error confirming entry");
    }
  },

  // Confirm entry with additional details
  confirmEntryWithDetails: async (entryDetails) => {
    try {
      console.log(entryDetails);
      const response = await axios.post(
        `${STAFF_API_URL}/cnfrmbooking`,
        entryDetails
      );

      if (response.status === 200 && response.data.Result === "OK") {
        return response.data; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error confirming entry:", error); // Log error for debugging
      throw new Error("Error confirming entry");
    }
  },

  // Get confirmed booking IDs
  getConfirmedBookingIds: async (token) => {
    try {
      const requestData = {
        act: "getcnfmbkngid",
        token,
      };
      const response = await axios.post(
        `${STAFF_API_URL}/cnfrmbooking`,
        requestData
      );

      if (response.status === 200 && response.data.Result === "OK") {
        return response.data.Records; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error fetching confirmed booking IDs:", error); // Log error for debugging
      throw new Error("Error fetching confirmed booking IDs");
    }
  },

  // Get finished booking IDs
  getFinishedBookingIds: async (token) => {
    try {
      const requestData = {
        act: "getfinishbkngid",
        token,
      };
      const response = await axios.post(
        `${STAFF_API_URL}/cnfrmbooking`,
        requestData
      );

      if (response.status === 200 && response.data.Result === "OK") {
        return response.data.Records; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error fetching finished booking IDs:", error); // Log error for debugging
      throw new Error("Error fetching finished booking IDs");
    }
  },

  // End booking time
  endBookingTime: async (bookingNumber, endTime, token) => {
    try {
      const requestData = {
        act: "endtime",
        "booking.no": bookingNumber,
        "end.time": endTime,
        token,
      };
      const response = await axios.post(
        `${STAFF_API_URL}/endtime`,
        requestData
      );

      if (response.status === 200 && response.data.Result === "OK") {
        return response.data; // Adjust based on the actual data structure
      } else {
        console.error("Unexpected response data:", response.data);
        throw new Error(response.data.Msg || "Unexpected response data");
      }
    } catch (error) {
      console.error("Error ending booking time:", error); // Log error for debugging
      throw new Error("Error ending booking time");
    }
  },
};

export default staffService;
