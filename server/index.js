const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const stripe = require("stripe")(
  "sk_test_51NytlXKsB0yZWTQ82srD8btsmFeQXxFo5WA6Gj775PqWjM09Sb2PXBPTyFoAzBqa3aY01T0GEvIgg4qkl08ZtwSJ00lTyu3GSA"
);

require("dotenv").config();
// console.log(process.env.STRIPE_KEY);

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.8sitard.mongodb.net/?retryWrites=true&w=majority`;

//middleware

app.use(cors());
app.use(express.json());

//database connection with mongodb

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    //DB Collections

    const database = client.db("quickcheckin");
    const roomsCollection = database.collection("rooms");
    const reviewCollection = database.collection("reviews");
    const bookingCollection = database.collection("bookings");
    const userCollection = database.collection("users");

    // All  API's

    //get API's

    app.get("/rooms", async (req, res) => {
      const result = await roomsCollection.find().toArray();

      res.send(result);
    });
    // app.get("")
    app.get("/rooms/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await roomsCollection.findOne(query);

      res.send(result);
    });
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });
    app.get("/bookings/:email", async (req, res) => {
      const paramEmail = req.params.email;
      // console.log(paramEmail);
      const query = { userEmail: paramEmail };
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });
    app.get("/bookings", async (req, res) => {
      const result = await bookingCollection.find().toArray();
      res.send(result);
    });
    //post apis
    app.post("/addroom", async (req, res) => {
      const body = req.body;
      // console.log(body);
      const result = await roomsCollection.insertOne(body);
      res.send(result);
    });
    app.post("/users", async (req, res) => {
      const body = req.body;
      const email = body.userEmail;
      const query = { userEmail: email };
      const existingUser = await userCollection.findOne(query);
      if (!existingUser) {
        const result = await userCollection.insertOne(body);
        res.send(result);
      } else {
        res.send("User Already Exists");
      }
    });

    app.post("/bookings", async (req, res) => {
      const body = req.body;
      const checkIn = body.checkIn;
      const checkOut = body.checkOut;
      const id = body.roomID;
      const query = { _id: new ObjectId(id) };
      body.status = "Booked";
      await roomsCollection.updateOne(query, {
        $set: {
          currentBooking: {
            checkIn: checkIn,
            checkOut: checkOut,
            userEmail: body.userEmail,
          },
        },
      });
      const result = await bookingCollection.insertOne(body);
      // console.log(roomDetails);
      res.send(result);
    });
    app.post("/cencelBooking", async (req, res) => {
      const bookingId = req.body.bId;
      const roomId = req.body.rId;
      const roomQuery = { _id: new ObjectId(roomId) };
      const bookingQuery = { _id: new ObjectId(bookingId) };

      const updatedBooking = await bookingCollection.updateOne(bookingQuery, {
        $set: { status: "canceled" },
      });
      const room = await roomsCollection.updateOne(roomQuery, {
        $set: { currentBooking: "" },
      });
      res.send({ updatedBooking, room });
      // console.log(booking);
    });
    //Payments
    app.post("/create-payment", async (req, res) => {
      const { amount, token } = req.body;
      try {
        const charge = await stripe.charges.create({
          amount,
          currency: "usd",
          source: token.id, // token received from the frontend
          description: "Product Purchase",
        });
        res.send({ success: true, charge });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Payment failed" });
      }
    });
    app.post("/makeadmin/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//checking connections

app.get("/", (req, res) => {
  res.send("WELCOME TO LUXESEVEN SERVER");
});

app.listen(port, () => {
  console.log("app server is running on port : ", port);
});
