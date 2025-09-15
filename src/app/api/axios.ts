// src/api/axiosInstance.ts
import axios from "axios";
import { BASE_URL } from "./api";

const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🛠️ Interceptor
Axios.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const lang = localStorage.getItem("lang") || "en";
    config.headers["Accept-Language"] = lang;
  } else {
    // قيمة افتراضية لما السيرفر يرسل
    config.headers["Accept-Language"] = "en";
  }
  return config;
});

export default Axios;
