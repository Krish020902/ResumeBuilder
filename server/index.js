const express = require("express");
const cors = require("cors");
const connectDB = require("./Userdb/connect");
const task = require("./route/tasks");
const user = require("./route/user");
const authenticate = require("./middleware/authenticate");
// const connect = require("./route/tasks");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/task", authenticate, task);
app.use("/user", user);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port=${port}`);
    });
  } catch (error) {
    console.log(`Sorry connection ! ${error}`);
  }
};
start();
