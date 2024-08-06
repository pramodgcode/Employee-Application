import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});
console.log("pramod");
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log("pramod2");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
