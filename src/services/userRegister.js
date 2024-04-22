import conf from '../conf/conf'
import axios from "axios";

const userRegister = async (formData) => {
  try {
    const response = await axios.post(`${conf.backend_url}/register`, formData);
    return response.data; 
  } catch (error) {
    throw error.response.data;
  }
};

export default userRegister;
