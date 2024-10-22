import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (token) => {
    if (!token) return true;

    try {
        const { exp } = jwtDecode(token); // 从 token 中获取过期时间戳
        if (!exp) return true; // 如果没有过期时间，认为已经过期

        const currentTime = Date.now() / 1000; // 当前时间，单位为秒
        return exp < currentTime; // 如果过期时间小于当前时间，表示 token 已过期
    } catch (error) {
        return true; // 如果解析 token 出错，也认为已经过期
    }
};

