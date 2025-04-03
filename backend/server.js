import app from './app.js'; // Import the Express app
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Load environment variables
dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging
console.log("JWT_SECRET:", process.env.JWT_SECRET); 
// Connect to MongoDB
connectDB();

// Define the PORT from environment variables or default to 5000
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
