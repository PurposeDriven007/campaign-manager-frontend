import { config } from "@/utils/Config";
import axios from "axios";

export const api = axios.create({
  baseURL: config.get("API_GATEWAY_URL"),
  timeout: 10000,
});

const unProtectedRoutes = ["/login", "/reset-password"];

api.interceptors.request.use(
  (config) => {
    const isUnProtectedRoute = unProtectedRoutes.some((r) =>
      config.url?.includes(r)
    );
    if (!isUnProtectedRoute) {
      const token = "";
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
