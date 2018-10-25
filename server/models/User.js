const mongoose = require("mongoose");
// same as below const Schema = mongoose.Schema;

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model("users", userSchema);
