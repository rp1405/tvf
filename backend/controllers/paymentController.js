// const instance = require("../razorpayins.js");
const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: "rzp_test_AM28Y3V37lYCr0",
  key_secret: "TQRmhkANDOLNGnTsv7p9rQvY",
});

const crypto = require("crypto");
const Payment = require("../models/paymentModel.js");

const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount) * 100,
    currency: "INR",
  };
  console.log(instance);
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "TQRmhkANDOLNGnTsv7p9rQvY")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.status(200).json({
      success: true,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

module.exports = {
  checkout,
  paymentVerification,
};
