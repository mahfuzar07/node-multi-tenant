import express from "express";
import morgan from "morgan";
import connectDb from "./src/config/db.js";
import setAllRoute from "./src/routes/routes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import createHttpError from "http-errors";

import { serverHost, serverPort } from "./src/config/config.js";
import { errorRespons } from "./src/utils/responsHandler.js";

const app = express();

// ========3rd Party Middleware==========
app.use(morgan("dev"));

// ========Parse cookie ==========
app.use(cookieParser());
// ========Parse incoming urlencoded form data ==========
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ========routes==========

setAllRoute(app);

// ========server listener==========
app.listen(serverPort, async () => {
  console.log(
    `server is running successfully at http://${serverHost}:${serverPort} ✅`,
  );
  await connectDb();
});

// ======== Client Side Error  Handeling==========
app.use((req, res, next) => {
  next(createHttpError(404, "Route Not Found"));
});

// ======== App Side Server Error  Handeling==========
app.use((err, req, res, next) => {
  return errorRespons(res, {
    statusCode: err.status,
    message: err.message,
  });
});
