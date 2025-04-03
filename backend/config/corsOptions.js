// src/config/corsOptions.js

import cors from 'cors';

// Allowed origins (Update this for production)
const allowedOrigins = [
    'http://localhost:5173', // Frontend (Vite Dev)
    'http://localhost:3000', // Other local frontend apps
    'https://your-production-frontend.com', // Deployed frontend
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true); // Allow request
        } else {
            callback(new Error('❌ CORS Policy: Not allowed by CORS'));
        }
    },
    credentials: true, // Allow cookies & auth headers
    optionsSuccessStatus: 200, // Some browsers need this
};

export default corsOptions;
