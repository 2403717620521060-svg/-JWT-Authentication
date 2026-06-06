const express = require("express");

const Trip = require("../models/Trip");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { destination, days, budget } = req.body;

    const trip = new Trip({
      destination,
      days,
      budget,
      createdBy: req.user.id
    });

    await trip.save();

    res.json(trip);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const trips = await Trip.find({
      createdBy: req.user.id
    });

    res.json(trips);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;