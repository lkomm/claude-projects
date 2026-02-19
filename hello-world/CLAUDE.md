# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

No test framework is configured in this project.

## Architecture

This is a **Next.js 16 App Router** project with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

- `app/layout.tsx` — Root layout: sets up Geist Sans/Mono fonts (via `next/font/google`) and global CSS
- `app/page.tsx` — Home page (the only route currently)
- `app/globals.css` — Global styles; Tailwind is configured via `postcss.config.mjs` using `@tailwindcss/postcss`

ESLint uses `eslint-config-next` with both `core-web-vitals` and `typescript` rule sets (`eslint.config.mjs`).
