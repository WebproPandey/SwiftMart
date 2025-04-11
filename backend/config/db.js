const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL,);
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.log("❌ Error connecting to MongoDB:", error.message);
  }
};
module.exports = { connectDb };
