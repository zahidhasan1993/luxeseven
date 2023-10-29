const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

require("dotenv").config();

//middleware

app.use(cors());
app.use(express.json());

//checking connections

app.get("/", (req, res) => {
  res.send("WELCOME TO QUICKCHECKIN SERVER")
});

app.listen(port, () => {
  console.log("app server is running on port : ", port);
});
