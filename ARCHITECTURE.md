# Portfolio Website Architecture

## Overview

The portfolio is a single-page static website. `index.html` defines the page structure, `css/style.css` controls its visual design and responsive layout, and `js/script.js` holds the editable content and renders the data-driven cards.

## Page structure

```text
index.html
├── welcome overlay
├── shared header navigation
├── home / introduction
├── Highlights
│   ├── selected project cards
│   └── selected achievement cards
├── Projects
├── Achievements
├── Skills
├── Contact
└── footer
```

Highlights sits between the introduction and the full Projects section. It uses the same project and achievement card renderers and styles as those sections, arranged in the same responsive grids. Its selection is controlled by title arrays in the JavaScript data.

## Files and responsibilities

| Path | Responsibility |
| --- | --- |
| `index.html` | Semantic page structure, navigation, section headings, and containers for generated cards and contact links. |
| `css/style.css` | Color and typography tokens, layouts, shared card styles, responsive breakpoints, focus states, and reduced-motion behavior. |
| `js/script.js` | Project, achievement, highlight selection, skills, and contact data; card rendering; welcome overlay timing; and current year. |
| `Documents/` | Certificate PDFs and the resume PDF linked from the page. |
| `Sources/` | Project preview images and videos. Paths are relative to `index.html`. |

## Content and rendering

The `projects` array is the source for the complete Projects section. Entries may include a title, status, description, technology tags, repository URL, demo URL, image path, or video path.

The `achievements` array is the source for the complete Achievements section. Entries may include a title, issuer, year, and certificate PDF path.

The `projectHighlights` and `achievementHighlights` arrays contain titles selected from those full data arrays. `initializePortfolio()` filters the source data by those titles and sends the resulting entries through the existing project and achievement card renderers. This keeps the Highlights cards consistent with the full sections.

The `skills` array renders the Skills cards. The `socialLinks` array renders the contact buttons, including the Resume link to `Documents/Resume.pdf`.

## Navigation and accessibility

- Header links navigate to Projects, Achievements, Skills, and Contact.
- Project cards link to their repository and optional demo; achievement cards open their certificate PDFs.
- Highlight subheadings separate the selected projects and achievements.
- The welcome overlay can be skipped and is hidden for visitors who prefer reduced motion.
- Generated project, achievement, and skill cards use the shared scroll reveal behavior.
