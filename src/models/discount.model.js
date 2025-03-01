const mongoose = require("mongoose");
const BaseSchema = require("./base.model");

const DiscountSchema = new mongoose.Schema({
  discountCode: {
    type: String,
    required: true,
    unique: [true, "Mã giảm giá đã tồn tại"],
  },
  discountPercentage: { type: Number, required: true },
  expiredAt: { type: Date },
  usageLimit: {
    type: Number,
    default: null,
  },
  usersUsed: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

DiscountSchema.add(BaseSchema);

const Discount = mongoose.model("Discount", DiscountSchema);

module.exports = Discount;
