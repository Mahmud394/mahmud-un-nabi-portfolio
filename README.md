# Mahmud Un Nabi — Portfolio Link: https://mahmud-un-nabi.netlify.app

A premium, minimal, dark/light-themed personal portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

## Project structure

```
src/
  components/   UI sections (Navbar, Hero, About, Skills, Projects, Research, ...)
  context/      ThemeContext (dark/light, persisted in localStorage)
  data/         Content only — edit these files to update the site's text
public/
  mahmud.png              profile photo (replace with a new file of the same name to update)
  Mahmud_Un_Nabi_CV.pdf   downloadable CV, linked from the Hero "Download CV" button
  favicon.svg             brand favicon
cv-source/
  CV.md               editable, human-readable CV content
  generate_cv.py      regenerates Mahmud_Un_Nabi_CV.pdf from the content (reportlab)
```

## Editing content

All real content lives in `src/data/*.js` — there's no text to hunt for inside components:

- `profile.js` — name, intro, social links, education, contact email, resume path
- `skills.js` — skill categories
- `projects.js` — project cards. Leave `githubUrl` / `demoUrl` as `undefined` until a real link exists — the UI shows a disabled state instead of a fake button.
- `research.js` — thesis, research interests, coding profiles, GitHub repositories

## Updating the profile photo

Replace `public/mahmud.png` with a new image using the same filename (or update `profile.photo` in `src/data/profile.js`). A portrait-oriented photo (roughly 4:5) works best with the hero layout.

## Updating the CV

1. Edit `cv-source/CV.md` for the plain-text content.
2. Mirror the change in `cv-source/generate_cv.py`.
3. Run `pip install reportlab` then `python3 cv-source/generate_cv.py` — this writes `Mahmud_Un_Nabi_CV.pdf`.
4. Copy the regenerated PDF into `public/Mahmud_Un_Nabi_CV.pdf` so the "Download CV" button serves the new version.

## Theme system

- Dark is the default on first visit; the site otherwise respects the visitor's OS-level light/dark preference before any choice is saved.
- The toggle in the navbar (sun/moon icon) switches themes and saves the choice to `localStorage` (`mahmud-theme`) so it persists across visits.
- Colors are defined as Tailwind theme tokens in `tailwind.config.js` (`bg`, `surface`, `accent`, `ink`, `muted`, each with a `-dark` variant).

## Contact form

The contact form does not have a backend connected. Submitting it opens the visitor's email client with the message pre-filled, addressed to the configured email in `src/data/profile.js`. To make it actually send messages in-app, wire the `handleSubmit` function in `src/components/Contact.jsx` to a form backend (e.g. Formspree, EmailJS) or your own API route.

## Deploying

The `npm run build` output in `dist/` is static and can be deployed to any static host (Vercel, Netlify, GitHub Pages, etc.).
