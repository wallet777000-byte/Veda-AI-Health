// Veda Health App Logic
// Strictly preserved from original code

(function() {
  window.openVedaApp = function(skipAuth) {
    var user = null;
    try { user = JSON.parse(localStorage.getItem('veda_auth_user')); } catch(e) {}
    if (!skipAuth && !user) {
      var as = document.getElementById('auth-section');
      if (as) as.style.display = 'block';
      return;
    }
    var lp = document.getElementById('landing-page');
    var as = document.getElementById('auth-section');
    var ap = document.getElementById('app-page');
    if (lp) lp.style.display = 'none';
    if (as) as.style.display = 'none';
    if (ap) { ap.style.cssText = 'display:block;position:fixed;inset:0;height:100dvh;overflow:hidden;'; }
    document.body.classList.add('app-mode');
    if (window.initHome) window.initHome();
  };

  window.switchMode = function(mode) {
    document.querySelectorAll('.mode-panel').forEach(p => p.classList.remove('active'));
    var panel = document.getElementById('panel-' + mode);
    if (panel) panel.classList.add('active');
    
    document.querySelectorAll('.nav-item, .bnav-item').forEach(n => n.classList.remove('active'));
    var navItem = document.getElementById('nav-' + mode);
    if (navItem) navItem.classList.add('active');
    var bnavItem = document.getElementById('bn-' + mode);
    if (bnavItem) bnavItem.classList.add('active');
  };

  window.toggleSidebar = function() {
    var sb = document.getElementById('sidebar');
    if (sb) sb.classList.toggle('open');
  };

  window.sendChat = async function() {
    var inp = document.getElementById('chat-input') as HTMLTextAreaElement;
    var text = inp ? inp.value.trim() : '';
    if (!text) return;
    
    var chatBox = document.getElementById('chat-messages');
    if (chatBox) {
      var userMsg = document.createElement('div');
      userMsg.className = 'msg user';
      userMsg.innerHTML = '<div class="msg-bubble">' + text + '</div>';
      chatBox.appendChild(userMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    if (inp) {
      inp.value = '';
    }
    
    // AI Response Simulation (as per original logic)
    setTimeout(() => {
      var aiMsg = document.createElement('div');
      aiMsg.className = 'msg ai';
      aiMsg.innerHTML = '<div class="msg-bubble">I am Veda, your AI assistant. I am currently in demo mode.</div>';
      if (chatBox) {
        chatBox.appendChild(aiMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }, 1000);
  };

  window.initHome = function() {
    console.log('Veda Home Initialized');
  };

  // Initialize on load
  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('veda_auth_skipped')) {
      window.openVedaApp(true);
    }
  });
})();
