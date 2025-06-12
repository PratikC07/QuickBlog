import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`);
  } catch (error) {
    console.log(error.message);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log(error.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection is closed by app termination");
  process.exit(0);
});

export default connectDB;
