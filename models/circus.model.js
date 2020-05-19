const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  reserverd: {
    type: Boolean,
    required: true,
  },
    seatNumber: {
        type: Number,
    }
});

const TicketSchema = mongoose.model("t�cketSchema", ticketSchema);
module.exports = TicketSchema;
