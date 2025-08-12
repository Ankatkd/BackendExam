// Backend/config/db.js
const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("⚡ Using existing MongoDB connection");
    return;
  }

  try {
    console.log("🔍 Connecting to MongoDB...");
    console.log("MONGO_URI:", process.env.MONGO_URI ? "✅ Exists" : "❌ Missing");

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnected = conn.connections[0].readyState;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message);
    throw new Error("MongoDB connection failed");
  }
};

module.exports = connectDB;
