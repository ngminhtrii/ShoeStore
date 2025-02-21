const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ReviewSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
