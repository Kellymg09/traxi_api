const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// Create a new vehicle
router.post('/', async (req, res) => {
  const newVehicle = req.body;
  try {
    const vehicle = new Vehicle(newVehicle);
    await vehicle.save();
    res.send(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a vehicle
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedVehicle = req.body;
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(id, updatedVehicle, { new: true });
    res.send(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a vehicle
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const vehicle = await Vehicle.findByIdAndDelete(id);
    res.send(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


module.exports = router;