require("dotenv").config();
require("express-async-errors");
const paymentRoute = require("./routes/paymentRoutes.js");
var cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());

const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");
const foodRouter = require("./routes/food");
const authRouter = require("./routes/auth");
const orderRouter = require("./routes/order.js");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.get("/api/v1/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.use("/api/v1/food", foodRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/orders", authenticateUser, orderRouter);
app.use("/api/v1", paymentRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
