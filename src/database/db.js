import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    const URI = process.env.MONGODB_URI; // Access the DB_URI environment variable
    if (!URI) {
        console.error('MongoDB URI is not defined. Please check your .env file.');
        process.exit(1); // Exit the process if the URI is not defined
   }
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
