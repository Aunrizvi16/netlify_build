const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const serverlsee =require("serverless-http")
const testRoute = require("./routes/test");
const router=express.Router();
dotenv.config();

// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("Connected to MongoDB");
//   }
// );

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

router.get("/", (req, res) => {
    res.send("JDKJKFJ");
  });

app.use("/.netlify/functions/index", router);
module.exports.handler =serverlsee(app)
// app.listen(8800, () => {
//   console.log("Backend server is running!");
// });
