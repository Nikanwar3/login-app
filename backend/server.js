require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rate Limiting - prevent brute-force attacks
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: { message: 'Too many login attempts, please try again after 15 minutes.' }
});

// In-memory user store (simulating a database)
// Password is pre-hashed version of 'admin'
const users = [];

// Initialize default admin user with hashed password
(async () => {
    const hashedPassword = await bcrypt.hash('admin', 10);
    users.push({
        username: 'admin',
        passwordHash: hashedPassword,
        name: 'Admin User'
    });
    console.log('Default admin user created (username: admin, password: admin)');
})();

// Helper function to find user
const getUserFromDatabase = (username) => {
    return users.find(user => user.username === username);
};

// POST /login - Credential validation
app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        const user = getUserFromDatabase(username);

        if (user && await bcrypt.compare(password, user.passwordHash)) {
            res.status(200).json({
                message: 'Login successful',
                user: { username: user.username, name: user.name }
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials. Please try again.' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
