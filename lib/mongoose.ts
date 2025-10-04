import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    throw new Error("Please add your Mongo URI to .env.local");
  }
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "dev-flow",
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
      maxPoolSize: 10, // Maintain up to 10 socket connections
      minPoolSize: 5, // Maintain a minimum of 5 socket connections
      maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    });
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    isConnected = false;
    throw error;
  }
};

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
  isConnected = true;
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
  isConnected = false;
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
  isConnected = false;
});
