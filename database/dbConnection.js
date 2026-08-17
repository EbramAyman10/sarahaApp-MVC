
  import mongoose from "mongoose";
  
  export const dbConnection = async () => {
    try {
      console.log("Trying to connect to MongoDB...");
  
      await mongoose.connect("mongodb://localhost:27017/saraha-mvc");
  
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection failed:");
      console.error(error);
      throw error;
    }
  };
  