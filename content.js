/* =====================================================================
   CONTENT.JS
   ---------------------------------------------------------------------
   This is the ONLY file you need to touch to update the site.
   Add, remove, or edit objects in the arrays below — the page rebuilds
   itself from this data automatically. No HTML editing required.

   Dates use "YYYY-MM" or "YYYY-MM-DD" so they sort correctly.
   Any field left out (or set to "") is simply skipped when rendering.
   ===================================================================== */

// ---------------------------------------------------------------------
// SKILLS — icon: any Font Awesome 5 class, link: where the icon points
// ---------------------------------------------------------------------
const SKILLS = [
  { icon: "fab fa-linux",      link: "https://github.com/torvalds/linux" },
  { icon: "fab fa-java",       link: "https://www.java.com/en/" },
  { icon: "fab fa-cuttlefish", link: "https://www.cplusplus.com/" },
  { icon: "fab fa-python",     link: "https://python.org" },
  { icon: "fab fa-figma",      link: "https://figma.com" },
  { icon: "fab fa-html5",      link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: "fab fa-css3-alt",   link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: "fab fa-js",         link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: "fab fa-git",        link: "https://git-scm.com/" },

  // Copy a line above to add another skill icon.
];

// ---------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------
const PROJECTS = [
    {
    title: "SOAR-X",
    description: "An explainable AI-driven security orchestration platform designed to assist SOC analysts in detecting threats and understanding automated security decisions.",
    image: "",
    tags: ["Cybersecurity", "XAI", "Machine Learning", "SOAR"],
    links: [
      { label: "View Code", url: "https://github.com/Starhopperr/SoarX", icon: "fab fa-github" }
    ]
  },

  {
    title: "Kokborok-English NMT",
    description: "A low-resource neural machine translation system for Kokborok-to-English translation, built using Meta's M2M100 model and a dataset of approximately 38,000 sentence pairs.",
    image: "",
    tags: ["NLP", "Transformers", "M2M100", "Research"],
    links: [
      { label: "View Code", url: "https://github.com/Starhopperr/Kokborok-English-NMT", icon: "fab fa-github" }
    ]
  },
    {
    title: "SYNQ",
    description: "Developed an E2EE private messaging android app in java. Implemented the Signal Protocol for E2EE and SHA256 for password hashing",
    image: "images/SYNQ.png",
    tags: ["E2EE","Java", "Cryptography", "Security"],
    links: [
      { label: "Code on GitHub", url: "https://github.com/Starhopperr/SYNQ", icon: "fab fa-github" }
    ]
  },
  {
    title: "NeuroAI",
    description: "Early Hemorrhage detection and adaptive speech rehabilitation platform for Traumatic Brain Injuries.",
    image: "images/NeuroAI.png",   
    tags: ["PyTorch", "MediaPipe","GradCAM"],
    links: [
      { label: "View Code", url: "https://github.com/Starhopperr/NeuroAI_TBI", icon: "fab fa-github" },
      { label: "Project Report", url: "https://starhopperr.github.io/NeuroAI_report/", icon: "fas fa-globe" }
    ]
  },

  // Copy the block below to add another project:
  // {
  //   title: "Project Name",
  //   description: "One or two sentence description of what it does and why it matters.",
  //   image: "images/your-image.png",   // optional — omit or leave "" to skip the image
  //   tags: ["Tag1", "Tag2"],           // optional
  //   links: [                          // optional, any number of buttons
  //     { label: "View Code", url: "https://github.com/...", icon: "fab fa-github" },
  //     { label: "Live Demo", url: "https://...", icon: "fas fa-external-link-alt" }
  //   ]
  // },
];

// ---------------------------------------------------------------------
// WRITEUPS — CTF writeups, blog posts, technical breakdowns, etc.
// ---------------------------------------------------------------------
const WRITEUPS = [
  {
    title: "My Beginnings",
    date: "4 July, 2026",
    summary: "A story about how I started programming.",
    tags: [],
    url: "https://medium.com/p/a50ff448252c"
  },
  // {
  //   title: "Writeup Title",
  //   date: "2025-08-14",
  //   summary: "One or two sentences on the challenge/topic and your approach.",
  //   tags: ["CTF", "Web", "Pwn"],
  //   url: "https://link-to-the-full-writeup"
  // },
];

// ---------------------------------------------------------------------
// ACHIEVEMENTS — certifications, awards, competition results, etc.
// ---------------------------------------------------------------------
const ACHIEVEMENTS = [
  // {
  //   title: "Achievement Title",
  //   issuer: "Issuing Organization",
  //   date: "2025-01",
  //   description: "One sentence on what it was and why it mattered.",
  //   url: "https://link-to-proof-or-certificate"   // optional
  // },
];

// ---------------------------------------------------------------------
// TIMELINE — key milestones. Listed in any order; sorted automatically.
// ---------------------------------------------------------------------
const TIMELINE = [
  // { date: "2023-06", title: "Milestone Title", description: "One sentence of context." },
];
