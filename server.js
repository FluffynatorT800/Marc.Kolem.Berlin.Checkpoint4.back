require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ticketRoutes = require("./routes/circus.routes");
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

app.use(express.json());

app.use("/", ticketRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
