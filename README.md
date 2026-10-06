@font-face {
  font-family: "SF Pro Display";
  src: local("SF Pro Display"), local("Segoe UI"), local("Helvetica Neue"), sans-serif;
}

:root {
  --bg: #f4f7fb;
  --panel: rgba(255, 255, 255, 0.82);
  --panel-strong: #ffffff;
  --ink: #131b2a;
  --muted: #60708c;
  --accent: #2f6df6;
  --accent-strong: #1f55d9;
  --accent-soft: rgba(47, 109, 246, 0.12);
  --border: rgba(18, 29, 48, 0.08);
  --shadow: 0 18px 45px rgba(24, 39, 75, 0.12);
  --danger: #d92d5b;
  --danger-soft: rgba(217, 45, 91, 0.12);
  --success: #1f9d6c;
}

* {
  box-sizing: border-box;
}

html {
  background: var(--bg);
  color: var(--ink);
  font-family: "SF Pro Display", "Segoe UI", sans-serif;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(47, 109, 246, 0.16), transparent 26%),
    radial-gradient(circle at bottom right, rgba(138, 92, 246, 0.12), transparent 30%),
    var(--bg);
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 18px 14px 42px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 18px;
  margin-bottom: 18px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-badge {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent), #7c3aed);
  color: white;
  border-radius: 16px;
  font-weight: 700;
  box-shadow: 0 10px 18px rgba(47, 109, 246, 0.25);
}

.eyebrow {
  margin: 0 0 2px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.8rem);
  letter-spacing: -0.05em;
}

h2 {
  margin: 0;
  font-size: 1.08rem;
  letter-spacing: -0.03em;
}

.primary,
.secondary,
.danger,
.chip,
.switch {
  border: none;
  border-radius: 14px;
  padding: 11px 16px;
  font-weight: 700;
  transition: transform 0.18s ease, opacity 0.18s ease;
  -webkit-tap-highlight-color: transparent;
}

.primary:hover,
.secondary:hover,
.danger:hover,
.chip:hover,
.switch:hover {
  transform: translateY(-1px);
}

.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: white;
  box-shadow: 0 12px 22px rgba(47, 109, 246, 0.25);
}

.secondary {
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.danger {
  background: var(--danger-soft);
  color: var(--danger);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.focus-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 16px;
  margin-bottom: 18px;
}

.focus-panel {
  padding: 18px 16px;
}

.focus-head {
  margin-bottom: 14px;
}

.summary-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.stat-card {
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--border);
  border-radius: 18px;
}

.label {
  color: var(--muted);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.stat-card strong {
  font-size: clamp(1.2rem, 2vw, 1.7rem);
  letter-spacing: -0.04em;
}

.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.chip {
  background: var(--accent-soft);
  color: var(--accent-strong);
  padding: 9px 12px;
}

.focus-note {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(47, 109, 246, 0.05);
  border: 1px solid rgba(47, 109, 246, 0.12);
  border-radius: 16px;
  padding: 12px 14px;
}

.focus-note strong {
  font-size: 1rem;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  margin-bottom: 18px;
}

.search-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0 12px;
  background: rgba(255, 255, 255, 0.7);
}

.search-wrap span {
  color: var(--muted);
  font-size: 1.15rem;
}

.search-wrap input,
.toolbar select,
.editor-panel input,
.editor-panel textarea {
  width: 100%;
  border: none;
  background: transparent;
  color: var(--ink);
  outline: none;
}

.toolbar select {
  appearance: none;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  padding: 12px 14px;
  max-width: 180px;
}

.grid {
  display: grid;
  grid-template-columns: minmax(280px, 430px) minmax(0, 1fr);
  gap: 18px;
}

.sidebar,
.editor-panel {
  padding: 16px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.view-switcher {
  display: flex;
  gap: 6px;
  background: rgba(255, 255, 255, 0.64);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 4px;
}

.switch {
  background: transparent;
  color: var(--muted);
  padding: 8px 10px;
  border-radius: 10px;
}

.switch.active {
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.section-head span {
  display: inline-flex;
  min-width: 30px;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  font-size: 0.78rem;
  font-weight: 700;
}

.note-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.note-item {
  width: 100%;
  text-align: left;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 14px 14px 12px;
  transition: border-color 0.18s ease, transform 0.18s ease;
}

.note-item.active {
  border-color: rgba(47, 109, 246, 0.42);
  background: rgba(47, 109, 246, 0.06);
}

.note-item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.note-item strong {
  font-size: 1rem;
  letter-spacing: -0.02em;
}

.note-item-top span {
  color: var(--muted);
  font-size: 0.7rem;
}

.note-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
  min-height: 44px;
}

.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 12px;
}

.note-icons {
  display: flex;
  gap: 8px;
  font-size: 0.92rem;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  display: inline-flex;
  padding: 5px 9px;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.08);
  color: #5b3ad6;
  font-size: 0.7rem;
  font-weight: 700;
}

.editor-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.editor-panel label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.editor-panel input,
.editor-panel textarea {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.76);
  color: var(--ink);
  font-size: 1rem;
  text-transform: none;
  letter-spacing: normal;
}

.editor-panel textarea {
  min-height: 340px;
  resize: vertical;
}

.editor-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: -4px;
}

.editor-meta span {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(47, 109, 246, 0.06);
  color: var(--accent-strong);
  font-size: 0.7rem;
  font-weight: 700;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pinned-panel {
  margin-top: 18px;
  padding: 16px;
}

.pinned-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.mini-note {
  text-align: left;
  padding: 12px 14px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.72);
  color: var(--ink);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-note span {
  color: var(--muted);
  font-size: 0.78rem;
}

.muted {
  color: var(--muted);
}

@media (max-width: 820px) {
  .focus-grid,
  .grid,
  .summary-row {
    grid-template-columns: 1fr;
  }

  .toolbar,
  .topbar {
    flex-direction: column;
    align-items: stretch;
  }

  .toolbar select,
  .header-actions,
  .view-switcher {
    width: 100%;
  }

  .header-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
