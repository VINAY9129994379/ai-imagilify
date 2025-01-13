import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Initialize the cached connection to be used across the app
const cached: MongooseConnection = (global as any).mongoose || {
  conn: null,
  promise: null,
};


if (!(global as any).mongoose) {
  (global as any).mongoose = cached;
}

export const connectToDatabase = async () => {
  // If a connection already exists, return it
  if (cached.conn) return cached.conn;

  // If the connection URL is missing, throw an error
  if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  // Set the cached promise if it doesn't exist already
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'ai-imagify',
      bufferCommands: false,
    });

  // Wait for the connection to resolve and cache it
  cached.conn = await cached.promise;

  return cached.conn;
};
