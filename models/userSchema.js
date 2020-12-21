const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, required: false },
  imgURL: { type: String, required: false },
});

module.exports = mongoose.model("users", User);
