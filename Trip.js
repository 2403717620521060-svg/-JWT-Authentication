const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  destination: String,
  days: Number,
  budget: Number,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Trip", tripSchema);