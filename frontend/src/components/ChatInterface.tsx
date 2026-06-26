import { useState, useEffect, useRef, useCallback } from 'react';
import type { CaseData, ChatMessage, Flowchart, FlowNode, FlowEdge } from '../types';
import { fetchFlowchart, startChatSession, getChatHistory, sendChatMessage } from '../api/caseApi';

// Strip all markdown markers from any text
function clean(t: string): string {
  return t.replace(/\*\*/g, '').replace(/\*/g, '').replace(/__/g, '').replace(/_/g, '').replace(/`/g, '');
}

interface ChatInterfaceProps {
  caseData: CaseData;
  userRole: 'interviewee' | 'interviewer';
  difficulty: string;
  onBack: () => void;
  onFinish: (messages: ChatMessage[], elapsed: number) => void;
  onSessionCreated?: (sessionId: string) => void;
}

// ─── Inline Mini Flowchart Component ───

function MiniFlowchart({ nodes, edges }: { nodes: FlowNode[]; edges: FlowEdge[] }) {
  if (!nodes || nodes.length === 0) {
    return <div className="flowchart-empty">Start the conversation to build your case flowchart</div>;
  }

  const nodeColors: Record<string, string> = {
    problem: '#6366f1',
    analysis: '#f59e0b',
    insight: '#22c55e',
    'dead-end': '#ef4444'
  };

  return (
    <div className="mini-flowchart">
      {nodes.map((node, i) => {
        const incomingEdges = edges.filter(e => e.target === node.id);
        const outgoingEdges = edges.filter(e => e.source === node.id);
        const color = nodeColors[node.type] || '#6366f1';

        return (
          <div key={node.id} className="flowchart-node-wrapper" style={{ animationDelay: `${i * 100}ms` }}>
            {incomingEdges.length > 0 && (
              <div className="flowchart-edge-label">
                {incomingEdges.map(e => (
                  <span key={e.id} className="edge-label">{clean(e.label)}</span>
                ))}
              </div>
            )}
            <div className="flowchart-node" style={{ borderColor: color, backgroundColor: `${color}15` }}>
              <div className="flowchart-node-icon">
                {node.type === 'problem' ? '🎯' : node.type === 'analysis' ? '📊' : node.type === 'insight' ? '💡' : '⚠️'}
              </div>
              <span className="flowchart-node-label">{clean(node.label)}</span>
            </div>
            {outgoingEdges.length > 0 && (
              <div className="flowchart-connector">
                <svg width="16" height="24" viewBox="0 0 16 24">
                  <path d="M8 0v20M1 13l7 7 7-7" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main ChatInterface ───

export default function ChatInterface({ caseData, userRole, difficulty, onBack, onFinish, onSessionCreated }: ChatInterfaceProps) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [notes, setNotes] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [flowchart, setFlowchart] = useState<Flowchart | null>(null);
  const [showFlowchart, setShowFlowchart] = useState(false);
  const [sessionError, setSessionError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasInitRef = useRef<boolean>(false);
  const flowIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!hasInitRef.current) {
      hasInitRef.current = true;
      initSession();
    }
    timerRef.current = setInterval(() => {
      setTimeElapsed((t) => t + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (flowIntervalRef.current) clearInterval(flowIntervalRef.current);
    };
  }, []);

  // Auto-scroll to latest message
  const prevMessagesRef = useRef<ChatMessage[]>([]);
  useEffect(() => {
    if (messages.length === 0) return;
    const lastMsg = messages[messages.length - 1];
    const prevLast = prevMessagesRef.current[prevMessagesRef.current.length - 1];
    if (lastMsg.timestamp === prevLast?.timestamp) return;
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 150);
    prevMessagesRef.current = messages;
  }, [messages]);

  // Poll flowchart periodically
  useEffect(() => {
    if (sessionId) {
      loadFlowchart();
      flowIntervalRef.current = setInterval(loadFlowchart, 5000);
    }
    return () => {
      if (flowIntervalRef.current) clearInterval(flowIntervalRef.current);
    };
  }, [sessionId]);

  async function loadFlowchart() {
    if (!sessionId) return;
    try {
      const data = await fetchFlowchart(sessionId);
      setFlowchart(data);
    } catch { /* ignore polling errors */ }
  }

  function getMockReply(userMsg: string, isInterviewer: boolean): string {
    const lower = userMsg.toLowerCase();
    if (isInterviewer) {
      // AI acts as interviewer
      if (lower.includes('framework') || lower.includes('structure')) {
        return `That's a solid framework to start with. Could you break down each bucket and explain what you'd analyze within market, customer, and financial? For example, in the market section, would you look at size, growth rate, or segmentation?`;
      }
      if (lower.includes('data') || lower.includes('information') || lower.includes('tell me') || lower.includes('give me') || lower.includes('market size') || lower.includes('revenue') || lower.includes('cost')) {
        const facts = caseData.keyFacts.slice(0, 3);
        return `Here are some relevant data points:\n${facts.map(f => `• ${f}`).join('\n')}\n\nWhat would you like to explore next based on these numbers?`;
      }
      if (lower.includes('calculation') || lower.includes('compute') || lower.includes('figure') || lower.includes('number')) {
        return `Walk me through your calculation step by step. What assumptions are you making? I'd like to see the math so we can validate your reasoning.`;
      }
      if (lower.includes('conclusion') || lower.includes('recommend') || lower.includes('final') || lower.includes('advise')) {
        return `Good, let's hear your recommendation. What's your proposed path forward, and what are the key risks you've identified? How would you measure success?`;
      }
      return `Interesting thought. Could you elaborate on that? What specific factors from the case data support your reasoning, and how would you quantify the impact?`;
    } else {
      // AI acts as candidate (interviewee)
      if (lower.includes('framework') || lower.includes('structure') || lower.includes('approach')) {
        return `Thank you. I'd like to approach this case using a structured framework. First, I'd analyze the market size and growth potential. Second, I'd look at the competitive landscape to understand positioning. Third, I'd examine the financial feasibility including revenue projections and cost structure. Finally, I'd synthesize my findings into a clear recommendation with implementation considerations. Does that sound like a good starting point?`;
      }
      if (lower.includes('data') || lower.includes('information') || lower.includes('tell me') || lower.includes('give me') || lower.includes('market size') || lower.includes('revenue')) {
        const facts = caseData.keyFacts.slice(0, 3);
        return `Based on what I've gathered so far, here's my analysis:\n${facts.map(f => `• ${f}`).join('\n')}\n\nI'd like to dig deeper into these numbers. Could you provide more specific data on competitive dynamics or customer segments?`;
      }
      if (lower.includes('calculation') || lower.includes('compute') || lower.includes('figure') || lower.includes('number') || lower.includes('math')) {
        return `Let me walk through the math. Assuming we look at the total addressable market, if the market size is X and we capture Y% share, that gives us Z in revenue. On the cost side, considering the key cost drivers... I estimate margins to be around W%. Does my logic and assumptions seem reasonable?`;
      }
      if (lower.includes('conclusion') || lower.includes('recommend') || lower.includes('final') || lower.includes('advise')) {
        return `My recommendation would be to proceed with the strategy we've outlined. The key rationale is based on the market opportunity and our competitive strengths. However, we need to mitigate risks around execution timeline and potential competitive response. I'd suggest a phased rollout approach with clear KPIs to track progress. Does that address the case objective?`;
      }
      return `Let me think about that. I believe the key insight here is to focus on the core drivers of the business case. The numbers suggest we should prioritize initiatives with the highest return on investment while being mindful of implementation risks. I'm happy to dive deeper into any specific area you'd like to explore further.`;
    }
  }

  async function initSession(retries = 1) {
    try {
      const result = await Promise.race([
        startChatSession(caseData.id, userRole, difficulty),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 10000))
      ]) as { sessionId: string };
      setSessionId(result.sessionId);
      if (onSessionCreated) onSessionCreated(result.sessionId);
      const history = await getChatHistory(result.sessionId);
      if (history.messages && history.messages.length > 0) {
        setMessages(history.messages.map((m: any) => ({ ...m, timestamp: Date.now() })));
      }
      setSessionError(null);
    } catch (err) {
      if (retries > 0) {
        setTimeout(() => initSession(0), 1500);
        return;
      }
      // Fallback: offline mock session
      const mockId = 'offline-' + Date.now();
      setSessionId(mockId);
      if (onSessionCreated) onSessionCreated(mockId);
      setSessionError(null);
      const isInterviewer = userRole === 'interviewee';
      const welcome: ChatMessage = {
        role: 'assistant',
        content: isInterviewer
          ? `Welcome to the ${caseData.title} case interview simulation! I'll be your interviewer today.\n\nLet's begin — please introduce yourself and walk me through how you'd approach this case. What framework would you use to structure your thinking?`
          : `Hello! I'm the candidate for this case. I've reviewed the case prompt and I'm ready to begin. I'll start by outlining my approach to solving this problem.\n\nThank you for this opportunity. Let me walk you through how I'd structure my analysis.`,
        timestamp: Date.now(),
      };
      setMessages([welcome]);
    }
  }

  async function sendMessage() {
    if (!input.trim() || sending || !sessionId) return;

    const userMsg = input.trim();
    const lower = userMsg.toLowerCase();

    // Detect if user wants to end/finish the session via chat
    const endPatterns = [
      /\b(end|finish|done|stop|quit|exit)\b/i,
      /\b(that'?s all|that'?s it|that'?s enough|i'?m done|i am done|i'?m finished|i am finished|wrap up|wind up)\b/i,
      /\b(conclude|summarize|close this)\b/i,
      /\b(results|score|evaluation|summary)\b.*\b(show|see|give|want|view|look)\b/i,
      /\b(show|see|give|want|view)\b.*\b(results|score|evaluation|summary)\b/i,
    ];
    const matchEnd = endPatterns.some(p => p.test(lower));

    if (matchEnd) {
      setInput('');
      setShowEndConfirm(true);
      return;
    }

    setInput('');
    setSending(true);

    const userMessage: ChatMessage = {
      role: 'user',
      content: userMsg,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Try real backend first
      const result = await sendChatMessage(sessionId, caseData.id, userRole, difficulty, userMsg);
      const aiMessage: ChatMessage = {
        role: 'assistant',
        content: result.reply,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      // Fallback to mock
      const isInterviewer = userRole === 'interviewee';
      const reply = getMockReply(userMsg, isInterviewer);
      const aiMessage: ChatMessage = {
        role: 'assistant',
        content: reply,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }, [input, sending, sessionId]);

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  const [showEndConfirm, setShowEndConfirm] = useState(false);

  function handleEndSession() {
    if (timerRef.current) clearInterval(timerRef.current);
    if (flowIntervalRef.current) clearInterval(flowIntervalRef.current);
    onFinish(messages, timeElapsed);
  }

  return (
    <div className="chat-interface">
      {/* Top Bar */}
      <div className="chat-topbar">
        <div className="topbar-left">
          <button className="back-btn" onClick={onBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Exit
          </button>
          <div className="topbar-info">
            <span className="topbar-title">{caseData.title}</span>
            <span className="topbar-meta">
              {userRole === 'interviewee' ? '👨‍💼 Interviewee' : '👩‍💼 Interviewer'} · {difficulty}
            </span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="timer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            {formatTime(timeElapsed)}
          </div>
          <button className="topbar-btn" onClick={() => setShowFlowchart(!showFlowchart)} title="Case Flowchart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </button>
          <button className="topbar-btn" onClick={() => setShowNotes(!showNotes)} title="Notes">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </button>
          <button className="topbar-btn end-session" onClick={() => setShowEndConfirm(true)} title="End Session">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="9" x2="15" y2="15" /><line x1="15" y1="9" x2="9" y2="15" />
            </svg>
          </button>
        </div>
      </div>

      <div className="chat-panels">
        {/* Left Panel: Persistent Data & Hints */}
        <div className="chat-sidebar">
          {/* Case Info Section */}
          <div className="sidebar-section">
            <div className="sidebar-section-header">
              <span className="sidebar-icon">📋</span>
              <span>Case Prompt</span>
            </div>
            <div className="sidebar-content">
              <p className="sidebar-prompt">{clean(caseData.prompt)}</p>
            </div>
          </div>

          {/* Context Section */}
          <div className="sidebar-section">
            <div className="sidebar-section-header">
              <span className="sidebar-icon">📖</span>
              <span>Context</span>
            </div>
            <div className="sidebar-content">
              <p className="sidebar-context">{clean(caseData.context)}</p>
            </div>
          </div>

          {/* Key Facts Section - ALWAYS VISIBLE */}
          <div className="sidebar-section">
            <div className="sidebar-section-header">
              <span className="sidebar-icon">🔑</span>
              <span>Key Facts & Data</span>
              <span className="sidebar-badge">{caseData.keyFacts.length}</span>
            </div>
            <div className="sidebar-content">
              <ul className="sidebar-facts">
                {caseData.keyFacts.map((fact, i) => (
                  <li key={i}>
                    <span className="fact-dot" />
                    <span>{clean(fact)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Framework Hints Section - ALWAYS VISIBLE */}
          <div className="sidebar-section">
            <div className="sidebar-section-header">
              <span className="sidebar-icon">💡</span>
              <span>Framework Hints</span>
            </div>
            <div className="sidebar-content">
              <ul className="sidebar-hints">
                {caseData.frameworkHints.map((hint, i) => (
                  <li key={i}>
                    <span className="hint-num">{i + 1}</span>
                    <span>{clean(hint)}</span>
                  </li>
                ))}
              </ul>
              {caseData.expectedCalculations && caseData.expectedCalculations.length > 0 && (
                <>
                  <div className="sidebar-subheader">Expected Calculations</div>
                  <ul className="sidebar-hints">
                    {caseData.expectedCalculations.map((calc, i) => (
                      <li key={i}>
                        <span className="hint-num calc">∑</span>
                        <span>{calc}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Success Criteria */}
          <div className="sidebar-section">
            <div className="sidebar-section-header">
              <span className="sidebar-icon">🎯</span>
              <span>Success Criteria</span>
            </div>
            <div className="sidebar-content">
              <ul className="sidebar-hints">
                {caseData.successCriteria.map((crit, i) => (
                  <li key={i}>
                    <span className="hint-num">{i + 1}</span>
                    <span>{clean(crit)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Center: Chat Area */}
      <div className="chat-main">
        <div className="chat-messages">
          {messages.length === 0 && !sessionError ? (
            <div className="chat-welcome">
              <div className="welcome-spinner" />
              <p>Starting your case session...</p>
            </div>
          ) : messages.length === 0 && sessionError ? (
            <div className="chat-welcome" style={{ textAlign: 'center', padding: 40 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
              <p style={{ color: 'var(--warning)', marginBottom: 16 }}>{sessionError}</p>
              <button className="btn-primary" onClick={() => initSession()} style={{ marginTop: 8 }}>
                Retry Connection
              </button>
            </div>
          ) : (
              messages.map((msg, i) => (
                <div key={i} className={`message ${msg.role === 'user' ? 'user' : 'assistant'}`}>
                  <div className="message-avatar">
                    {msg.role === 'user' ? '👤' : userRole === 'interviewee' ? '👨‍💼' : '👩‍💼'}
                  </div>
                  <div className="message-content">
                    <div className="message-sender">
                      {msg.role === 'user' ? 'You' : userRole === 'interviewee' ? 'Interviewer (AI)' : 'Candidate (AI)'}
                    </div>
                    <div className="message-text">
                      {msg.content.split('\n').map((line, j) => (
                        <p key={j}>{clean(line)}</p>
                      ))}
                    </div>
                    <div className="message-time">
                      {new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))
            )}
            {sending && (
              <div className="message assistant">
                <div className="message-avatar">{userRole === 'interviewee' ? '👨‍💼' : '👩‍💼'}</div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <div className="chat-input-wrapper">
              <textarea
                ref={inputRef}
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={userRole === 'interviewee' ? 'Type your answer, ask for data, or present your framework...' : 'Ask a question, challenge the candidate, or provide feedback...'}
                rows={2}
                disabled={sending}
              />
              <button
                className="send-btn"
                onClick={sendMessage}
                disabled={!input.trim() || sending}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <div className="chat-input-hint">
              Press Enter to send · Shift+Enter for new line
            </div>
          </div>
        </div>

        {/* Right Panel: Flowchart / Notes */}
        {/* End Session Confirmation Modal */}
        {showEndConfirm && (
          <div className="modal-overlay" onClick={() => setShowEndConfirm(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h3>End Interview Session?</h3>
              <p>Your conversation will be evaluated and you'll receive a detailed score report.</p>
              <div className="modal-actions">
                <button className="btn-primary" onClick={handleEndSession}>
                  End & See Results
                </button>
                <button className="btn-secondary" onClick={() => setShowEndConfirm(false)}>
                  Continue Interview
                </button>
              </div>
            </div>
          </div>
        )}

        {(showFlowchart || showNotes) && (
          <div className="chat-right-panel">
            {showFlowchart && (
              <div className="panel flowchart-panel">
                <div className="panel-header">
                  <h3>📊 Case Flowchart</h3>
                  <button onClick={() => setShowFlowchart(false)}>✕</button>
                </div>
                <div className="panel-body">
                  <MiniFlowchart nodes={flowchart?.nodes || []} edges={flowchart?.edges || []} />
                  <p className="flowchart-hint">
                    This chart updates as your conversation progresses. Each node represents a step in your analysis.
                  </p>
                </div>
              </div>
            )}
            {showNotes && (
              <div className="panel notes-panel">
                <div className="panel-header">
                  <h3>📝 Your Notes</h3>
                  <button onClick={() => setShowNotes(false)}>✕</button>
                </div>
                <div className="panel-body">
                  <textarea
                    className="notes-input"
                    placeholder="Jot down your thoughts, calculations, framework ideas..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}