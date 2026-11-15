# Han Htoo Aung — Portfolio

A single-page portfolio built with HTML, CSS, and vanilla JavaScript. It presents selected projects, achievements, skills, and ways to get in touch.

## Sections

- **Highlights** — selected project and achievement cards, using the same card designs as their full sections.
- **Projects** — project descriptions, technology tags, previews, and repository or demo links.
- **Achievements** — certificates and milestones, with links to certificate PDFs.
- **Skills** — current skills and learning areas.
- **Contact** — GitHub, LinkedIn, email, and resume links.

The welcome overlay fades after two seconds and can be skipped.

## Project structure

```text
index.html
css/
  style.css
js/
  script.js
Documents/       # Certificates and resume PDF
Sources/         # Project images and videos
```

## Updating content

Edit the data arrays near the top of `js/script.js`:

- `projects` and `achievements` contain the complete entries shown in their sections.
- `projectHighlights` and `achievementHighlights` list the titles to feature in Highlights. Each title must match an entry in the corresponding data array. Highlight cards reuse the same renderers and styles as the full sections.
- `skills` contains skill categories and technologies.
- `socialLinks` contains the contact buttons. The Resume link points to `Documents/Resume.pdf`.

Project images and videos, certificate PDFs, and the resume are linked with paths relative to `index.html`.

## Running locally

Open `index.html` in a browser, or serve the folder with a local static web server.
