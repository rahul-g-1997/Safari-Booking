import axios from "axios";
import conf from "../conf/conf";

const API_URL = conf.user_backend_url; // API base URL
const convertDateFormat = (date) => {
  const [day, month, year] = date.split("/");
  return `${year}-${month}-${day}`;
};
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

  // Verify OTP
  verifyOTP: async (email, otp) => {
    try {
      const requestData = {
        act: "matcheml",
        "usr.login": email,
        otp: otp,
      };
      const response = await axios.post(`${API_URL}/forgotpwd`, requestData); // Adjust the endpoint if needed
      return response.data; // Return response data
    } catch (error) {
      console.error("Error verifying OTP:", error); // Log error for debugging
      throw new Error("Error verifying OTP");
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

  //forgot username
  getUsername: async (number) => {
    try {
      const requestData = {
        act: "geteml",
        "usr.cntc": number.replace(/\s+/g, ""),
      };
      const response = await axios.post(`${API_URL}/forgotpwd`, requestData);
      return response.data;
    } catch (error) {
      console.error("Error getting username:", error);
      throw new Error("Error getting username");
    }
  },

  // Get availability
  getAvailability: async (
    zoneId,
    gateId,
    slotId,
    formattedStartDate,
    formattedEndDate
  ) => {
    try {
      const requestData = {
        act: "getavildt",
        zoneid: zoneId,
        gateid: gateId,
        slotid: slotId,
        "date.from": formattedStartDate,
        "date.to": formattedEndDate,
      };
      const response = await axios.post(`${API_URL}/getavaildt`, requestData);
      console.log(response);
      return response.data; // Return availability data
    } catch (error) {
      console.error("Error fetching gate availability:", error); // Log error for debugging
      throw new Error("Error fetching gate availability");
    }
  },

  // Book ticket
  bookTicket: async ({
    placeId,
    zoneId,
    gateId,
    slot,
    fromDate,
    toDate,
    vehicleType,
    touristDetails,
    totalAmount,
    openTime,
    details,
    token,
    app,
  }) => {
    try {
      const requestData = {
        act: "booktckt",
        "v.placeid": placeId,
        "v.zoneid": zoneId,
        "v.gateid": gateId,
        "v.slotid": slot,
        "v.date.from": convertDateFormat(fromDate),
        "v.date.to": convertDateFormat(toDate),
        "v.vhcle.type": vehicleType,
        "v.tourist.dtls": JSON.stringify(touristDetails),
        "v.tot.amt": totalAmount,
        "v.open.time": openTime,
        "v.dtls": JSON.stringify(details),
        token: token,
        app: app,
      };
      console.log(requestData);
      const response = await axios.post(
        `${API_URL}/booktckt
`,
        requestData
      );
      return response.data; // Return response data
    } catch (error) {
      console.error("Error booking ticket:", error); // Log error for debugging
      throw new Error("Error booking ticket");
    }
  },
};

export default configService; // Export configService module
