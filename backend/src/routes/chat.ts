import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { processChat, clearSession, getSessionMessages, initSession } from '../services/aiService';
import { getCaseById } from '../services/caseService';

export const chatRoutes = Router();

chatRoutes.post('/start', async (req: Request, res: Response) => {
  try {
    const { caseId, userRole, difficulty } = req.body;

    if (!caseId || !userRole || !difficulty) {
      res.status(400).json({ error: 'Missing required fields: caseId, userRole, difficulty' });
      return;
    }

    if (!['interviewee', 'interviewer'].includes(userRole)) {
      res.status(400).json({ error: 'userRole must be "interviewee" or "interviewer"' });
      return;
    }

    const caseData = getCaseById(caseId);
    if (!caseData) {
      res.status(404).json({ error: 'Case not found' });
      return;
    }

    const sessionId = uuidv4();

    // Initialize the AI session so history is immediately available
    await initSession(sessionId, caseData, userRole, difficulty);

    res.json({
      sessionId,
      case: caseData,
      userRole,
      difficulty,
      message: 'Session created successfully.'
    });
  } catch (error) {
    console.error('Failed to start chat session:', error);
    res.status(500).json({ error: 'Failed to start chat session' });
  }
});

chatRoutes.post('/message', async (req: Request, res: Response) => {
  try {
    const { sessionId, caseId, userRole, difficulty, message } = req.body;

    if (!sessionId || !message) {
      res.status(400).json({ error: 'Missing required fields: sessionId, message' });
      return;
    }

    const caseData = getCaseById(caseId);
    if (!caseData) {
      res.status(404).json({ error: 'Case not found' });
      return;
    }

    const result = await processChat(sessionId, message, caseData, userRole, difficulty);
    res.json(result);
  } catch (error) {
    console.error('Failed to process message:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

chatRoutes.get('/history/:sessionId', (req: Request, res: Response) => {
  try {
    const messages = getSessionMessages(req.params.sessionId);
    res.json({ messages });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get session history' });
  }
});

chatRoutes.delete('/session/:sessionId', (req: Request, res: Response) => {
  try {
    const deleted = clearSession(req.params.sessionId);
    res.json({ deleted });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear session' });
  }
});