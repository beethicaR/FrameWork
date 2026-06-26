import type { CaseData, ChatMessage } from '../types';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `HTTP ${response.status}`);
  }
  return response.json();
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE}/cases/categories`);
  const data = await handleResponse<{ categories: string[] }>(res);
  return data.categories;
}

export async function fetchCases(filters?: {
  category?: string;
  difficulty?: string;
  search?: string;
  industry?: string;
}): Promise<CaseData[]> {
  const params = new URLSearchParams();
  if (filters?.category) params.set('category', filters.category);
  if (filters?.difficulty) params.set('difficulty', filters.difficulty);
  if (filters?.search) params.set('search', filters.search);
  if (filters?.industry) params.set('industry', filters.industry);

  const query = params.toString();
  const url = query ? `${API_BASE}/cases/search?${query}` : `${API_BASE}/cases`;
  const res = await fetch(url);
  const data = await handleResponse<{ cases: CaseData[] }>(res);
  return data.cases;
}

export async function fetchCaseById(id: string): Promise<CaseData> {
  const res = await fetch(`${API_BASE}/cases/${id}`);
  const data = await handleResponse<{ case: CaseData }>(res);
  return data.case;
}

export async function startChatSession(
  caseId: string,
  userRole: 'interviewee' | 'interviewer',
  difficulty: string
): Promise<{ sessionId: string; case: CaseData }> {
  const res = await fetch(`${API_BASE}/chat/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ caseId, userRole, difficulty }),
  });
  return handleResponse(res);
}

export async function sendChatMessage(
  sessionId: string,
  caseId: string,
  userRole: 'interviewee' | 'interviewer',
  difficulty: string,
  message: string
): Promise<{ reply: string; sessionId: string }> {
  const res = await fetch(`${API_BASE}/chat/message`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, caseId, userRole, difficulty, message }),
  });
  return handleResponse(res);
}

export async function getChatHistory(sessionId: string): Promise<{ messages: ChatMessage[] }> {
  const res = await fetch(`${API_BASE}/chat/history/${sessionId}`);
  return handleResponse(res);
}

export async function clearChatSession(sessionId: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/chat/session/${sessionId}`, { method: 'DELETE' });
  const data = await handleResponse<{ deleted: boolean }>(res);
  return data.deleted;
}

export async function fetchFlowchart(sessionId: string): Promise<{ nodes: any[]; edges: any[] }> {
  const res = await fetch(`${API_BASE}/flowchart/${sessionId}`);
  return handleResponse(res);
}

export async function fetchCaseCount(): Promise<number> {
  const res = await fetch(`${API_BASE}/cases/count`);
  const data = await handleResponse<{ count: number }>(res);
  return data.count;
}

export async function evaluateSession(sessionId: string): Promise<{
  scores: {
    overall: number;
    structure: { score: number; feedback: string; evidence: string };
    analysis: { score: number; feedback: string; evidence: string };
    recommendations: { score: number; feedback: string; evidence: string };
    communication: { score: number; feedback: string; evidence: string };
    strengths: string[];
    improvements: string[];
    summary: string;
  };
  messages: { role: string; content: string }[];
}> {
  const res = await fetch(`${API_BASE}/scoring/evaluate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId }),
  });
  return handleResponse(res);
}

export async function evaluateConversation(
  caseData: CaseData,
  userRole: string,
  difficulty: string,
  messages: { role: string; content: string }[]
): Promise<{
  scores: {
    overall: number;
    structure: { score: number; feedback: string; evidence: string };
    analysis: { score: number; feedback: string; evidence: string };
    recommendations: { score: number; feedback: string; evidence: string };
    communication: { score: number; feedback: string; evidence: string };
    strengths: string[];
    improvements: string[];
    summary: string;
  };
}> {
  const res = await fetch(`${API_BASE}/scoring/evaluate-messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ caseData, userRole, difficulty, messages }),
  });
  return handleResponse(res);
}
