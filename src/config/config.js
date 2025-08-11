import dotenv from "dotenv";
dotenv.config();

//constant config
export const DB_NAME = "test";
export const SMTP_mail = "mahfuzar271@gmail.com";
export const SMTP_pass = "haqutazgblxnajvh";

//env config
export const serverHost = process.env.HOST;
export const serverPort = process.env.PORT || 5000;
export const MongodbUrl =
  `${process.env.MONGODB_URL}/${DB_NAME}` ||
  `mongodb://127.0.0.1:27017/${DB_NAME}`;
export const clientUrl = process.env.CLIENT_URL || "http://127.0.0.1:3000";
