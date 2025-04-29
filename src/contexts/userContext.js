import React, { createContext, useState, useEffect } from 'react';
import {getUserDataFromToken} from "../features";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    // 初始化时检查本地存储中的token并设置用户状态
    
    useEffect(() => {

        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            const userData = getUserDataFromToken(storedToken);
            if (userData) {
                setAuth(userData);
            }
        }
    }, []);


    // 登录函数
    const login = (token, refreshToken) => {
        const userData = getUserDataFromToken(token);
        localStorage.setItem('token', token); // 存储Access Token
        localStorage.setItem('refreshToken', refreshToken); // 存储Refresh Token
        setAuth(userData);
    };

    // 登出函数
    const logout = () => {
       
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken'); // 清除Refresh Token
        setAuth(null);
    };
 
    
    return (
        <UserContext.Provider value={{ auth, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
