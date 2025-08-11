import mongoose from "mongoose";
import { MongodbUrl } from "./config.js";

const connectDb = async () => {
  try {
    const con = await mongoose.connect(MongodbUrl);
    console.log(
      `successfully connected at mongodb, DB_NAME : ${con.connection.name} ✅`,
    );
    mongoose.connection.on("error", (error) => {
      console.error("database connection error:", error);
    });
  } catch (error) {
    console.error("Could not  connect to database:", error.toString());
  }
};

export default connectDb;
