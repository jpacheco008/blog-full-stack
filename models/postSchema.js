const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    name: { type: String, required: false },
    imgURL: { type: String, requried: false },
    comment: { typef: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", Post);
