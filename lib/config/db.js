import mongoose from "mongoose";

let isConnected = false;

export const ConnectDB = async () => {
  if (isConnected) return;

  try {
    // Remove deprecated options
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log("✅ DB Connected");
  } catch (err) {
    console.error("❌ DB connection error:", err);
    throw err;
  }
};

