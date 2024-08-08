import axios from "axios";
import getAuth from "./authHeader";
const serverURL = import.meta.env.VITE_REACT_APP_SERVER_URL;
const instance = axios.create({
  baseURL: "https://cbtp-project-backend.onrender.com/api/",
  withCredentials: true,
});

// Set the token in the request headers
instance.interceptors.request.use(async (config) => {
  const data = await getAuth();
  if (data) {
    const token = data.userToken;
    if (token) {
      config.headers = {
        "x-access-token": token,
      };
    }
  }
  return config;
});

export default instance;
