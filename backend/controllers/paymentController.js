// const SK = process.env.STRIPE_SECRET_KEY;
// const stripe = require('stripe')(SK);
// const { v4: uuid } = require('uuid');

// // Your other imports and code...


// exports.makePayment = (req, res) => {
//   const { token, selectedSeat } = req.body;
//   const amount = 25;

//   // Process the payment using Stripe
//   stripe.customers
//     .create({
//       email: token.email,
//       source: token.id,
//     })
//     .then((customer) => {
//       stripe.charges
//         .create(
//           {
//             customer: customer.id,
//             amount: amount*100, // Amount in cents
//             currency: "inr",
//             receipt_email: token.email,
//             description: `Booking for seat ${selectedSeat}`,
//           },
//           { idempotencyKey: uuid() }
//         )
//         .then((result) => {
//           res.status(200).json(result);
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(500).send("Payment failed");
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send("Payment failed");
//     });
// };

const SK = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(SK);
const { v4: uuid } = require('uuid');

exports.makePayment = async (req, res) => {
  const { token, selectedSeat } = req.body;
  const amount = 2500; // 25 INR converted to paisa

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr',
      //payment_method: token.id,
      confirmation_method: 'manual',
      confirm: true,
      receipt_email: token.email,
      description: `Booking for seat ${selectedSeat}`,
      payment_method_data: {
        type: 'card',
        card: {
          token: token.id,
        },
      },
      return_url: 'http://localhost:3000/ticket', 
    });

    res.json({ client_secret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    res.status(500).send("Payment failed");
  }
};


