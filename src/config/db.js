import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://venusaiyalamanchili:venusai17@cluster0.3lddw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
