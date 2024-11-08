// AuthContext.js
'use client';
import { useState, useEffect } from 'react';

export function AuthContext() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return isAuthenticated;
}
