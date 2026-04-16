import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Initialize the app logic
    if (window.initHome) window.initHome();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!-- LANDING PAGE -->
      <div id="landing-page">
        <div class="bg-gradient"></div>
        <nav id="nav">
          <div class="nav-inner">
            <a href="#" class="nav-logo">Veda <span>Health</span></a>
            <div class="nav-links">
              <a href="#features" class="nav-link">Features</a>
              <a href="#how" class="nav-link">How it works</a>
              <a href="#testimonials" class="nav-link">Reviews</a>
            </div>
            <a href="#" onclick="event.preventDefault(); window.openVedaApp()" class="nav-cta">Open App →</a>
          </div>
        </nav>
        <section class="hero">
          <div class="hero-inner">
            <div>
              <div class="hero-badge"><div class="hero-badge-dot"></div> Powered by Gemini 2.0</div>
              <h1 class="hero-title">Your <em>AI doctor</em><br>always in your pocket</h1>
              <p class="hero-subtitle">Veda gives you instant health guidance, tracks your vitals, and more.</p>
              <div class="hero-actions">
                <a href="#" onclick="event.preventDefault(); window.openVedaApp()" class="btn-primary">Try Veda Free</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- APP PAGE -->
      <div id="app-page" style="display:none">
        <div id="app">
          <div id="sidebar">
            <div class="logo"><h1>Veda</h1><span>AI Doctor</span></div>
            <div class="nav-item active" onclick="window.switchMode('chat')">Chat</div>
            <div class="nav-item" onclick="window.switchMode('journal')">Journal</div>
            <div class="nav-item" onclick="window.switchMode('score')">Score</div>
          </div>
          <main id="main">
            <div id="desktop-topbar">
              <button class="hamburger" onclick="window.toggleSidebar()">☰</button>
              <div class="dt-logo">Veda</div>
            </div>
            <div id="panel-chat" class="mode-panel active">
              <div class="page-header"><h2>Health Chat</h2></div>
              <div id="chat-messages"></div>
              <div class="input-area">
                <textarea id="chat-input" placeholder="Ask Veda..."></textarea>
                <button onclick="window.sendChat()">Send</button>
              </div>
            </div>
            <div id="panel-journal" class="mode-panel">
              <div class="page-header"><h2>Journal</h2></div>
              <div id="jnl-history-list"></div>
            </div>
          </main>
          <div id="bottom-nav">
            <div class="bnav-inner">
              <div class="bnav-item active" onclick="window.switchMode('home')">Home</div>
              <div class="bnav-item" onclick="window.switchMode('chat')">Chat</div>
              <div class="bnav-item" onclick="window.switchMode('journal')">Journal</div>
            </div>
          </div>
        </div>
      </div>

      <!-- AUTH SECTION -->
      <div id="auth-section" style="display:none;position:fixed;inset:0;background:#060a0d;z-index:100;overflow-y:auto">
        <div class="auth-pg-wrap">
          <div class="auth-hero">
            <div class="auth-hero-title">Veda</div>
            <div class="auth-hero-sub">AI DOCTOR</div>
          </div>
          <div id="auth-login-form">
            <input type="email" id="ap-email" class="auth-input" placeholder="Email address"/>
            <input type="password" id="ap-password" class="auth-input" placeholder="Password"/>
            <button class="auth-submit-btn" onclick="window.openVedaApp(true)">Login →</button>
          </div>
          <div style="text-align:center;margin-top:20px">
            <button onclick="localStorage.setItem('veda_auth_skipped','1'); window.openVedaApp(true);" class="auth-skip-btn">Skip — use without account ›</button>
          </div>
        </div>
      </div>
    ` }} />
  );
}

