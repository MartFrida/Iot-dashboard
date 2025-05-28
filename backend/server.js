import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import buildingsRoutes from './routes/buildings.js';

const app = express();
const { DB_HOST, PORT = 3001 } = process.env
app.use(cors());
app.use(express.json());

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/buildings', buildingsRoutes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
