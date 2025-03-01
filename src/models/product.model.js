const mongoose = require("mongoose");
const BaseSchema = require("./base.model");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  totalQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  costPrice: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  color: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Color",
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      comment: {
        type: String,
      },
      rating: {
        type: Number,
      },
    },
  ],
  images: {
    type: [String],
    default: [],
  },
});

ProductSchema.add(BaseSchema);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
