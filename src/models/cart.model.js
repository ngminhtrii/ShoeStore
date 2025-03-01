const mongoose = require("mongoose");
const BaseSchema = require("./base.model");

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      productSizeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductSize",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

CartSchema.add(BaseSchema);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
