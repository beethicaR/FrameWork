import { Router, Request, Response } from 'express';
import { getAllCases, getCaseById, getCategories, getCasesByFilters, getCaseCount } from '../services/caseService';

export const caseRoutes = Router();

caseRoutes.get('/', (_req: Request, res: Response) => {
  try {
    const cases = getAllCases();
    res.json({ cases, total: cases.length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cases' });
  }
});

caseRoutes.get('/categories', (_req: Request, res: Response) => {
  try {
    const categories = getCategories();
    res.json({ categories });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

caseRoutes.get('/count', (_req: Request, res: Response) => {
  try {
    const count = getCaseCount();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get case count' });
  }
});

caseRoutes.get('/search', (req: Request, res: Response) => {
  try {
    const { category, difficulty, industry, search } = req.query;
    const cases = getCasesByFilters({
      category: category as string | undefined,
      difficulty: difficulty as string | undefined,
      industry: industry as string | undefined,
      search: search as string | undefined,
    });
    res.json({ cases, total: cases.length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to search cases' });
  }
});

caseRoutes.get('/:id', (req: Request, res: Response) => {
  try {
    const caseData = getCaseById(req.params.id);
    if (!caseData) {
      res.status(404).json({ error: 'Case not found' });
      return;
    }
    res.json({ case: caseData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch case' });
  }
});