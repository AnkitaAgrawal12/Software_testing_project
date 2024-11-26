import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TrackUserActivity = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');

        // Redirect to login if no auth token is found
        if (!authToken) {
            console.log('No auth token found, redirecting to login...');
            navigate('/login');
        }

        // Log user navigation
        const logPageVisit = () => {
            const currentPage = location.pathname;
            const visitTime = new Date().toISOString();

            console.log(`User visited ${currentPage} at ${visitTime}`);
            // Store last visited page
            sessionStorage.setItem('lastVisitedPage', currentPage);
        };

        logPageVisit();
    }, [location, navigate]);

    useEffect(() => {
        let inactivityTimer;

        // Reset inactivity timer on user interaction
        const resetInactivityTimer = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                console.log('User inactive for 15 minutes, logging out...');
                localStorage.removeItem('authToken');
                sessionStorage.clear();
                navigate('/login');
            }, 15 * 60 * 1000); // 15 minutes inactivity limit
        };

        // Add activity event listeners
        window.addEventListener('mousemove', resetInactivityTimer);
        window.addEventListener('keypress', resetInactivityTimer);
        resetInactivityTimer();

        // Cleanup event listeners on component unmount
        return () => {
            clearTimeout(inactivityTimer);
            window.removeEventListener('mousemove', resetInactivityTimer);
            window.removeEventListener('keypress', resetInactivityTimer);
        };
    }, [navigate]);

    return null;
};

export default TrackUserActivity;
