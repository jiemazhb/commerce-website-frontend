import axios from 'axios';
import { refreshAccessToken } from './refreshAccessToken';
import { isTokenExpired } from './isTokenExpired';
import { useContext } from 'react';
import { UserContext } from './userContext';

const useApi = () => {
  const { logout } = useContext(UserContext); // 从上下文获取 logout 函数

  // 创建axios实例
  const api = axios.create({
    baseURL: 'http://localhost:8222/api/v1', // 你的API基础URL
  });

  // 添加请求拦截器
  api.interceptors.request.use(
    async (config) => {
      let token = localStorage.getItem('token');
      const refreshToken = localStorage.getItem('refreshToken');

      if (token && isTokenExpired(token)) {  // token存在 并过期
        console.log("没有有" + token);
        if (refreshToken) {
          console.log("无" + refreshToken);
          const newToken = await refreshAccessToken(refreshToken);
          if (newToken) {
            localStorage.setItem('token', newToken);
            config.headers.Authorization = `Bearer ${newToken}`;
          } else {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            logout(); // 调用 logout 函数
            window.location.href = '/login'; // 重定向到登录页面
          }
        } else {
          logout();
          window.location.href = '/login';
        }
      } else if (token) {  // 有token, 加到头部
        console.log("有" + token);

        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
};

export default useApi;
