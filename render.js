/* =====================================================================
   RENDER.JS
   ---------------------------------------------------------------------
   Reads the arrays in content.js and builds the matching HTML.
   You should not need to edit this file to add content — edit
   content.js instead. Only touch this file if you're changing how a
   section is laid out.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderWriteups();
  renderAchievements();
  renderTimeline();
});

// ---- helpers ----------------------------------------------------------

function formatDate(str) {
  if (!str) return "";
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const parts = str.split("-");
  const year = parts[0];
  const month = parts[1] ? months[parseInt(parts[1], 10) - 1] : null;
  return month ? `${month} ${year}` : year;
}

function emptyState(message) {
  return `<p class="empty-state">${message}</p>`;
}

function tagRow(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="tag-row">${tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
}

// ---- section renderers --------------------------------------------------

function renderSkills() {
  const container = document.querySelector(".skill-icons");
  if (!container) return;
  container.innerHTML = SKILLS.map(s => `
    <a href="${s.link}" target="_blank" rel="noopener"><i class="${s.icon}"></i></a>
  `).join("");
}

function renderProjects() {
  const container = document.querySelector(".projects-grid");
  if (!container) return;

  if (!PROJECTS.length) {
    container.innerHTML = emptyState("Projects coming soon.");
    return;
  }

  container.innerHTML = PROJECTS.map(p => `
    <article class="card project-card">
      <h3>${p.title}</h3>
      ${p.demo ? `
        <div class="hashgen">
          <input type="text" id="shaInput" placeholder="Type something and hover to hash it" autocomplete="off">
        </div>
      ` : ""}
      <div class="card-body">
        ${p.image ? `<img class="card-img" src="${p.image}" alt="${p.title}">` : ""}
        <div class="card-text">
          <p>${p.description}</p>
          ${tagRow(p.tags)}
          ${p.links && p.links.length ? `
            <div class="card-links">
              ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener"><i class="${l.icon}"></i> ${l.label}</a>`).join("")}
            </div>
          ` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function renderWriteups() {
  const container = document.querySelector(".writeups-list");
  if (!container) return;

  if (!WRITEUPS.length) {
    container.innerHTML = emptyState("Writeups coming soon.");
    return;
  }

  const sorted = [...WRITEUPS].sort((a, b) => b.date.localeCompare(a.date));
  container.innerHTML = sorted.map(w => `
    <a class="card writeup-card" href="${w.url}" target="_blank" rel="noopener">
      <time>${formatDate(w.date)}</time>
      <h3>${w.title}</h3>
      <p>${w.summary}</p>
      ${tagRow(w.tags)}
    </a>
  `).join("");
}

function renderAchievements() {
  const container = document.querySelector(".achievements-list");
  if (!container) return;

  if (!ACHIEVEMENTS.length) {
    container.innerHTML = emptyState("Achievements coming soon.");
    return;
  }

  const sorted = [...ACHIEVEMENTS].sort((a, b) => b.date.localeCompare(a.date));
  container.innerHTML = sorted.map(a => {
    const inner = `
      <time>${formatDate(a.date)}</time>
      <h3>${a.title}</h3>
      ${a.issuer ? `<p class="issuer">${a.issuer}</p>` : ""}
      <p>${a.description || ""}</p>
    `;
    return a.url
      ? `<a class="card achievement-card" href="${a.url}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="card achievement-card">${inner}</div>`;
  }).join("");
}

function renderTimeline() {
  const container = document.querySelector(".timeline-track");
  if (!container) return;

  if (!TIMELINE.length) {
    container.innerHTML = emptyState("Timeline coming soon.");
    return;
  }

  const sorted = [...TIMELINE].sort((a, b) => a.date.localeCompare(b.date));
  container.innerHTML = sorted.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <time>${formatDate(item.date)}</time>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </div>
  `).join("");
}
