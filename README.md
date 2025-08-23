# Academic Page (Vue 3, JS)

A minimal, sober academic homepage built with Vue 3 (script setup) and Vite. English-only, no i18n, no TypeScript.

## Usage

1. Install dependencies

   ```bash
   npm install
   ```

2. Start dev server

   ```bash
   npm run dev
   ```

3. Build for production

   ```bash
   npm run build
   npm run preview
   ```

## Customize
- Update `src/App.vue` with your name, affiliations, and links.
- Replace `/public/profile.jpg` with your portrait (same filename).
- Add publications by appending more `<PublicationItem />` entries.

## Structure
- `index.html`: Vite entry
- `src/main.js`: App bootstrap
- `src/App.vue`: Page layout
- `src/components/*`: Reusable components
- `src/style.css`: Global styles
- `public/profile.jpg`: Placeholder portrait (add your own)
