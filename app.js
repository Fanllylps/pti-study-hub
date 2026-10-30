import { course, courseMeta } from './courseData.js';
import { tugasData } from './tugasData.js';
import { utsGuide } from './utsGuide.js';

const app = document.querySelector('#app-main');
const nav = document.querySelector('#module-nav');
const overlay = document.querySelector('#search-overlay');
const searchInput = document.querySelector('#global-search');
const searchResults = document.querySelector('#search-results');

const readKey = 'pti-study-progress-v1';
const themeKey = 'pti-study-theme-v1';
const scrollBehavior = () => window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ? 'auto' : 'smooth';

const savedRead = JSON.parse(localStorage.getItem(readKey) || '[]');
const state = {
  page: 'dashboard', // 'dashboard' | 'tugas' | 'guide' | 'module'
  guideMeeting: 'all',
  active: null,
  cheat: false,
  tugasTab: 'overview',
  read: new Set(savedRead),
  theme: localStorage.getItem(themeKey) || 'light',
  ui: {
    // M1
    dikwScenario: 'retail',
    dikwStep: 0,
    compFail: 'brainware',
    // M2
    cpuStep: 0,
    latencyScale: 'human',
    // M3
    stackLayer: 'os',
    enterpriseSys: 'erp',
    // M4
    osScheduler: 0,
    osRamLoad: 'normal',
    // M5
    netHop: 0,
    netScope: 'lan',
    // M6
    erdEntity: 'pesanan',
    concurrencyMode: 'dbms',
    // M7
    pipeStep: 0,
    simDataVal: 250
  },
  flash: {},
  quiz: {},
  searchItems: [],
  searchCursor: -1,
  searchHighlightTimer: null,
  searchFrequency: new Map()
};

const $ = (selector, root = document) => root.querySelector(selector);
const esc = (value = '') => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const currentModule = () => course.find(item => item.id === state.active);

const pill = (label, action, value, active) => `<button class="pill-button ${active ? 'active' : ''}" data-action="${action}" data-value="${esc(value)}">${esc(label)}</button>`;
const panelHead = (title, description, tag = 'INTERAKTIF') => `<div class="visual-panel-head"><div><h3>${title}</h3><p>${description}</p></div><span class="visual-label">${tag}</span></div>`;
const detailBox = (title, text, extra = '') => `<div class="detail-box"><strong>${esc(title)}</strong><p>${esc(text)}${extra}</p></div>`;

