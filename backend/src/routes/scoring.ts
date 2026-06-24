import { Router, Request, Response } from 'express';
import { evaluateConversation } from '../services/scoringService';
import { getSessionMessages, getSession } from '../services/aiService';

export const scoringRoutes = Router();

scoringRoutes.post('/evaluate', async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.body;

    if (!sessionId) {
      res.status(400).json({ error: 'Missing required field: sessionId' });
      return;
    }

    const session = getSession(sessionId);
    if (!session) {
      res.status(404).json({ error: 'Session not found' });
      return;
    }

    const messages = getSessionMessages(sessionId);
    if (messages.length === 0) {
      res.status(400).json({ error: 'No conversation to evaluate' });
      return;
    }

    const scores = await evaluateConversation(
      session.caseData,
      session.userRole,
      session.difficulty,
      messages
    );

    res.json({ scores, messages });
  } catch (error) {
    console.error('Scoring error:', error);
    res.status(500).json({ error: 'Failed to evaluate session' });
  }
});

scoringRoutes.post('/evaluate-messages', async (req: Request, res: Response) => {
  try {
    const { caseData, userRole, difficulty, messages } = req.body;

    if (!caseData || !userRole || !difficulty || !messages) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const scores = await evaluateConversation(
      caseData,
      userRole,
      difficulty,
      messages
    );

    res.json({ scores });
  } catch (error) {
    console.error('Scoring error:', error);
    res.status(500).json({ error: 'Failed to evaluate messages' });
  }
});