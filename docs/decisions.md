# Decisions

This document tracks the main technical and product decisions for this portfolio, with short reasoning and trade-offs.

---

## 1) Next.js (App Router)
**Decision:** Use Next.js with App Router for routing and page composition.

**Why:**
- Clean routing for project pages (`/projects/[slug]`)
- Great developer experience and performance defaults
- Easy deployment (Vercel-friendly)

**Trade-offs:**
- Slight learning curve around App Router conventions (server/client components)

---

## 2) UI Stack: TailwindCSS + shadcn/ui + lucide-react
**Decision:** Use TailwindCSS for styling and shadcn/ui as the component base, with lucide-react icons.

**Why:**
- Fast iteration (especially for a portfolio)
- Consistent design system without heavy custom CSS
- High-quality components that are easy to customize

**Trade-offs:**
- Requires discipline to keep styles consistent (avoid “random Tailwind” everywhere)

---

## 3) Project Content as Local Data (TS/JSON)
**Decision:** Keep project information as local data (TypeScript/JSON) for the MVP.

**Why:**
- No backend needed for the portfolio
- Easy to update content and iterate quickly
- Simple deployment, fewer moving parts

**Trade-offs:**
- Content changes require redeploy
- If the portfolio grows a lot, a CMS could be considered later

---

## 4) Portfolio Information Architecture
**Decision:** Use two main views:
- Home page (`/`) for bio, skills, and featured projects
- Project details page (`/projects/[slug]`) focused on one project with tabs

**Why:**
- Clear navigation
- Good storytelling: overview first, details on demand
- Easy for recruiters to scan and drill down

---

## 5) Documentation-First Workflow
**Decision:** Track progress using `docs/`, a roadmap, and a changelog.

**Why:**
- Makes the repo readable and professional
- Shows evolution over time
- Helps maintain focus on milestones
