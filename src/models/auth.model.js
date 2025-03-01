const mongoose = require("mongoose");
const BaseSchema = require("./base.model");

const AuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  dateOfBirth: {
    type: Date,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  image: {
    type: String,
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  discounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Discount" }],
});

AuthSchema.add(BaseSchema);

const Auth = mongoose.model("Auth", AuthSchema);

module.exports = Auth;
