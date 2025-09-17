# TacTec Site (Next.js + Tailwind)

This project is generated from your uploaded assets ONLY. It turns your slides and images into a modern landing site.

## 🚀 Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## 🧱 Tech
- Next.js 14 (App Router)
- TailwindCSS
- Framer Motion
- No external images — only your provided files (copied under `/public/images`).

## 📁 Structure
- `src/app/page.tsx` — the landing page
- `src/components/*` — UI components
- `src/styles/globals.css` — Tailwind & global styles
- `public/images/*` — your uploaded assets

## ✏️ Edit
Replace images or adjust sections in `page.tsx`. Add new features by duplicating `FeatureCard` blocks.

## 📦 Build
```bash
npm run build
npm start
```

---

**Note:** If you want shadcn/ui, run `npx shadcn@latest init` and add components as needed.
