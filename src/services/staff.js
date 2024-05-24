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
};

export default staffService;
