import mongoose from 'mongoose';

const BuildingSchema = new mongoose.Schema({
  name: String,
  location: String,
  sensors: {
    temperature: Number,
    humidity: Number,
  }
});

const Building = mongoose.model('Building', BuildingSchema);

export default Building