const icon = name => {
  const paths = {
    sun: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    moon: '<path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.6 8.6 0 1 0 20.4 15.2Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.check}</svg>`;
};

function progressFor(mod) {
  if (!mod || !mod.sections) return 0;
  const count = mod.sections.length;
  if (!count) return 0;
  const done = mod.sections.reduce((n, _, i) => n + (state.read.has(`${mod.id}:${i}`) ? 1 : 0), 0);
  return Math.round(done / count * 100);
}

function overallProgress() {
  const total = course.reduce((sum, mod) => sum + mod.sections.length, 0);
  if (!total) return 0;
  const done = state.read.size;
  return Math.min(100, Math.round(done / total * 100));
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const iconEl = $('#theme-icon');
  if (iconEl) iconEl.innerHTML = icon(state.theme === 'light' ? 'moon' : 'sun');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = state.theme === 'light' ? '#f8f7f4' : '#0f1012';
}

function renderNav() {
  document.querySelectorAll('[data-nav-page]').forEach(link => {
    const active = link.dataset.navPage === state.page && (state.page !== 'module' || !state.active);
    link.classList.toggle('active', active);
    link.setAttribute('aria-current', active ? 'page' : 'false');
  });

  nav.innerHTML = course.map(mod => {
    const percent = progressFor(mod);
    const isActive = state.page === 'module' && state.active === mod.id;
    return `<button class="module-link ${isActive ? 'active' : ''}" data-action="module" data-module="${mod.id}" aria-current="${isActive ? 'page' : 'false'}">
      <span class="module-number">${mod.no}</span>
      <span class="module-name"><strong>${esc(mod.title)}</strong><span>${esc(mod.short)}</span></span>
      <span class="module-percent">${percent}%</span>
      <span class="module-progress"><span style="--progress-value:${percent / 100}"></span></span>
    </button>`;
  }).join('');

  const overall = overallProgress();
  const labelEl = $('#overall-progress-label');
  if (labelEl) labelEl.textContent = `${overall}%`;
  const barEl = $('#overall-progress-bar');
  if (barEl) barEl.style.transform = `scaleX(${overall / 100})`;
}

function setBreadcrumb() {
  const crumb = $('#breadcrumbs');
  if (!crumb) return;
  const mod = currentModule();
  let current = 'OVERVIEW';
  if (state.page === 'tugas') current = 'TUGAS KELOMPOK';
  else if (state.page === 'guide') current = 'KISI-KISI UTS';
  else if (mod) current = `${mod.no} · ${esc(mod.title).toUpperCase()}`;

  crumb.innerHTML = `<span>RUANG BELAJAR</span><i>/</i><span>${current}</span>`;
}

// -----------------------------------------------------------------------------
// DASHBOARD VIEW
// -----------------------------------------------------------------------------
function renderDashboard() {
  const overall = overallProgress();
  const next = course.find(mod => progressFor(mod) < 100) || course[0];
  const completed = course.filter(mod => progressFor(mod) === 100).length;

  app.innerHTML = `
    <section class="dashboard-head">
      <div>
        <div class="eyebrow">${esc(courseMeta.program)} <span>·</span> ${esc(courseMeta.credits)}</div>
        <h1>Ruang Belajar PTI</h1>
        <p>Tujuh modul perkuliahan lengkap, visualisasi arsitektur komputasi, analisis tugas kelompok 3 business case, dan kisi-kisi evaluasi UTS.</p>
      </div>
      <div class="course-code">
        <strong>${esc(courseMeta.author)}</strong>
        Pengantar Teknologi Informasi<br/>7 Modul Pembelajaran · S1 Bisnis Digital
      </div>
    </section>

    <section class="dashboard-bento" aria-label="Ringkasan progres">
      <div class="overview-panel">
        <div class="overview-copy">
          <div class="mono-label">PROGRES BELAJAR</div>
          <h2>${completed ? `${completed} dari 7 modul selesai` : 'Progres Anda tersimpan di sini'}</h2>
          <p>Bagian yang Anda tandai selesai disimpan otomatis di perangkat ini. Pelajari materi, amati visualisasi interaktif, dan uji pemahaman lewat kuis.</p>
        </div>
        <div class="overall-ring" style="--progress:${overall}%">
          <strong>${overall}%</strong>
        </div>
      </div>
      <div class="overview-side">
        <div>
          <div class="mono-label">LANJUTKAN BELAJAR</div>
          <strong>${esc(next.title)}</strong>
          <p>Pertemuan ${next.no} · ${progressFor(next)}% selesai dibaca</p>
        </div>
        <button class="text-link" data-action="module" data-module="${next.id}">Buka modul <span>↗</span></button>
      </div>
    </section>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 12px; margin: 18px 0 28px;">
      <section class="guide-promo" style="margin: 0; background: var(--surface);" aria-label="Tugas Kelompok">
        <div>
          <span class="mono-label">TUGAS KELOMPOK · 3 BUSINESS CASES</span>
          <h2>Implementasi TI Bisnis Digital</h2>
          <p>Analisis arsitektur sistem, spesifikasi hardware, database, dan kerangka nilai 5 langkah pada 3 arketipe bisnis nyata.</p>
        </div>
        <button class="text-link" data-action="tugas">Buka tugas <span>↗</span></button>
      </section>

      <section class="guide-promo" style="margin: 0; background: var(--surface);" aria-label="Persiapan UTS">
        <div>
          <span class="mono-label">PERSIAPAN UTS · 7 PERTEMUAN</span>
          <h2>Kisi-kisi & Pembahasan Esai</h2>
          <p>14 pertanyaan esai komprehensif dengan pembahasan mendalam, poin kunci, dan referensi langsung modul kuliah.</p>
        </div>
        <button class="text-link" data-action="guide">Buka kisi-kisi <span>↗</span></button>
      </section>
    </div>

    <section aria-labelledby="module-list-title">
      <div class="module-index-head">
        <h2 id="module-list-title">Daftar Modul Perkuliahan</h2>
        <span>01 — 07 / PERTEMUAN</span>
      </div>
      <ol class="dashboard-module-list">
        ${course.map(mod => {
          const percent = progressFor(mod);
          return `<li class="dashboard-module" role="button" tabindex="0" data-action="module" data-module="${mod.id}">
            <span class="dash-number">${mod.no}</span>
            <span class="dash-title">
              <strong>${esc(mod.title)}</strong>
              <span>${mod.sections.length} topik · visualisasi sistem, flashcards & mini kuis</span>
            </span>
            <span class="dash-outcome">${esc(mod.outcome)}</span>
            <span class="dash-progress">${percent}%<i><span style="--progress-value:${percent / 100}"></span></i></span>
            <span class="dash-arrow">↗</span>
          </li>`;
        }).join('')}
      </ol>
    </section>

    <div class="dashboard-note">
      <span><strong>Cara Memanfaatkan Ruang Belajar</strong> — pilih topik, pelajari visualisasi interaktifnya, tandai bagian yang tuntas dibaca, lalu uji ingatan melalui flashcards dan mini kuis.</span>
      <span>Total materi: <strong>${course.reduce((n, mod) => n + mod.sections.length, 0)} subbab materi</strong></span>
    </div>

    <details class="course-admin">
      <summary>Administrasi perkuliahan · komponen penilaian, bobot mutu, dan syarat ujian</summary>
      <div class="admin-body">
        <div>
          <span class="mono-label">KOMPONEN PENILAIAN</span>
          <ul>${courseMeta.assessment.breakdown.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
        </div>
        <div>
          <span class="mono-label">SKALA KONVERSI NILAI</span>
          <table class="grade-table">
            <thead><tr><th>Nilai Angka</th><th>Huruf</th><th>Bobot</th></tr></thead>
            <tbody>
              ${courseMeta.assessment.grades.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
        </div>
        <div>
          <span class="mono-label">PERSYARATAN UJIAN & KELULUSAN</span>
          <ul>${courseMeta.assessment.eligibility.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
        </div>
      </div>
    </details>
  `;
}

// -----------------------------------------------------------------------------
// TUGAS KELOMPOK VIEW (100% EMOJI-FREE)
// -----------------------------------------------------------------------------
function renderTugas() {
  const currentTab = state.tugasTab;
  const activeCase = tugasData.cases.find(c => c.id === currentTab) || tugasData.cases[0];

  app.innerHTML = `
    <article class="reading-pane">
      <section class="tugas-head">
        <div class="eyebrow">TUGAS KELOMPOK BISNIS DIGITAL <span>·</span> ARSITEKTUR & IMPLEMENTASI TI</div>
        <h1>${esc(tugasData.title)}</h1>
        <p>${esc(tugasData.subtitle)}</p>
        <div class="tugas-quote-box">
          <p>“${esc(tugasData.quote1)}”</p>
          <p>“${esc(tugasData.quote2)}”</p>
        </div>
      </section>

      <div class="tugas-nav-tabs" role="tablist">
        <button class="tugas-tab-btn ${currentTab === 'overview' ? 'active' : ''}" data-action="tugas-tab" data-value="overview">
          Kerangka 5 Langkah
        </button>
        <button class="tugas-tab-btn ${currentTab === 'coffeeshop' ? 'active' : ''}" data-action="tugas-tab" data-value="coffeeshop">
          Kasus 1: Coffee Shop
        </button>
        <button class="tugas-tab-btn ${currentTab === 'marketplace' ? 'active' : ''}" data-action="tugas-tab" data-value="marketplace">
          Kasus 2: Marketplace
        </button>
        <button class="tugas-tab-btn ${currentTab === 'transport' ? 'active' : ''}" data-action="tugas-tab" data-value="transport">
          Kasus 3: Transportasi Digital
        </button>
        <button class="tugas-tab-btn ${currentTab === 'matrix' ? 'active' : ''}" data-action="tugas-tab" data-value="matrix">
          Matriks Komparasi
        </button>
        <button class="tugas-tab-btn ${currentTab === 'rubric' ? 'active' : ''}" data-action="tugas-tab" data-value="rubric">
          Panduan & Rubrik
        </button>
      </div>

      <div id="tugas-tab-content">
        ${renderTugasTabContent(currentTab, activeCase)}
      </div>
    </article>
  `;
}

function renderTugasTabContent(tab, activeCase) {
  if (tab === 'overview') {
    return `
      <section class="tugas-section">
        <div class="tugas-section-title">
          <span>Kerangka Kerja Terpadu (The 5-Step Value Chain)</span>
          <span style="font-size:11px; color:var(--subtle); font-family:var(--font-mono);">TRANSFORMASI DATA KE NILAI</span>
        </div>
        <p style="color:var(--muted); font-size:13px; line-height:1.6;">
          Teknologi informasi dalam bisnis bukan sekadar instalasi perangkat keras atau program, melainkan sebuah rantai nilai sistematis yang mengubah rekaman fakta transaksi mentah menjadi keputusan manajerial dan keuntungan ekonomi terukur.
        </p>

        <div class="framework-strip">
          ${tugasData.frameworkSteps.map(s => `
            <div class="framework-card">
              <span class="framework-step-num">${esc(s.code)}</span>
              <div class="framework-name">${esc(s.name)}</div>
              <div class="framework-q">${esc(s.question)}</div>
              <p style="font-size:11px; color:var(--muted); margin-top:8px; line-height:1.45;">${esc(s.desc)}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="tugas-section">
        <div class="tugas-section-title"><span>Evolusi Peran Teknologi dalam Bisnis</span></div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
          ${tugasData.evolution.map(ev => `
            <div class="metric-box" style="border-top: 2px solid var(--accent); padding:16px;">
              <span class="mono-label">LEVEL ${ev.level} · ${esc(ev.business).toUpperCase()}</span>
              <h3 style="font:22px/1.2 var(--font-display); margin:6px 0;">${esc(ev.title)}</h3>
              <strong style="font-size:11px; color:var(--accent); text-transform:uppercase; font-family:var(--font-mono);">${esc(ev.subtitle)}</strong>
              <p style="font-size:12px; color:var(--muted); margin-top:8px; line-height:1.5;">${esc(ev.desc)}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="tugas-section">
        <div class="tugas-section-title"><span>5 Prinsip Penting untuk Mahasiswa Bisnis Digital</span></div>
        <div style="display:grid; gap:10px;">
          ${tugasData.principles.map(p => `
            <div style="display:flex; gap:14px; align-items:flex-start; padding:14px 18px; background:var(--surface); border:1px solid var(--line); border-radius:0;">
              <span style="font:16px var(--font-mono); font-weight:700; color:var(--accent);">${p.no}</span>
              <div>
                <strong style="font-size:13px; color:var(--ink);">${esc(p.title)}</strong>
                <p style="margin:4px 0 0; font-size:12px; color:var(--muted); line-height:1.5;">${esc(p.desc)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  if (tab === 'coffeeshop' || tab === 'marketplace' || tab === 'transport') {
    const c = tugasData.cases.find(item => item.id === tab);
    return `
      <section class="case-card">
        <div class="case-header">
          <div>
            <div class="mono-label">STUDI KASUS ${c.no}</div>
            <h2 style="font:32px/1.1 var(--font-display); margin:4px 0;">${esc(c.name)}</h2>
            <p style="color:var(--muted); font-size:13px; margin:4px 0 0;">${esc(c.tagline)}</p>
          </div>
          <span class="case-badge">${esc(c.scaleBadge)}</span>
        </div>

        <p style="font-size:13px; color:var(--ink); line-height:1.6; margin-bottom:16px;">
          <strong>Ringkasan Eksekutif:</strong> ${esc(c.summary)}
        </p>

        <div class="case-metrics-grid">
          ${Object.entries(c.metrics).map(([k, v]) => `
            <div class="metric-box">
              <span class="metric-label">${esc(k)}</span>
              <div class="metric-value">${esc(v)}</div>
            </div>
          `).join('')}
        </div>

        <div class="tugas-section">
          <h3 style="font:20px/1.2 var(--font-display); margin:20px 0 10px;">Arsitektur & Alur Kerja Sistem (System Workflow)</h3>
          <div class="arch-flow-wrap">
            ${c.architecture.map((a, i) => `
              <div class="arch-step">
                <span class="arch-from">${i + 1}. ${esc(a.from)}</span>
                <span class="arch-arrow">➔</span>
                <div>
                  <strong style="color:var(--ink);">${esc(a.to)}</strong>
                  <div class="arch-action">${esc(a.action)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="tugas-section">
          <h3 style="font:20px/1.2 var(--font-display); margin:20px 0 10px;">Spesifikasi Hardware & Infrastruktur</h3>
          <div style="overflow-x:auto;">
            <table class="spec-table-styled">
              <thead>
                <tr><th>Perangkat / Komponen</th><th>Rekomendasi Spesifikasi Teknis</th><th>Peran dalam Bisnis</th></tr>
              </thead>
              <tbody>
                ${c.hardware.map(h => `
                  <tr>
                    <td><strong>${esc(h.device)}</strong></td>
                    <td style="font-family:var(--font-mono); font-size:11px; color:var(--indigo);">${esc(h.spec)}</td>
                    <td style="color:var(--muted);">${esc(h.role)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="tugas-section">
          <h3 style="font:20px/1.2 var(--font-display); margin:20px 0 10px;">Software Stack & Layanan Aplikasi Utama</h3>
          <div style="overflow-x:auto;">
            <table class="spec-table-styled">
              <thead>
                <tr><th>Kategori Software</th><th>Contoh Platform / Teknologi</th><th>Fungsi Operasional</th></tr>
              </thead>
              <tbody>
                ${c.software.map(s => `
                  <tr>
                    <td><strong>${esc(s.type)}</strong></td>
                    <td style="color:var(--accent); font-weight:600; font-family:var(--font-mono); font-size:11px;">${esc(s.examples)}</td>
                    <td style="color:var(--muted);">${esc(s.desc)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="tugas-section">
          <h3 style="font:20px/1.2 var(--font-display); margin:20px 0 10px;">Penerapan Kerangka 5 Langkah Nilai Bisnis</h3>
          <div class="value-chain-grid">
            <div class="vc-block focus-1">
              <h4>01. Data yang Dikumpulkan</h4>
              <ul>${c.valueChain.data.map(d => `<li>${esc(d)}</li>`).join('')}</ul>
            </div>
            <div class="vc-block focus-2">
              <h4>02. Mekanisme Processing</h4>
              <p style="font-size:12px; color:var(--muted); line-height:1.5;">${esc(c.valueChain.processing)}</p>
            </div>
            <div class="vc-block focus-3">
              <h4>03. Informasi yang Dihasilkan</h4>
              <ul>${c.valueChain.information.map(inf => `<li>${esc(inf)}</li>`).join('')}</ul>
            </div>
            <div class="vc-block focus-4">
              <h4>04. Keputusan Bisnis</h4>
              <ul>${c.valueChain.decisions.map(dec => `<li>${esc(dec)}</li>`).join('')}</ul>
            </div>
            <div class="vc-block focus-5" style="grid-column: 1 / -1;">
              <h4>05. Nilai Bisnis Nyata (Business Value Impact)</h4>
              <ul>${c.valueChain.businessValue.map(val => `<li><strong>${esc(val)}</strong></li>`).join('')}</ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  if (tab === 'matrix') {
    return `
      <section class="case-card">
        <div class="mono-label">ANALISIS KOMPARATIF</div>
        <h2 style="font:32px/1.1 var(--font-display); margin:4px 0 14px;">Perbandingan Spesifikasi Antar-Model Bisnis</h2>
        <p style="color:var(--muted); font-size:13px; line-height:1.6; margin-bottom:18px;">
          Menunjukkan bagaimana skala dan model operasi bisnis mendikte arsitektur komputasi, perangkat keras, dan kebutuhan infrastruktur cloud.
        </p>

        <div style="overflow-x:auto;">
          <table class="spec-table-styled">
            <thead>
              <tr>
                <th style="width:20%;">Dimensi Perbandingan</th>
                <th style="width:26%;">1. Coffee Shop (Ritel Fisik)</th>
                <th style="width:27%;">2. Marketplace (Multi-Pihak)</th>
                <th style="width:27%;">3. Transportasi Digital (Real-Time)</th>
              </tr>
            </thead>
            <tbody>
              ${tugasData.comparisonTable.map(row => `
                <tr>
                  <td><strong>${esc(row.dimension)}</strong></td>
                  <td style="color:var(--muted);">${esc(row.coffeeshop)}</td>
                  <td style="color:var(--muted);">${esc(row.marketplace)}</td>
                  <td style="color:var(--muted);">${esc(row.transport)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  if (tab === 'rubric') {
    return `
      <section class="case-card">
        <div class="mono-label">PANDUAN PENGERJAAN & RUBRIK PENILAIAN</div>
        <h2 style="font:32px/1.1 var(--font-display); margin:4px 0 14px;">Pedoman Penyusunan Tugas Kelompok</h2>
        
        <div class="tugas-section">
          <h3 style="font:20px/1.2 var(--font-display); margin:12px 0 8px;">Tujuan Tugas Kelompok</h3>
          <ul style="padding-left:20px; font-size:13px; color:var(--muted); line-height:1.6;">
            ${tugasData.assignmentGuide.objectives.map(o => `<li>${esc(o)}</li>`).join('')}
          </ul>
        </div>

        <div class="tugas-section">
          <h3 style="font:20px/1.2 var(--font-display); margin:16px 0 8px;">Bentuk Luaran (Deliverables)</h3>
          <div style="display:grid; gap:10px;">
            ${tugasData.assignmentGuide.deliverables.map(d => `
              <div style="padding:14px 16px; background:var(--surface-muted); border:1px solid var(--line);">
                <strong style="color:var(--ink); font-size:13px;">${esc(d.name)}</strong>
                <p style="margin:4px 0 0; font-size:12px; color:var(--muted); line-height:1.5;">${esc(d.desc)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="tugas-section">
          <h3 style="font:20px/1.2 var(--font-display); margin:16px 0 8px;">Rubrik Penilaian Dosen</h3>
          <div style="overflow-x:auto;">
            <table class="spec-table-styled">
              <thead>
                <tr><th>Aspek Penilaian</th><th>Bobot</th><th>Kriteria Keberhasilan</th></tr>
              </thead>
              <tbody>
                ${tugasData.assignmentGuide.rubric.map(r => `
                  <tr>
                    <td><strong>${esc(r.aspect)}</strong></td>
                    <td style="color:var(--accent); font-weight:700; font-family:var(--font-mono);">${esc(r.weight)}</td>
                    <td style="color:var(--muted);">${esc(r.desc)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  return '';
}

// -----------------------------------------------------------------------------
// KISI-KISI UTS VIEW
// -----------------------------------------------------------------------------
function renderGuide() {
  const visible = state.guideMeeting === 'all'
    ? utsGuide
    : utsGuide.filter(item => String(item.meeting) === String(state.guideMeeting));

  const meetings = [
    { id: 'all', label: 'Semua Soal (14)' },
    { id: '1', label: 'P-1 Konsep Dasar' },
    { id: '2', label: 'P-2 Hardware' },
    { id: '3', label: 'P-3 Software' },
    { id: '4', label: 'P-4 Sistem Operasi' },
    { id: '5', label: 'P-5 Jaringan' },
    { id: '6', label: 'P-6 Basis Data' },
    { id: '7', label: 'P-7 Aplikasi Perkantoran' },
    { id: '0', label: 'Tugas Kelompok' }
  ];

  app.innerHTML = `
    <article class="reading-pane">
      <header class="guide-head">
        <div class="eyebrow">PENGANTAR TEKNOLOGI INFORMASI <span>·</span> EVALUASI TENGAH SEMESTER</div>
        <h1>Kisi-kisi & Pembahasan UTS</h1>
        <p>14 pertanyaan esai terarah dari seluruh materi modul 1 s.d. 7 dan studi kasus tugas kelompok, lengkap dengan poin kunci dan tautan subbab.</p>
        <div class="guide-summary">
          <span><strong>14</strong> Pertanyaan Pembahasan</span>
          <span><strong>7</strong> Modul Pertemuan</span>
          <span><strong>1</strong> Kerangka Tugas Kelompok</span>
        </div>
      </header>

      <div class="guide-filters">
        ${meetings.map(m => `
          <button class="pill-button ${state.guideMeeting === m.id ? 'active' : ''}" data-action="guide-filter" data-value="${m.id}">
            ${esc(m.label)}
          </button>
        `).join('')}
      </div>

      <div class="guide-list">
        ${visible.map(item => `
          <div class="guide-card" id="guide-q-${item.number}">
            <div class="guide-question">
              <span class="guide-number">${String(item.number).padStart(2, '0')}</span>
              <div>
                <span class="guide-kicker">${item.meeting === 0 ? 'TUGAS KELOMPOK' : `PERTEMUAN ${item.meeting}`}</span>
                <h3>${esc(item.question)}</h3>
              </div>
            </div>
            <div class="guide-answer">
              <span class="guide-answer-label">JAWABAN KOMPREHENSIF</span>
              <p>${esc(item.answer)}</p>
              <ul>
                ${item.points.map(pt => `<li>${esc(pt)}</li>`).join('')}
              </ul>
              <button class="guide-reference" data-action="${item.module === 'tugas' ? 'tugas' : 'guide-topic'}" data-module="${item.module}" data-section="${item.section}" data-target="${item.target}">
                Rujukan Materi: <strong>${esc(item.reference)}</strong> <span>➔</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </article>
  `;
}

// -----------------------------------------------------------------------------
// MODULE READING VIEW
// -----------------------------------------------------------------------------
function renderModule() {
  const mod = currentModule();
  if (!mod) return;

  const percent = progressFor(mod);
  const done = percent === 100;

  app.innerHTML = `
    <article class="reading-pane">
      <header class="module-head">
        <div class="module-hero-row">
          <div>
            <div class="eyebrow">PERTEMUAN ${mod.no} <span>·</span> ${esc(courseMeta.title).toUpperCase()}</div>
            <h1>${esc(mod.title)}</h1>
            <p>${esc(mod.outcome)}</p>
          </div>
          <div class="module-stat-block">
            <strong>${percent}%</strong>
            <span>${done ? 'Selesai Dibaca' : `${mod.sections.length} Topik Pembahasan`}</span>
            <button class="action-btn ${done ? 'outline' : 'primary'}" data-action="complete-module" data-module="${mod.id}">
              ${done ? 'Atur Ulang Modul' : 'Tandai Semua Selesai'}
            </button>
          </div>
        </div>
      </header>

      <div class="view-switch">
        <button class="view-tab ${!state.cheat ? 'active' : ''}" data-action="view-full">Materi & Visualisasi Lengkap</button>
        <button class="view-tab ${state.cheat ? 'active' : ''}" data-action="view-cheat">Rangkuman Cepat (Cheatsheet)</button>
      </div>

      ${state.cheat ? `
        <section class="cheatsheet" aria-labelledby="cheat-title">
          <div class="mono-label">RINGKASAN EKSEKUTIF MODUL ${mod.no}</div>
          <h2 id="cheat-title">Poin-poin Inti Pembelajaran</h2>
          <ul class="quick-list">
            ${mod.summary.map(s => `<li>${esc(s)}</li>`).join('')}
          </ul>
        </section>
      ` : `
        <section class="module-visuals" id="module-visuals">
          <div class="section-kicker">VISUALISASI & EKSPLORASI ARSITEKTUR</div>
          ${renderVisuals(mod)}
        </section>

        <section class="reading-content" aria-label="Materi lengkap">
          ${mod.sections.map((section, i) => renderSection(mod, section, i)).join('')}
        </section>

        ${renderRecall(mod)}
      `}
    </article>
  `;
}

function renderSection(mod, section, i) {
  const key = `${mod.id}:${i}`;
  const done = state.read.has(key);

  return `
    <section class="content-section" id="${mod.id}-section-${i}">
      <header class="content-section-head">
        <div>
          <span class="section-number">${mod.no}.${String(i + 1).padStart(2, '0')}</span>
          <h2 id="${mod.id}-section-title-${i}" class="search-result-target" tabindex="-1">${esc(section.title)}</h2>
        </div>
        <span class="slides">SLIDE ${esc(section.slides)}</span>
      </header>
      <p class="section-intro">${esc(section.intro)}</p>

      <div class="concept-list">
        ${section.concepts.map((concept, conceptIndex) => `
          <div id="${mod.id}-concept-${i}-${conceptIndex}" class="concept-item search-result-target" tabindex="-1">
            <div class="concept-title">
              <h3>${esc(concept.name)}</h3>
              <span>Konsep Inti</span>
            </div>
            <div class="concept-body">
              ${[
                ['Definisi Inti', concept.definition, ''],
                ['Mekanisme Kerja', concept.mechanism, ''],
                ['Contoh Penerapan Nyata', concept.example, ''],
                ['Poin Kunci Ujian', concept.takeaway, 'takeaway']
              ].map(([lbl, txt, cls]) => `
                <div class="concept-detail ${cls}">
                  <strong>${lbl}</strong>
                  <p>${esc(txt)}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      ${section.matrix ? `
        <div class="table-scroll" role="region" tabindex="0">
          <table class="compare-table">
            <thead><tr>${section.matrix[0].map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
            <tbody>
              ${section.matrix.slice(1).map(row => `
                <tr>${row.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : ''}

      <div class="section-complete-line">
        <button class="mark-section ${done ? 'done' : ''}" data-action="mark-section" data-key="${key}">
          ${done ? '✓ Selesai Dibaca' : '+ Tandai Selesai Dibaca'}
        </button>
      </div>
    </section>
  `;
}

function renderRecall(mod) {
  return `
    <section class="recall-section" id="recall">
      <div class="recall-head">
        <div>
          <div class="eyebrow">ACTIVE RECALL <span>·</span> PERTEMUAN ${mod.no}</div>
          <h2>Uji Ingatan & Pemahaman</h2>
        </div>
        <p>Cobalah rumuskan jawaban dalam pikiran Anda sebelum membalik kartu.</p>
      </div>

      <div class="flashcard-row">
        ${mod.flashcards.map(([front, back], i) => {
          const flipped = Boolean(state.flash[`${mod.id}:${i}`]);
          return `
            <button id="search-flashcard-${mod.id}-${i}" class="flashcard search-result-target ${flipped ? 'flipped' : ''}" data-action="flashcard" data-index="${i}">
              <span class="flash-label">${flipped ? 'JAWABAN · KLIK UNTUK BALIK' : `KARTU 0${i + 1} · KLIK UNTUK BUKA`}</span>
              <span class="flash-content">${esc(flipped ? back : front)}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div class="quiz-wrap">
        <div class="quiz-heading">
          <h3>Mini Kuis Pilihan Ganda</h3>
          <span>${mod.quiz.length} SOAL EVALUASI</span>
        </div>
        ${mod.quiz.map((item, qi) => {
          const answer = state.quiz[`${mod.id}:${qi}`];
          return `
            <div id="search-quiz-${mod.id}-${qi}" class="quiz-item search-result-target" tabindex="-1">
              <span class="quiz-num">${String(qi + 1).padStart(2, '0')}</span>
              <div>
                <p class="quiz-question">${esc(item.q)}</p>
                <div class="quiz-options">
                  ${item.options.map((option, oi) => {
                    const selected = answer === oi;
                    const cls = selected ? (oi === item.answer ? 'selected-correct' : 'selected-wrong') : '';
                    return `
                      <button class="quiz-option ${cls}" data-action="quiz-answer" data-q="${qi}" data-option="${oi}">
                        <span class="option-marker">${String.fromCharCode(65 + oi)}</span>
                        <span>${esc(option)}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
                ${answer !== undefined ? `
                  <div class="quiz-feedback ${answer === item.answer ? 'correct' : 'incorrect'}">
                    <strong>${answer === item.answer ? 'Tepat.' : `Belum tepat. Jawaban benar: ${String.fromCharCode(65 + item.answer)}.`}</strong>
                    ${esc(item.why)}
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

// -----------------------------------------------------------------------------
// HIGH-FIDELITY INTERACTIVE VISUALIZERS (M1 TO M7)
// -----------------------------------------------------------------------------
function renderVisuals(mod) {
  if (mod.id === 'm1') return renderM1();
  if (mod.id === 'm2') return renderM2();
  if (mod.id === 'm3') return renderM3();
  if (mod.id === 'm4') return renderM4();
  if (mod.id === 'm5') return renderM5();
  if (mod.id === 'm6') return renderM6();
  if (mod.id === 'm7') return renderM7();
  return '';
}

// M1: DIKW Value Transformation & 5-Component Architecture
function renderM1() {
  const isRetail = state.ui.dikwScenario === 'retail';
  const steps = [
    { label: '01 / Data', name: 'Data Mentah', retail: 'Log transaksi: "TRX-810, SKU-402, Qty: 2, 12:15 WIB"', transport: 'Telemetri GPS: "LAT -6.2088, LNG 106.8456, Speed 0, 17:30 WIB"' },
    { label: '02 / Informasi', name: 'Informasi Terstruktur', retail: 'Penjualan: "2 porsi Kopi Susu terjual senilai Rp40.000 pada jam makan siang"', transport: 'Kondisi: "Driver terparkir statis di zona Sudirman pada jam pulang kantor"' },
    { label: '03 / Knowledge', name: 'Knowledge & Tren', retail: 'Pola: "Kopi susu menyumbang 68% omzet setiap pukul 12.00–14.00"', transport: 'Wawasan: "Terjadi defisit 45 armada driver di area Sudirman saat hujan sore"' },
    { label: '04 / Wisdom', name: 'Wisdom & Kebijakan', retail: 'Aksi: "Menyiapkan batch pre-brew espresso pukul 11.45 agar antrean kasir < 2 menit"', transport: 'Keputusan: "Mengaktifkan dynamic pricing 1.4x untuk menarik 50 driver merapat ke Sudirman"' }
  ];
  const curStep = steps[state.ui.dikwStep] || steps[0];

  const compFails = {
    hardware: { name: 'Hardware Lumpuh', impact: 'Tablet kasir korsleting / mati total: kasir tidak bisa menginput pesanan meja dan transaksi tunai terhenti seketika kecuali beralih ke kertas nota darurat.' },
    software: { name: 'Software Error / Bug', impact: 'Aplikasi kasir mengalami freeze saat menghitung diskon: database terkunci, antrean pelanggan menumpuk, dan reputasi layanan menurun.' },
    brainware: { name: 'Brainware Tidak Terlatih', impact: 'Kasir salah menginput kode menu dan tidak paham cara rekonsiliasi kas: terjadi selisih pembukuan jutaan rupiah di akhir shift.' },
    data: { name: 'Data Korup / Hilang', impact: 'Tabel inventaris terhapus karena tidak ada backup: gudang tidak tahu sisa biji kopi yang tersedia dan pesanan supplier terlambat.' },
    network: { name: 'Jaringan Internet Terputus', impact: 'Router Wi-Fi offline: pembayaran QRIS dan kartu gagal diproses, pesanan online tidak masuk ke dapur, dan dashboard owner tidak sinkron.' }
  };
  const curFail = compFails[state.ui.compFail] || compFails.brainware;

  return `
    <div class="visual-grid accent-terracotta">
      <section class="visual-panel span-2">
        ${panelHead('Hierarki Nilai: Dari Data Mentah Menjadi Kebijaksanaan Bisnis', 'Pilih studi kasus dan telusuri tahapan transformasi dari bit transaksi menjadi keunggulan bersaing.')}
        <div class="pill-row">
          ${pill('Kasus Ritel Coffee Shop', 'dikw-scenario', 'retail', isRetail)}
          ${pill('Kasus Transportasi Digital', 'dikw-scenario', 'transport', !isRetail)}
        </div>
        <div class="flow-diagram">
          ${steps.map((s, i) => `
            ${i ? '<span class="flow-arrow">→</span>' : ''}
            <button class="flow-node ${state.ui.dikwStep === i ? 'platform-node' : ''}" data-action="dikw-step" data-value="${i}">
              <span style="font:8px var(--font-mono); color:var(--subtle); display:block;">${s.label}</span>
              <strong>${s.name}</strong>
            </button>
          `).join('')}
        </div>
        <div class="detail-box" style="margin-top:14px;">
          <strong>${curStep.name} · ${isRetail ? 'Konteks Ritel' : 'Konteks Ride-Hailing'}</strong>
          <p style="font-family:var(--font-mono); font-size:12px; margin-top:6px; color:var(--ink);">${isRetail ? curStep.retail : curStep.transport}</p>
        </div>
      </section>

      <section class="visual-panel span-2">
        ${panelHead('Simulasi Ketahanan 5 Komponen Sistem Komputer', 'Klik salah satu pilar sistem untuk menguji apa yang terjadi pada bisnis jika komponen tersebut mengalami kegagalan total.')}
        <div class="pill-row">
          ${Object.keys(compFails).map(k => pill(compFails[k].name.split(' ')[0], 'comp-fail', k, state.ui.compFail === k)).join('')}
        </div>
        <div class="detail-box" style="border-left: 3px solid var(--danger);">
          <strong style="color:var(--danger);">${esc(curFail.name)}</strong>
          <p style="margin-top:6px;">${esc(curFail.impact)}</p>
        </div>
      </section>
    </div>
  `;
}

// M2: CPU Machine Cycle & Memory Latency Ladder
function renderM2() {
  const steps = [
    { no: '01', name: 'FETCH', title: 'Pengambilan Instruksi', cu: 'Control Unit mengirim alamat Program Counter (PC) ke Address Bus', bus: 'Address Bus: 0x004A | Data Bus: 0x1A40 (LOAD_STOK)', reg: 'PC: 0x004A -> IR: 0x1A40', desc: 'Instruksi biner dibaca dari memori RAM kerja dan dimuat ke dalam Instruction Register (IR) internal CPU.' },
    { no: '02', name: 'DECODE', title: 'Penerjemahan Operasi', cu: 'Instruction Decoder menerjemahkan kode biner menjadi sinyal mikro', bus: 'Internal Control Bus aktif mengarahkan jalur data', reg: 'OpCode: SUBTRACTION (Kurangi Stok)', desc: 'Control Unit menentukan jenis instruksi: mengenali bahwa transaksi ini adalah pengurangan stok 1 porsi susu dari gudang.' },
    { no: '03', name: 'EXECUTE', title: 'Eksekusi Kalkulasi', cu: 'Arithmetic Logic Unit (ALU) melakukan operasi matematika biner', bus: 'ALU Operand Bus: RegA (100) - RegB (1) = 99', reg: 'ALU Status: ZERO=0, NEG=0', desc: 'ALU menghitung saldo stok baru: 100 karton dikurangi 1 karton = 99 karton sisa stok.' },
    { no: '04', name: 'STORE', title: 'Penyimpanan Hasil', cu: 'Control Unit menuliskan kembali hasil kalkulasi ke memori', bus: 'Data Bus: 99 dituliskan ke alamat RAM 0x0810', reg: 'Accumulator: 99 | PC: 0x004B', desc: 'Hasil nilai 99 disimpan kembali ke register akumulator dan dituliskan ke RAM agar dapat diakses oleh modul kasir lain.' }
  ];
  const cur = steps[state.ui.cpuStep] || steps[0];

  const isHuman = state.ui.latencyScale === 'human';
  const memories = [
    { name: 'Register CPU', real: '< 1 nanodetik', human: '1 detik', pct: 100 },
    { name: 'L1/L2 Cache', real: '1 – 4 nanodetik', human: '4 detik', pct: 85 },
    { name: 'L3 Cache', real: '10 – 20 nanodetik', human: '20 detik', pct: 65 },
    { name: 'RAM Utama', real: '50 – 100 nanodetik', human: '1.5 menit', pct: 45 },
    { name: 'SSD NVMe', real: '15 – 50 mikrodetik', human: '3.5 hari', pct: 25 },
    { name: 'HDD Magnetik', real: '5 – 10 milidetik', human: '4 bulan', pct: 10 }
  ];

  return `
    <div class="visual-grid accent-indigo">
      <section class="visual-panel span-2">
        ${panelHead('Simulator Arsitektur CPU & Machine Cycle 4-Tahap', 'Eksekusi instruksi per instruksi biner: Fetch ➔ Decode ➔ Execute ➔ Store.')}
        <div class="pill-row">
          ${steps.map((s, i) => pill(`${s.no}. ${s.name}`, 'cpu-step', i, state.ui.cpuStep === i)).join('')}
          <button class="pill-button" data-action="cpu-next" style="border-color:var(--indigo); color:var(--indigo); font-weight:700;">Langkah Selanjutnya ➔</button>
        </div>

        <div class="cpu-schematic">
          <div class="cpu-box">
            <span class="cpu-unit-title">Internal Central Processing Unit (CPU)</span>
            <div style="padding:10px; background:var(--surface); border:1px solid var(--line); margin-bottom:8px;">
              <span class="mono-label">TAHAP AKTIF: ${cur.name} (${cur.title})</span>
              <p style="margin:4px 0 0; font-size:12px; color:var(--muted);">${cur.desc}</p>
            </div>
            <div class="cpu-register-grid">
              <div class="reg-badge ${state.ui.cpuStep === 0 ? 'highlight' : ''}">
                <span>PROG. COUNTER</span><span>0x004A</span>
              </div>
              <div class="reg-badge ${state.ui.cpuStep === 1 ? 'highlight' : ''}">
                <span>INSTR. REG</span><span>0x1A40</span>
              </div>
              <div class="reg-badge ${state.ui.cpuStep === 2 ? 'highlight' : ''}">
                <span>ALU STATE</span><span>COMPUTE</span>
              </div>
              <div class="reg-badge ${state.ui.cpuStep === 3 ? 'highlight' : ''}">
                <span>ACCUMULATOR</span><span>99</span>
              </div>
            </div>
          </div>

          <div class="bus-indicator-bar">
            <span class="cpu-unit-title">Status Jalur Bus Sistem</span>
            <div class="bus-line ${state.ui.cpuStep === 0 ? 'active' : ''}">
              <span>ADDRESS BUS</span><span>${state.ui.cpuStep === 0 ? '0x004A (RAM Addr)' : 'IDLE'}</span>
            </div>
            <div class="bus-line ${state.ui.cpuStep === 0 || state.ui.cpuStep === 3 ? 'active' : ''}">
              <span>DATA BUS</span><span>${state.ui.cpuStep === 0 ? '0x1A40' : state.ui.cpuStep === 3 ? '99 (Write)' : 'READY'}</span>
            </div>
            <div class="bus-line ${state.ui.cpuStep === 1 || state.ui.cpuStep === 2 ? 'active' : ''}">
              <span>CONTROL BUS</span><span>${cur.cu.split(' ')[0]} SIGNAL</span>
            </div>
          </div>
        </div>
      </section>

      <section class="visual-panel span-2">
        ${panelHead('Piramida Hierarki Memori & Perbandingan Latensi Akses', 'Bandingkan jurang kecepatan akses perangkat penyimpanan dalam skala waktu nyata dan skala waktu manusia.')}
        <div class="pill-row">
          ${pill('Skala Waktu Manusia (Analogi 1 Detik)', 'latency-scale', 'human', isHuman)}
          ${pill('Skala Waktu Fisik Komputer (Nanodetik)', 'latency-scale', 'real', !isHuman)}
        </div>

        <div class="latency-ladder">
          ${memories.map(m => `
            <div class="latency-item">
              <span class="latency-name">${m.name}</span>
              <div class="latency-bar">
                <div class="latency-fill" style="width:${m.pct}%;"></div>
              </div>
              <span class="latency-scale">${isHuman ? m.human : m.real}</span>
            </div>
          `).join('')}
        </div>
        <div class="detail-box">
          <strong>Analogi Skala Waktu:</strong> Jika CPU mengakses Register dianalogikan secepat <strong>1 detik</strong>, maka mengambil data dari RAM setara dengan <strong>1,5 menit</strong>, sedangkan membaca dari hard disk magnetik (HDD) setara dengan menunggu <strong>4 bulan</strong>! Inilah mengapa SSD dan RAM berkecepatan tinggi krusial bagi sistem bisnis.
        </div>
      </section>
    </div>
  `;
}

// M3: Abstraction Stack & Enterprise Flow
function renderM3() {
  const layers = [
    { id: 'user', num: 'L-05', name: 'Brainware / End-User', role: 'Pengguna manusia (Kasir, Manajer, Pelanggan) yang berinteraksi lewat indra penglihatan dan sentuhan.', fail: 'Human error: salah ketik harga promo.' },
    { id: 'app', num: 'L-04', name: 'Software Aplikasi (Application)', role: 'Program spesifik (Moka POS, ERP SAP, Web Browser) yang dirancang untuk menyelesaikan kebutuhan bisnis.', fail: 'Application crash: unhandled exception pada logika diskon.' },
    { id: 'os', num: 'L-03', name: 'Sistem Operasi (OS Kernel)', role: 'Jantung sistem yang mengelola alokasi CPU, RAM, file system, dan mengeksekusi panggilan sistem (System Call).', fail: 'Kernel panic / Blue screen: kebocoran memori (memory leak).' },
    { id: 'driver', num: 'L-02', name: 'Device Driver & Firmware', role: 'Perantara penerjemah antara kode umum sistem operasi dan perintah mikrokontroler perangkat keras fisik.', fail: 'Driver timeout: printer thermal kasir tidak merespons perintah cetak.' },
    { id: 'hw', num: 'L-01', name: 'Perangkat Keras Fisik (Hardware)', role: 'Sirkuit elektronik mikroprosesor, transistor silikon, modul RAM, SSD NVMe, dan kabel bus fisik.', fail: 'Hardware failure: chipset terbakar atau kabel putus.' }
  ];
  const curLayer = layers.find(l => l.id === state.ui.stackLayer) || layers[2];

  const systems = [
    { id: 'crm', name: 'CRM (Pelanggan)', role: 'Mencatat prospek, histori pesanan, dan kupon loyalty pelanggan.' },
    { id: 'erp', name: 'ERP (Keuangan & Operasional)', role: 'Mencatat jurnal piutang/kas, mendebet inventaris stok, dan mencetak faktur pajak.' },
    { id: 'scm', name: 'SCM (Rantai Pasok)', role: 'Mengirim notifikasi otomatis ke gudang pusat untuk pengiriman ulang bahan baku.' },
    { id: 'bi', name: 'BI (Executive Analytics)', role: 'Memperbarui grafik omzet harian dan proyeksi laba rugi di dashboard direktur.' }
  ];
  const curSys = systems.find(s => s.id === state.ui.enterpriseSys) || systems[1];

  return `
    <div class="visual-grid accent-emerald">
      <section class="visual-panel span-2">
        ${panelHead('Lapisan Abstraksi Sistem Komputer (The Computing Stack)', 'Klik setiap lapisan arsitektur untuk melihat batasan tanggung jawab komputasi dari pengguna hingga perangkat keras.')}
        <div class="stack-ladder">
          ${layers.map(l => `
            <button class="stack-layer-btn ${state.ui.stackLayer === l.id ? 'active' : ''}" data-action="stack-layer" data-value="${l.id}">
              <div>
                <span class="stack-layer-tag">${l.num} · LAYER</span>
                <div class="stack-layer-title">${esc(l.name)}</div>
              </div>
              <span style="font-family:var(--font-mono); font-size:11px; color:var(--subtle);">➔</span>
            </button>
          `).join('')}
        </div>
        <div class="detail-box">
          <strong>Peran Lapisan: ${esc(curLayer.name)}</strong>
          <p>${esc(curLayer.role)}</p>
          <p style="margin-top:6px; color:var(--danger); font-size:11px;"><strong>Bentuk Malfungsi:</strong> ${esc(curLayer.fail)}</p>
        </div>
      </section>

      <section class="visual-panel span-2">
        ${panelHead('Alur Terintegrasi Aplikasi Enterprise (ERP, CRM, SCM, BI)', 'Pilih modul untuk melihat bagaimana satu transaksi checkout pelanggan mengalir tanpa pemisahan (silo) data.')}
        <div class="flow-diagram">
          ${systems.map((s, i) => `
            ${i ? '<span class="flow-arrow">→</span>' : ''}
            <button class="flow-node ${state.ui.enterpriseSys === s.id ? 'platform-node' : ''}" data-action="enterprise-sys" data-value="${s.id}">
              <strong>${esc(s.name.split(' ')[0])}</strong>
            </button>
          `).join('')}
        </div>
        <div class="detail-box" style="margin-top:14px;">
          <strong>${esc(curSys.name)}</strong>
          <p>${esc(curSys.role)}</p>
          <p style="margin-top:6px; font-size:11px; color:var(--emerald);"><strong>Manfaat Bisnis:</strong> Mencegah perbedaan data stok antara kasir dan gudang, serta mengotomasi pembukuan akuntansi tanpa entri ulang manual.</p>
        </div>
      </section>
    </div>
  `;
}

// M4: OS Multitasking Scheduler & Memory Paging
function renderM4() {
  const tasks = [
    { name: 'POS Kasir (Prioritas Tinggi)', quantum: '30 milidetik', cpu: 'Memproses input barcode & validasi total belanja', state: 'RUNNING' },
    { name: 'Print Spooler (I/O Bound)', quantum: '15 milidetik', cpu: 'Mengirim buffer data struk ke port printer thermal', state: 'WAITING I/O' },
    { name: 'Sinkronisasi Cloud (Background)', quantum: '10 milidetik', cpu: 'Mengirim batch transaksi harian ke server cloud AWS', state: 'READY' }
  ];
  const curTask = tasks[state.ui.osScheduler] || tasks[0];
  const isHighLoad = state.ui.osRamLoad === 'high';

  return `
    <div class="visual-grid accent-terracotta">
      <section class="visual-panel span-2">
        ${panelHead('Manajemen Proses: Penjadwal CPU (Round-Robin Multitasking)', 'Amati bagaimana sistem operasi membagi irisan waktu (Time Quantum) agar ketiga tugas bisnis berjalan lancar.')}
        <div class="pill-row">
          ${tasks.map((t, i) => pill(t.name.split(' ')[0], 'os-task', i, state.ui.osScheduler === i)).join('')}
        </div>
        <div class="detail-box">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <strong>${esc(curTask.name)}</strong>
            <span class="mono-label" style="color:var(--accent);">TIME QUANTUM: ${esc(curTask.quantum)}</span>
          </div>
          <p><strong>Aktivitas CPU:</strong> ${esc(curTask.cpu)}</p>
          <p style="margin-top:4px; font-family:var(--font-mono); font-size:11px; color:var(--indigo);">Status Proses: [${esc(curTask.state)}] — Beralih tugas via Context Switching dalam hitungan mikrodetik.</p>
        </div>
      </section>

      <section class="visual-panel span-2">
        ${panelHead('Manajemen Memori: Virtual Memory & Disk Paging', 'Uji mekanisme alokasi RAM fisik versus ruang Swap SSD saat menghadapi lonjakan transaksi toko.')}
        <div class="pill-row">
          ${pill('Beban Normal (RAM 55% Terpakai)', 'ram-load', 'normal', !isHighLoad)}
          ${pill('Beban Puncak / Flash Sale (RAM 98% Penuh)', 'ram-load', 'high', isHighLoad)}
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin:12px 0;">
          <div class="metric-box">
            <span class="metric-label">STATUS RAM FISIK (8GB)</span>
            <div class="metric-value" style="color:${isHighLoad ? 'var(--danger)' : 'var(--emerald)'};">
              ${isHighLoad ? '7.84 GB / 8.00 GB (Kritis)' : '4.40 GB / 8.00 GB (Stabil)'}
            </div>
          </div>
          <div class="metric-box">
            <span class="metric-label">STATUS PARTISI SWAP SSD</span>
            <div class="metric-value">
              ${isHighLoad ? '2.40 GB Aktif Dipakai (Paging)' : '0.10 GB (Siaga)'}
            </div>
          </div>
        </div>
        <div class="detail-box">
          <strong>${isHighLoad ? 'Mekanisme Virtual Memory Aktif:' : 'Kondisi Operasional Normal:'}</strong>
          <p>${isHighLoad ? 'Ketika RAM fisik hampir habis, OS otomatis memindahkan blok data halaman (Page) dari aplikasi yang sedang idle ke partisi swap di SSD. Ini mencegah komputer kasir mengalami blue screen atau freeze mendadak.' : 'Seluruh aplikasi aktif dapat diakomodasi sepenuhnya di dalam modul RAM fisik berkecepatan tinggi tanpa perlu pertukaran data ke SSD.'}</p>
        </div>
      </section>
    </div>
  `;
}

// M5: Network Travel & Protocols
function renderM5() {
  const hops = [
    { title: 'Host Kasir (LAN)', device: 'POS Tablet / PC', layer: 'Layer 7 (Application)', ip: '192.168.1.15', detail: 'Aplikasi kasir mengemas data pesanan ke dalam format JSON terenkripsi dan membuka koneksi socket TCP.' },
    { title: 'Network Switch', device: 'Switch Layer 2 (1Gbps)', layer: 'Layer 2 (Data Link)', ip: 'MAC Address Filtering', detail: 'Switch membaca frame MAC Address tujuan dan meneruskannya langsung ke port router tanpa tabrakan paket (collision-free).' },
    { title: 'Router & Gateway', device: 'Router Kantor / Toko', layer: 'Layer 3 (Network)', ip: 'NAT Publik: 103.55.21.8', detail: 'Router menerjemahkan IP lokal menjadi IP publik (NAT) dan menentukan rute transmisi tercepat melintasi jaringan ISP.' },
    { title: 'Cloud Data Center', device: 'Cloud Load Balancer & Web Server', layer: 'Layer 4-7 (TCP/HTTPS)', ip: '20.198.112.44:443', detail: 'Server cloud menerima paket data, memverifikasi sertifikat SSL/TLS, memecah payload, dan mengeksekusi transaksi di database.' }
  ];
  const curHop = hops[state.ui.netHop] || hops[0];

  return `
    <div class="visual-grid accent-indigo">
      <section class="visual-panel span-2">
        ${panelHead('Perjalanan Paket Data: Dari Outlet Lokal Menuju Cloud Data Center', 'Telusuri perjalanan paket data transaksi melintasi perangkat keras jaringan komputer.')}
        <div class="flow-diagram">
          ${hops.map((h, i) => `
            ${i ? '<span class="flow-arrow">→</span>' : ''}
            <button class="flow-node ${state.ui.netHop === i ? 'platform-node' : ''}" data-action="net-hop" data-value="${i}">
              <span style="font:8px var(--font-mono); color:var(--subtle); display:block;">HOP 0${i + 1}</span>
              <strong>${esc(h.title.split(' ')[0])}</strong>
            </button>
          `).join('')}
        </div>
        <div class="detail-box" style="margin-top:14px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <strong>${esc(curHop.title)} (${esc(curHop.device)})</strong>
            <span class="mono-label" style="color:var(--indigo);">${esc(curHop.layer)}</span>
          </div>
          <p>${esc(curHop.detail)}</p>
          <p style="margin-top:4px; font-family:var(--font-mono); font-size:11px; color:var(--subtle);">Alamat Pengidentifikasi: ${esc(curHop.ip)}</p>
        </div>
      </section>

      <section class="visual-panel span-2">
        ${panelHead('Perbandingan Protokol: HTTP (Port 80) vs HTTPS (Port 443)', 'Mengapa website bisnis dan transaksi wajib menggunakan protokol HTTPS terenkripsi SSL/TLS.')}
        <div class="table-scroll">
          <table class="compare-table">
            <thead>
              <tr><th>Dimensi Evaluasi</th><th>HTTP (Port 80)</th><th>HTTPS (Port 443)</th></tr>
            </thead>
            <tbody>
              <tr><td>Enkripsi Data</td><td>Teks polos tanpa enkripsi (Plaintext)</td><td>Enkripsi simetris & asimetris SSL/TLS</td></tr>
              <tr><td>Risiko Keamanan</td><td>Mudah disadap via Man-in-the-Middle</td><td>Data terenkripsi kebal dari penyadapan</td></tr>
              <tr><td>Kepercayaan Pengguna</td><td>Browser menandai "Not Secure"</td><td>Tanda gembok aman (Verified Security)</td></tr>
              <tr><td>Integritas Data</td><td>Paket bisa dimanipulasi di perjalanan</td><td>Memakai Message Authentication Code (MAC)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

// M6: Relational ERD & Concurrency
function renderM6() {
  const tables = {
    pelanggan: { name: 'Tabel Pelanggan', pk: 'id_pelanggan', fk: 'Tidak ada (Tabel Induk)', fields: ['id_pelanggan (PK)', 'nama_lengkap', 'no_whatsapp', 'saldo_poin'], desc: 'Menyimpan identitas unik setiap pelanggan terdaftar. Primary Key id_pelanggan dirujuk oleh tabel pesanan.' },
    pesanan: { name: 'Tabel Pesanan', pk: 'id_pesanan', fk: 'id_pelanggan (Merujuk Tabel Pelanggan)', fields: ['id_pesanan (PK)', 'id_pelanggan (FK)', 'tanggal_transaksi', 'total_bayar'], desc: 'Menyimpan transaksi pembelian. Foreign Key id_pelanggan mencegah dibuatnya pesanan tanpa data pembeli valid.' },
    detail: { name: 'Tabel Detail_Pesanan', pk: 'id_detail', fk: 'id_pesanan & id_produk', fields: ['id_detail (PK)', 'id_pesanan (FK)', 'id_produk (FK)', 'qty_beli', 'subtotal'], desc: 'Tabel asosiasi perantara (Many-to-Many) yang menghubungkan pesanan dengan aneka varian produk yang dibeli.' },
    produk: { name: 'Tabel Produk', pk: 'id_produk', fk: 'Tidak ada (Tabel Induk)', fields: ['id_produk (PK)', 'nama_produk', 'harga_satuan', 'stok_tersedia'], desc: 'Menyimpan katalog inventaris barang. Primary Key id_produk dirujuk oleh tabel detail pesanan.' }
  };
  const curTable = tables[state.ui.erdEntity] || tables.pesanan;
  const isDbms = state.ui.concurrencyMode === 'dbms';

  return `
    <div class="visual-grid accent-emerald">
      <section class="visual-panel span-2">
        ${panelHead('Skema Relasional Interaktif: Primary Key & Foreign Key', 'Klik salah satu entitas tabel untuk meneliti relasi integritas data antar-tabel database.')}
        <div class="pill-row">
          ${Object.keys(tables).map(k => pill(tables[k].name.split(' ')[1], 'erd-select', k, state.ui.erdEntity === k)).join('')}
        </div>

        <div class="erd-grid">
          ${Object.keys(tables).map(k => {
            const t = tables[k];
            const isSel = state.ui.erdEntity === k;
            return `
              <div class="erd-card ${isSel ? 'active' : ''}" data-action="erd-select" data-value="${k}">
                <div class="erd-head">
                  <span>${esc(t.name)}</span>
                  <span class="mono-label">${isSel ? 'TERPILIH' : 'TABEL'}</span>
                </div>
                ${t.fields.map(f => `
                  <div class="erd-row">
                    <span>${esc(f.split(' ')[0])}</span>
                    <span class="${f.includes('(PK)') ? 'erd-key-pk' : f.includes('(FK)') ? 'erd-key-fk' : ''}">
                      ${f.includes('(PK)') ? 'PRIMARY KEY' : f.includes('(FK)') ? 'FOREIGN KEY' : 'FIELD'}
                    </span>
                  </div>
                `).join('')}
              </div>
            `;
          }).join('')}
        </div>

        <div class="detail-box">
          <strong>${esc(curTable.name)}</strong>
          <p>${esc(curTable.desc)}</p>
          <p style="margin-top:6px; font-family:var(--font-mono); font-size:11px; color:var(--indigo);">
            Integritas Referensial: Foreign Key menjaga sistem dari anomali data (mencegah terciptanya data transaksi yatim tanpa entitas induk).
          </p>
        </div>
      </section>

      <section class="visual-panel span-2">
        ${panelHead('Simulasi Konkurensi: Spreadsheet vs DBMS Relasional', 'Uji apa yang terjadi saat dua kasir mencoba menjual item stok terakhir di detik yang sama.')}
        <div class="pill-row">
          ${pill('Mesin DBMS (ACID Isolation & Row Lock)', 'concurrency-mode', 'dbms', isDbms)}
          ${pill('Spreadsheet Bersama (Tanpa Row Lock)', 'concurrency-mode', 'sheet', !isDbms)}
        </div>
        <div class="detail-box" style="border-left:3px solid ${isDbms ? 'var(--emerald)' : 'var(--danger)'};">
          <strong style="color:${isDbms ? 'var(--emerald)' : 'var(--danger)'};">
            ${isDbms ? 'Hasil Uji: Transaksi Aman & Konsisten (Sifat ACID)' : 'Hasil Uji: Tabrakan Data & Kerugian Finansial'}
          </strong>
          <p style="margin-top:6px;">
            ${isDbms
              ? 'DBMS menerapkan Row-Level Locking: Kasir 1 berhasil memotong stok menjadi 0. Saat Kasir 2 mencoba checkout di milidetik yang sama, transaksi ditolak otomatis dan dana dikembalikan (Rollback). Tidak ada barang terjual melebihi stok.'
              : 'Pada Spreadsheet tanpa kontrol konkurensi, file Excel kedua kasir saling menimpa data. Kedua kasir sama-sama berhasil men-checkout stok terakhir. Akibatnya terjadi overselling (2 pelanggan membayar 1 barang), memicu komplain dan kekacauan operasional toko.'}
          </p>
        </div>
      </section>
    </div>
  `;
}

// M7: Integrated Office Productivity Pipeline
function renderM7() {
  const steps = [
    { num: 'FASE 01', name: 'Analitik Data di Excel', tool: 'Microsoft Excel / Google Sheets', desc: 'Mengimpor ribuan baris log transaksi kasir, menggunakan rumus SUMIF/VLOOKUP, dan membuat Pivot Table dinamis untuk menghasilkan tabel agregasi omzet bulanan beserta visualisasi grafiknya.' },
    { num: 'FASE 02', name: 'Naskah Laporan di Word', tool: 'Microsoft Word / Google Docs', desc: 'Menyusun dokumen naratif analisis operasional. Grafik dari Excel disalin menggunakan fitur Paste Link; jika angka penjualan di Excel diperbarui, grafik di naskah Word otomatis ikut terbarui secara real-time.' },
    { num: 'FASE 03', name: 'Presentasi Eksekutif di PPT', tool: 'Microsoft PowerPoint / Slides', desc: 'Mengekstrak intisari insight bisnis, diagram arsitektur sistem, dan grafik keputusan ke dalam slide ringkas bertema minimalis untuk dipresentasikan di hadapan dosen penguji atau pimpinan direksi.' }
  ];
  const cur = steps[state.ui.pipeStep] || steps[0];

  return `
    <div class="visual-grid accent-terracotta">
      <section class="visual-panel span-2">
        ${panelHead('Pipeline Pelaporan Terintegrasi: Excel ➔ Word ➔ PowerPoint', 'Alur kerja profesional yang menghubungkan ketiga aplikasi perkantoran dalam pembuatan Mini Business Report.')}
        <div class="pipe-track">
          ${steps.map((s, i) => `
            <button class="pipe-node ${state.ui.pipeStep === i ? 'active' : ''}" data-action="pipe-step" data-value="${i}">
              <span class="pipe-step-num">${s.num}</span>
              <div class="pipe-title">${esc(s.name)}</div>
            </button>
          `).join('')}
        </div>

        <div class="detail-box">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <strong>${esc(cur.name)}</strong>
            <span class="mono-label" style="color:var(--accent);">${esc(cur.tool)}</span>
          </div>
          <p>${esc(cur.desc)}</p>
        </div>

        <div style="padding:14px; background:var(--surface); border:1px solid var(--line); margin-top:14px;">
          <span class="mono-label">SIMULASI DYNAMIC LINKING (PASTE LINK)</span>
          <p style="font-size:12px; color:var(--muted); margin:4px 0 10px;">Ubah angka penjualan di bawah untuk melihat bagaimana perubahan di lembar kerja otomatis merefleksikan laporan:</p>
          <div style="display:flex; gap:10px; align-items:center;">
            <button class="pill-button" data-action="sim-val" data-value="200">200 Cup (Rp5 Juta)</button>
            <button class="pill-button" data-action="sim-val" data-value="350">350 Cup (Rp8.75 Juta)</button>
            <button class="pill-button" data-action="sim-val" data-value="500">500 Cup (Rp12.5 Juta)</button>
          </div>
          <div style="margin-top:12px; font-family:var(--font-mono); font-size:12px; padding:10px; background:var(--surface-muted); border-left:3px solid var(--emerald);">
            Output Terhubung: Dokumen Word & Slide Presentasi mencatat <strong>${state.ui.simDataVal} Cup Penjualan</strong> (Omzet: Rp${(state.ui.simDataVal * 25000).toLocaleString('id-ID')}). Data selalu sinkron 100% tanpa salah salin manual.
          </div>
        </div>
      </section>
    </div>
  `;
}

// -----------------------------------------------------------------------------
// SEARCH ENGINE WITH FUZZY & RELEVANCE SCORING
// -----------------------------------------------------------------------------
const searchStopWords = new Set(['apa', 'yang', 'dan', 'di', 'ke', 'dari', 'dengan', 'untuk', 'dalam', 'adalah', 'itu', 'ini', 'bagaimana', 'tentang', 'pada', 'atau', 'pengertian', 'definisi', 'penjelasan', 'jelaskan', 'sebutkan', 'uraikan']);
const normalizeSearch = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('id').replace(/[^a-z0-9]+/g, ' ').trim();

const searchTerms = query => {
  const all = normalizeSearch(query).split(' ').filter(Boolean);
  const useful = all.filter(term => term.length > 1 && !searchStopWords.has(term));
  return useful.length ? useful : all;
};

function oneEditAway(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let left = 0, right = 0, diff = 0;
  while (left < a.length && right < b.length) {
    if (a[left] === b[right]) { left++; right++; continue; }
    if (++diff > 1) return false;
    if (a.length > b.length) left++;
    else if (b.length > a.length) right++;
    else { left++; right++; }
  }
  return diff + Number(left < a.length || right < b.length) <= 1;
}

function buildSearchIndex() {
  const items = [];

  course.forEach(mod => {
    items.push({
      type: 'module',
      moduleId: mod.id,
      section: null,
      target: null,
      title: `Pertemuan ${mod.no}: ${mod.title}`,
      text: `${mod.outcome} ${mod.summary.join(' ')}`,
      badge: `MODUL ${mod.no}`
    });

    mod.sections.forEach((sec, si) => {
      items.push({
        type: 'section',
        moduleId: mod.id,
        section: si,
        target: `${mod.id}-section-title-${si}`,
        title: sec.title,
        text: sec.intro,
        badge: `SUBBAB ${mod.no}.${si + 1}`
      });

      sec.concepts.forEach((con, ci) => {
        items.push({
          type: 'concept',
          moduleId: mod.id,
          section: si,
          target: `${mod.id}-concept-${si}-${ci}`,
          title: con.name,
          text: `${con.definition} ${con.mechanism} ${con.example} ${con.takeaway}`,
          badge: `KONSEP INTI (P-${mod.no})`
        });
      });
    });
  });

  utsGuide.forEach(g => {
    items.push({
      type: 'guide',
      moduleId: g.module,
      section: g.section,
      target: g.target,
      title: g.question,
      text: `${g.answer} ${g.points.join(' ')}`,
      badge: 'KISI-KISI UTS'
    });
  });

  tugasData.cases.forEach(c => {
    items.push({
      type: 'tugas',
      moduleId: 'tugas',
      section: null,
      target: c.id,
      title: `Tugas Kasus: ${c.name} - ${c.tagline}`,
      text: `${c.summary} ${c.valueChain.data.join(' ')} ${c.valueChain.decisions.join(' ')}`,
      badge: 'TUGAS KELOMPOK'
    });
  });

  state.searchItems = items.map(item => {
    const titleNorm = normalizeSearch(item.title);
    const textNorm = normalizeSearch(item.text);
    return {
      ...item,
      titleNorm,
      textNorm,
      titleWords: titleNorm.split(' ').filter(Boolean),
      textWords: new Set(textNorm.split(' ').filter(Boolean))
    };
  });
}

function doSearch(query) {
  const terms = searchTerms(query);
  if (!terms.length) {
    searchResults.innerHTML = '<p class="search-hint">Ketik kata kunci untuk mencari di seluruh materi kuliah.</p>';
    state.searchCursor = -1;
    return;
  }

  const phrase = normalizeSearch(query);
  const scored = [];

  state.searchItems.forEach(item => {
    let score = 0;
    if (item.titleNorm === phrase) score += 1200;
    else if (item.titleNorm.startsWith(phrase)) score += 800;
    else if (item.titleNorm.includes(phrase)) score += 500;
    if (item.textNorm.includes(phrase)) score += 200;

    for (const term of terms) {
      if (item.titleWords.includes(term)) score += 100;
      else if (item.titleWords.some(w => w.startsWith(term))) score += 50;
      else if (item.textWords.has(term)) score += 25;
      else if (term.length > 3 && item.titleWords.some(w => oneEditAway(term, w))) score += 20;
    }

    if (score > 0) scored.push({ item, score });
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 8);

  if (!top.length) {
    searchResults.innerHTML = '<p class="search-hint">Tidak ada materi yang cocok dengan pencarian Anda.</p>';
    state.searchCursor = -1;
    return;
  }

  searchResults.innerHTML = top.map(({ item }, i) => `
    <button class="search-result ${i === 0 ? 'active' : ''}" data-action="search-result" data-module="${item.moduleId}" data-section="${item.section ?? ''}" data-target="${item.target ?? ''}">
      <span class="search-result-badge">${esc(item.badge)}</span>
      <strong class="search-result-title">${esc(item.title)}</strong>
      <p class="search-result-snippet">${esc(item.text.slice(0, 110))}…</p>
    </button>
  `).join('');

  state.searchCursor = 0;
}

function showSearch() {
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  searchInput.value = '';
  searchResults.innerHTML = '<p class="search-hint">Ketik untuk mencari konsep, komponen hardware/software, atau kisi-kisi ujian.</p>';
  searchInput.focus();
}

function hideSearch() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  searchInput.blur();
}

// -----------------------------------------------------------------------------
// NAVIGATION & ACTIONS
// -----------------------------------------------------------------------------
function openDashboard() {
  state.page = 'dashboard';
  state.active = null;
  renderNav();
  setBreadcrumb();
  renderDashboard();
  closeSidebar();
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
}

function openTugas(tab = 'overview') {
  state.page = 'tugas';
  state.tugasTab = tab;
  state.active = null;
  renderNav();
  setBreadcrumb();
  renderTugas();
  closeSidebar();
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
}

function openGuide() {
  state.page = 'guide';
  state.active = null;
  renderNav();
  setBreadcrumb();
  renderGuide();
  closeSidebar();
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
}

function openModule(moduleId, section = null, targetId = null) {
  state.page = 'module';
  state.active = moduleId;
  state.cheat = false;
  renderNav();
  setBreadcrumb();
  renderModule();
  closeSidebar();

  if (targetId) {
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: scrollBehavior(), block: 'center' });
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }
}

function closeSidebar() {
  $('#sidebar').classList.remove('open');
  $('#sidebar-scrim').classList.remove('open');
}

function updateVisuals() {
  const root = $('#module-visuals');
  const mod = currentModule();
  if (root && mod) {
    root.innerHTML = `<div class="section-kicker">VISUALISASI & EKSPLORASI ARSITEKTUR</div>${renderVisuals(mod)}`;
  }
}

function toast(msg) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 1800);
}

// -----------------------------------------------------------------------------
// EVENT DELEGATION
// -----------------------------------------------------------------------------
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;

  if (action === 'dashboard') { openDashboard(); return; }
  if (action === 'tugas') { openTugas('overview'); return; }
  if (action === 'tugas-tab') {
    state.tugasTab = btn.dataset.value;
    renderTugas();
    return;
  }
  if (action === 'guide') { openGuide(); return; }
  if (action === 'guide-filter') {
    state.guideMeeting = btn.dataset.value;
    renderGuide();
    return;
  }
  if (action === 'guide-topic') {
    openModule(btn.dataset.module, btn.dataset.section, btn.dataset.target);
    return;
  }
  if (action === 'module') {
    openModule(btn.dataset.module);
    return;
  }
  if (action === 'open-sidebar') {
    $('#sidebar').classList.add('open');
    $('#sidebar-scrim').classList.add('open');
    return;
  }
  if (action === 'close-sidebar') { closeSidebar(); return; }
  if (action === 'open-search') { showSearch(); return; }
  if (action === 'close-search') { hideSearch(); return; }
  if (action === 'theme') {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(themeKey, state.theme);
    applyTheme();
    return;
  }
  if (action === 'view-full') { state.cheat = false; renderModule(); return; }
  if (action === 'view-cheat') { state.cheat = true; renderModule(); return; }

  // Check section read status
  if (action === 'mark-section') {
    const key = btn.dataset.key;
    state.read.has(key) ? state.read.delete(key) : state.read.add(key);
    localStorage.setItem(readKey, JSON.stringify([...state.read]));
    btn.classList.toggle('done', state.read.has(key));
    btn.innerHTML = state.read.has(key) ? '✓ Selesai Dibaca' : '+ Tandai Selesai Dibaca';
    renderNav();
    return;
  }

  // Complete whole module
  if (action === 'complete-module') {
    const mod = course.find(m => m.id === btn.dataset.module);
    if (!mod) return;
    const allDone = progressFor(mod) === 100;
    mod.sections.forEach((_, i) => allDone ? state.read.delete(`${mod.id}:${i}`) : state.read.add(`${mod.id}:${i}`));
    localStorage.setItem(readKey, JSON.stringify([...state.read]));
    renderNav();
    renderModule();
    toast(allDone ? 'Progres modul diatur ulang.' : 'Seluruh modul ditandai selesai.');
    return;
  }

  // Flashcards
  if (action === 'flashcard') {
    const key = `${state.active}:${btn.dataset.index}`;
    state.flash[key] = !state.flash[key];
    const recall = $('#recall');
    if (recall) {
      recall.innerHTML = renderRecall(currentModule()).replace(/^<section[^>]*>|<\/section>$/g, '');
    }
    return;
  }

  // Quiz
  if (action === 'quiz-answer') {
    const key = `${state.active}:${btn.dataset.q}`;
    state.quiz[key] = Number(btn.dataset.option);
    const quizWrap = $('.quiz-wrap');
    if (quizWrap) {
      const fresh = renderRecall(currentModule());
      const temp = document.createElement('div');
      temp.innerHTML = fresh;
      const newQuiz = $('.quiz-wrap', temp);
      if (newQuiz) quizWrap.innerHTML = newQuiz.innerHTML;
    }
    return;
  }

  // Visualizer interactive actions
  // M1
  if (action === 'dikw-scenario') { state.ui.dikwScenario = btn.dataset.value; updateVisuals(); return; }
  if (action === 'dikw-step') { state.ui.dikwStep = Number(btn.dataset.value); updateVisuals(); return; }
  if (action === 'comp-fail') { state.ui.compFail = btn.dataset.value; updateVisuals(); return; }
  // M2
  if (action === 'cpu-step') { state.ui.cpuStep = Number(btn.dataset.value); updateVisuals(); return; }
  if (action === 'cpu-next') { state.ui.cpuStep = (state.ui.cpuStep + 1) % 4; updateVisuals(); return; }
  if (action === 'latency-scale') { state.ui.latencyScale = btn.dataset.value; updateVisuals(); return; }
  // M3
  if (action === 'stack-layer') { state.ui.stackLayer = btn.dataset.value; updateVisuals(); return; }
  if (action === 'enterprise-sys') { state.ui.enterpriseSys = btn.dataset.value; updateVisuals(); return; }
  // M4
  if (action === 'os-task') { state.ui.osScheduler = Number(btn.dataset.value); updateVisuals(); return; }
  if (action === 'ram-load') { state.ui.osRamLoad = btn.dataset.value; updateVisuals(); return; }
  // M5
  if (action === 'net-hop') { state.ui.netHop = Number(btn.dataset.value); updateVisuals(); return; }
  // M6
  if (action === 'erd-select') { state.ui.erdEntity = btn.dataset.value; updateVisuals(); return; }
  if (action === 'concurrency-mode') { state.ui.concurrencyMode = btn.dataset.value; updateVisuals(); return; }
  // M7
  if (action === 'pipe-step') { state.ui.pipeStep = Number(btn.dataset.value); updateVisuals(); return; }
  if (action === 'sim-val') { state.ui.simDataVal = Number(btn.dataset.value); updateVisuals(); return; }

  // Search result click
  if (action === 'search-result') {
    const modId = btn.dataset.module;
    hideSearch();
    if (modId === 'tugas') {
      openTugas(btn.dataset.target || 'overview');
    } else {
      openModule(modId, btn.dataset.section || null, btn.dataset.target || null);
    }
  }
});

// Keyboard controls
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    showSearch();
    return;
  }
  if (e.key === 'Escape') {
    hideSearch();
    closeSidebar();
    return;
  }
  if (overlay.classList.contains('open') && ['ArrowDown', 'ArrowUp'].includes(e.key)) {
    e.preventDefault();
    const list = [...searchResults.querySelectorAll('.search-result')];
    if (!list.length) return;
    state.searchCursor = (state.searchCursor + (e.key === 'ArrowDown' ? 1 : -1) + list.length) % list.length;
    list.forEach((item, i) => item.classList.toggle('active', i === state.searchCursor));
    list[state.searchCursor].scrollIntoView({ block: 'nearest' });
  }
  if (overlay.classList.contains('open') && e.key === 'Enter') {
    const active = searchResults.querySelector('.search-result.active');
    if (active) active.click();
  }
});

searchInput.addEventListener('input', e => doSearch(e.target.value));

// Init
buildSearchIndex();
applyTheme();
renderNav();
setBreadcrumb();
renderDashboard();
