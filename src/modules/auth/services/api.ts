import axios from 'axios';
import keycloakInstance from './keycloak';

// Tạo axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://your-api-url',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để tự động thêm token vào request
api.interceptors.request.use(
  async (config: any) => {
    // Cố gắng refresh token nếu gần hết hạn
    try {
      await keycloakInstance.updateToken(70);
    } catch (error) {
      console.error('Failed to refresh token', error);
      keycloakInstance.logout();
      return Promise.reject(error);
    }

    // Thêm token vào header
    if (keycloakInstance.token) {
      config.headers.Authorization = `Bearer ${keycloakInstance.token}`;
    }
    
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default api;