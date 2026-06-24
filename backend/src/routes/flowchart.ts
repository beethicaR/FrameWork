import { Router, Request, Response } from 'express';
import { getFlowchart, getSession } from '../services/aiService';

export const flowchartRoutes = Router();

flowchartRoutes.get('/:sessionId', (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const session = getSession(sessionId);
    if (!session) {
      res.status(404).json({ error: 'Session not found' });
      return;
    }
    const flowchart = getFlowchart(sessionId);
    res.json(flowchart);
  } catch (error) {
    console.error('Flowchart error:', error);
    res.status(500).json({ error: 'Failed to generate flowchart' });
  }
});