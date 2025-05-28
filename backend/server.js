import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import buildingsRoutes from './routes/buildings.js'; import dotenv from 'dotenv';
dotenv.config();

const app = express();
const { DB_HOST, PORT = 5000 } = process.env

app.use(cors());
app.use(express.json());

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/buildings', buildingsRoutes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
