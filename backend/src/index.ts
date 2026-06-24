import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { caseRoutes } from './routes/cases';
import { chatRoutes } from './routes/chat';
import { flowchartRoutes } from './routes/flowchart';
import { scoringRoutes } from './routes/scoring';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '10mb' }));

app.use('/api/cases', caseRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/flowchart', flowchartRoutes);
app.use('/api/scoring', scoringRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Casebook AI Backend running on port ${PORT}`);
});