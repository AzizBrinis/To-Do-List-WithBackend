require("dotenv").config({ path: __dirname + "/config/.env" });

const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

//4- pase data
app.use(express.json());

//3- routes
app.use("/api", require(__dirname + "/routes/tasks"));

//2- connect DB
connectDB(process.env.MONGO_URI);

//1-run server
const port = process.env.PORT || 8000;

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`the server is running on ${port}`);
});