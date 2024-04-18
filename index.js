const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoute = require("./routes/product.route.js");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/order", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://gumanist225:3Tx2v1GykbiiJbex@misha.vipr97v.mongodb.net/ORDERAPI?retryWrites=true&w=majority&appName=Misha"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
