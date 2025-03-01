const mongoose = require("mongoose");
const BaseSchema = require("./base.model");

const ProductSizeSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  size: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Size",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  status: {
    type: String,
    default: "active",
    enum: ["active", "inactive"],
  },
});

ProductSizeSchema.add(BaseSchema);

const ProductSize = mongoose.model("ProductSize", ProductSizeSchema);

module.exports = ProductSize;
