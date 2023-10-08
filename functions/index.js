/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51NySWaSDUZMaMoBjEp4w4Kh7Lh394mSaZJc6sGDZTikXEmli4D3QA6NXgNiwev3RmjjJ623Mgzan2PTvvP887eov00rSYw8MrG')

//API


//App config
const app = express();

//Middlewares
app.use(cors({origin: true}))
app.use(express.json())

//API routes
app.get('/', (req, res)=> res.status(200).send('hello world'))
app.post('/payments/create', async(req, res)=>{
    const total = req.query.total;
    console.log(total)
    console.log('Payment Request Recieved BOOM!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        description: 'test',
        shipping: {
            name: 'Jenny Rosen',
            address: {
              line1: '510 Townsend St',
              postal_code: '98140',
              city: 'San Francisco',
              state: 'CA',
              country: 'US',
            },
          },
          payment_method_types: ['card'],
    });
    console.log(paymentIntent)

    //OK- created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//Listen command
exports.api = onRequest(app)
