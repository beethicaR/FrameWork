import { useState } from 'react';
import type { CaseData, ChatMessage, AppScreen, FlowNode, FlowEdge } from './types';
import { fetchFlowchart } from './api/caseApi';
import LandingPage from './components/LandingPage';
import CategorySelect from './components/CategorySelect';
import CaseSelect from './components/CaseSelect';
import RoleSelect from './components/RoleSelect';
import DifficultySelect from './components/DifficultySelect';
import ChatInterface from './components/ChatInterface';
import ResultsScreen from './components/ResultsScreen';

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('landing');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);
  const [selectedRole, setSelectedRole] = useState<'interviewee' | 'interviewer'>('interviewee');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [flowchartNodes, setFlowchartNodes] = useState<FlowNode[]>([]);
  const [flowchartEdges, setFlowchartEdges] = useState<FlowEdge[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const handleStart = () => { window.scrollTo(0, 0); setScreen('category-select'); };

  const handleCategorySelect = (category: string) => {
    window.scrollTo(0, 0);
    setSelectedCategory(category);
    setScreen('case-select');
  };

  const handleCaseSelect = (caseData: CaseData) => {
    window.scrollTo(0, 0);
    setSelectedCase(caseData);
    setScreen('role-select');
  };

  const handleRoleSelect = (role: 'interviewee' | 'interviewer') => {
    window.scrollTo(0, 0);
    setSelectedRole(role);
    setScreen('difficulty-select');
  };

  const handleDifficultySelect = (difficulty: string) => {
    window.scrollTo(0, 0);
    setSelectedDifficulty(difficulty);
    setTimeElapsed(0);
    setChatMessages([]);
    setFlowchartNodes([]);
    setFlowchartEdges([]);
    setSessionId(null);
    setScreen('chat');
  };

  const handleChatFinish = async (messages: ChatMessage[], elapsed: number) => {
    setChatMessages(messages);
    setTimeElapsed(elapsed);
    // Try to fetch the latest flowchart
    if (sessionId) {
      try {
        const flow = await fetchFlowchart(sessionId);
        setFlowchartNodes(flow.nodes || []);
        setFlowchartEdges(flow.edges || []);
      } catch { /* ignore */ }
    }
    setScreen('results');
  };

  const handleSessionCreated = (sid: string) => {
    setSessionId(sid);
  };

  const handleRestart = () => {
    window.scrollTo(0, 0);
    setChatMessages([]);
    setTimeElapsed(0);
    setFlowchartNodes([]);
    setFlowchartEdges([]);
    setSessionId(null);
    setScreen('chat');
  };

  const handleNewCase = () => {
    window.scrollTo(0, 0);
    setSelectedCase(null);
    setSelectedRole('interviewee');
    setSelectedDifficulty('');
    setChatMessages([]);
    setTimeElapsed(0);
    setFlowchartNodes([]);
    setFlowchartEdges([]);
    setSessionId(null);
    setScreen('category-select');
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    switch (screen) {
      case 'category-select':
        setScreen('landing');
        break;
      case 'case-select':
        setScreen('category-select');
        break;
      case 'role-select':
        setScreen('case-select');
        break;
      case 'difficulty-select':
        setScreen('role-select');
        break;
      case 'chat':
        setScreen('difficulty-select');
        break;
      default:
        setScreen('landing');
    }
  };

  return (
    <div className="app">
      {screen === 'landing' && <LandingPage onStart={handleStart} />}
      {screen === 'category-select' && <CategorySelect onSelect={handleCategorySelect} onBack={handleBack} />}
      {screen === 'case-select' && selectedCategory && (
        <CaseSelect category={selectedCategory} onSelect={handleCaseSelect} onBack={handleBack} />
      )}
      {screen === 'role-select' && <RoleSelect onSelect={handleRoleSelect} onBack={handleBack} />}
      {screen === 'difficulty-select' && <DifficultySelect onSelect={handleDifficultySelect} onBack={handleBack} />}
      {screen === 'chat' && selectedCase && (
        <ChatInterface
          caseData={selectedCase}
          userRole={selectedRole}
          difficulty={selectedDifficulty}
          onBack={handleBack}
          onFinish={(messages, elapsed) => handleChatFinish(messages, elapsed)}
          onSessionCreated={handleSessionCreated}
        />
      )}
      {screen === 'results' && selectedCase && (
        <ResultsScreen
          caseData={selectedCase}
          userRole={selectedRole}
          difficulty={selectedDifficulty}
          messages={chatMessages}
          timeElapsed={timeElapsed}
          flowchart={{ nodes: flowchartNodes, edges: flowchartEdges }}
          onRestart={handleRestart}
          onNewCase={handleNewCase}
        />
      )}

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-brand">FrameWork</div>
          <div className="footer-love">
            made with <span className="footer-heart">♥</span> by beethica
          </div>
        </div>
      </footer>
    </div>
  );
}