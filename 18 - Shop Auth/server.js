require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", require("./src/routes/user"));
app.use("/api/shops", require("./src/routes/shop"));
app.use("/api/products", require("./src/routes/product"));
app.use("/api/orders", require("./src/routes/order"));

// Database
mongoose.connect(process.env.MONGO_URI, { dbName: 'Shop' })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT} and connected to MongoDB`)
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error.message)
  });

