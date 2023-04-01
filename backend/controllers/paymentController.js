// const instance = require("../razorpayins.js");
const Razorpay = require("razorpay");
const Order = require("../models/order");

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

  const { id, amount } = order;
  const cust_id = Math.floor(Math.random() * 9000 + 1000);
  const orderObj = {
    razorpay_order_id: id,
    amount: amount,
    status: "pending",
    items: req.body.items,
    cust_order_id: cust_id,
  };
  await Order.create(orderObj);

  res.status(200).json({
    success: true,
    order,
  });
};

const paymentVerification = async (req, res) => {
  console.log(req.body);
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

    const task = await Order.findOne({ razorpay_order_id: razorpay_order_id });
    res.status(200).send(`<html>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">
    </head>
      <style>
        body {
          text-align: center;
          padding: 40px 0;
          background: #EBF0F5;
        }
          h1 {
            color: #88B04B;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-weight: 900;
            font-size: 40px;
            margin-bottom: 10px;
          }
          p {
            color: #404F5E;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-size:20px;
            margin: 0;
          }
        i {
          color: #9ABC66;
          font-size: 100px;
          line-height: 200px;
          margin-left:-15px;
        }
        .card {
          background: white;
          padding: 60px;
          border-radius: 4px;
          box-shadow: 0 2px 3px #C8D0D8;
          display: inline-block;
          margin: 0 auto;
        }
      </style>
      <body>
        <div class="card">
        <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
          <i class="checkmark">✓</i>
        </div>
          <h1>Success</h1> 
          <p>We received your Order<br/>Order Ref. ID: ${task.cust_order_id}</p>
        </div>
      </body>
  </html>`);
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
