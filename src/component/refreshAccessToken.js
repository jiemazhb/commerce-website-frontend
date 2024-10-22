import axios from 'axios';

export const refreshAccessToken = async (refreshToken) => {
    try {
        // 向后端发起请求，使用Refresh Token换取新的Access Token
        const response = await axios.post('http://localhost:8222/api/v1/auth/refresh', {
            refreshToken: refreshToken,
        });

        const { accessToken } = response.data; // 假设后端返回的结构包含accessToken
        return accessToken;
    } catch (error) {
        console.error('Failed to refresh access token:', error);
        return null; // 如果刷新失败，返回null
    }
};
