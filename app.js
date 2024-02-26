const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const HttpError = require("./models/http-error");   
require('dotenv').config()
const app = express();

// Routes
const userRoutes = require("./routes/userRoutes");
const imageRoutes = require("./routes/imageRoutes");
const contactRoutes = require("./routes/contactRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const groomRoutes = require("./routes/groomRoutes");
const brideRoutes = require("./routes/brideRoutes");




app.use(express.json());

app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// connect db
const mongoUrl = process.env.MONGODB_URL;
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));


//ROUTE HANDLING
app.use("/api/user", userRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/groom", groomRoutes);
app.use("/api/bride", brideRoutes);


app.use((req, res, next) => {
  const error = new HttpError("Could not found this route.", 404);
  return next(error);
});
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

// server 
app.listen(5000, () => {
  console.log("Server Started");
});