const mongoose = require("mongoose");

let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/blogAppDataBase";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("connected to mongoDB"))
  .catch((e) => console.error("connection error", e.message));
module.exports = mongoose.connection;
