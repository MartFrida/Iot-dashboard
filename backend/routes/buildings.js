import express from 'express';
import Building from '../models/Building.js';

const buildingsRoutes = express.Router();
buildingsRoutes.get('/', async (req, res) => {
  const buildings = await Building.find();
  res.json(buildings);
});

buildingsRoutes.post('/', async (req, res) => {
  const { name, location } = req.body;
  const building = new Building({
    name,
    location,
    sensors: {
      temperature: Math.random() * 30,
      humidity: Math.random() * 100,
    }
  });
  await building.save();
  res.status(201).json(building);
});

buildingsRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Building.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: 'Error deleting building' });
  }
});

buildingsRoutes.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;

  try {
    const updated = await Building.findByIdAndUpdate(
      id,
      { name, location },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating building' });
  }
});

export default buildingsRoutes;
