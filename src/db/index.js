


import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

// Load environment variables
dotenv.config();

const connectDB = async () => {
    try {
        // Construct the MongoDB URI with the database name
        const mongoURI = (`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        // Connect to MongoDB
        const connectionInstance = await mongoose.connect(mongoURI);

        console.log(`\nMongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};

export default connectDB;
