import { useEffect, useState } from 'react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [btnHover, setBtnHover] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className={`landing-page ${visible ? 'visible' : ''}`}>
      {/* Interactive background orbs that follow mouse */}
      <div className="landing-bg">
        <div className="orb orb-1" style={{ transform: `translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 40}px)` }} />
        <div className="orb orb-2" style={{ transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px)` }} />
        <div className="orb orb-3" style={{ transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * -20}px)` }} />
        <div className="grid-overlay" />
        <div className="landing-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${(i * 17 + 5) % 100}%`,
                top: `${(i * 13 + 3) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 3)}s`,
                opacity: 0.15 + (i % 4) * 0.05,
              }}
            />
          ))}
        </div>
      </div>
      <div className="landing-content">
        <div className="landing-badge">
          <span className="badge-dot" />
          Premium Case Interview Simulator
        </div>
        
        <div className="landing-logo-container">
          <div className="landing-logo-glow" style={{ transform: btnHover ? 'scale(1.3)' : 'scale(1)' }} />
          <span className="landing-logo-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
          </span>
          <h1 className="landing-title">
            Frame<span className="landing-title-accent">Work</span>
          </h1>
        </div>
        
        <p className="landing-subtitle">
          Master the art of consulting case interviews with AI-powered simulation.
          Practice <strong>200+ real-world cases</strong> across 9 categories —
          with dynamic, context-aware AI that adapts to your every move.
        </p>
        
        <div className="landing-stats">
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Real Cases</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">9</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Difficulties</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">AI</span>
            <span className="stat-label">Powered</span>
          </div>
        </div>

        <button
          className={`landing-cta ${btnHover ? 'hover' : ''}`}
          onClick={onStart}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          <span>Begin Your Interview</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <p className="landing-cta-subtext">Free to use — no account required</p>
      </div>
    </div>
  );
}