import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [username, setUsername] = useState('');
    const [loginTime, setLoginTime] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedTime = localStorage.getItem('loginTime');

        if (!storedUsername) {
            // Not logged in — redirect to login
            navigate('/');
            return;
        }

        setUsername(storedUsername);
        if (storedTime) {
            setLoginTime(new Date(storedTime).toLocaleString());
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('loginTime');
        navigate('/');
    };

    const getInitial = () => {
        return username ? username.charAt(0).toUpperCase() : '?';
    };

    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <div className="avatar">{getInitial()}</div>
                <h1>Welcome, {username}!</h1>
                <p className="welcome-subtitle">You have successfully logged in.</p>

                <div className="info-grid">
                    <div className="info-item">
                        <div className="label">Username</div>
                        <div className="value">{username}</div>
                    </div>
                    <div className="info-item">
                        <div className="label">Login Time</div>
                        <div className="value">{loginTime || 'N/A'}</div>
                    </div>
                    <div className="info-item">
                        <div className="label">Status</div>
                        <div className="value" style={{ color: '#6ee7b7' }}>● Active</div>
                    </div>
                    <div className="info-item">
                        <div className="label">Session</div>
                        <div className="value">Authenticated</div>
                    </div>
                </div>

                <button onClick={handleLogout} className="logout-btn">Sign Out</button>
            </div>
        </div>
    );
};

export default Welcome;
