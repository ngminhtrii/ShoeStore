require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");
const orderRouter = require("./routes/order.route");
const adminRouter = require("./routes/admin.route");
//const discountRouter = require("./routes/discount.route");
const cartRouter = require("./routes/cart.route");
const reviewRouter = require("./routes/review.route");
const paymentRouter = require("./routes/payment.route");
const categoryRouter = require("./routes/category.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter); // Đảm bảo route này đang được sử dụng
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/admin", adminRouter);
//app.use("/api/discounts", discountRouter);
app.use("/api/cart", cartRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/categories", categoryRouter);

module.exports = app;
