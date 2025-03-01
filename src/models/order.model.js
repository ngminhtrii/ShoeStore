const mongoose = require("mongoose");
const BaseSchema = require("./base.model");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      size: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  shippingFee: { type: Number },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "confirmed", "shipping", "delivered", "cancelled"],
  },
  paymentMethod: {
    type: String,
    enum: ["COD", "VNPAY"],
  },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  shippingAddress: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    default: "",
  },
  discountCode: { type: mongoose.Schema.Types.ObjectId, ref: "Discount" },
});

OrderSchema.add(BaseSchema);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
