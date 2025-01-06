import { AxiosInstance } from 'axios';
import { Toast } from 'ui-kit';
import { useRefreshToken } from './useRefreshToken';

// Helper function to get the authorization token
const getToken = (): string => {
  const tempState = localStorage.getItem('key_login');
  const loginstate = tempState ? JSON.parse(tempState) : '';
  return loginstate?.token;
};

export const useAxiosInterceptor = (axiosInstance: AxiosInstance) => {
  const refresh = useRefreshToken();

  // Do something before request is sent
  const requestInterceptor = axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getToken();
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const newAccessToken = await refresh();
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('key_login');
          Toast('Session Expired', 'danger', 'Please log in again.');
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

  return () => {
    axiosInstance.interceptors.request.eject(requestInterceptor);
    axiosInstance.interceptors.response.eject(responseInterceptor);
  };
};