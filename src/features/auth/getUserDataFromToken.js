import { jwtDecode } from 'jwt-decode';


export function getUserDataFromToken(token) {
    try {
        const decoded = jwtDecode(token);
        
        const username = decoded.sub; 
        const email = decoded.email;  
        const userId = decoded.userId;    
        
        return { username, email, userId };
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
}
