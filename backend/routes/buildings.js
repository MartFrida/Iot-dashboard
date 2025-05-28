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

export default buildingsRoutes;
