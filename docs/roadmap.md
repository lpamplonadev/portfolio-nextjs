# Roadmap

This roadmap is a living checklist. The goal is to build a clean portfolio MVP fast, then iterate with polish and improvements.

---

## Milestone 0 — Foundation (Docs + Setup)
- [x] Create repository
- [x] Add initial documentation structure (README / roadmap / decisions / changelog)
- [x] Bootstrap Next.js project
- [ ] Setup Tailwind + shadcn/ui baseline

**Definition of done:**
- Repo has a clear README + roadmap + decisions + changelog
- Project builds locally and runs with a minimal page

---

## Milestone 1 — MVP UI (Home + Projects)
- [ ] Navbar (Home / Projects / About / Contact)
- [ ] Hero section (name, role, short bio, CTAs)
- [ ] Skills section (grouped chips)
- [ ] Projects carousel (static data)
- [ ] ProjectCard component (title, desc, tags, repo link)
- [ ] Basic responsive layout (mobile-first)

**Definition of done:**
- Home looks good on mobile/desktop
- Carousel is usable and stable

---

## Milestone 2 — Project Detail Page
- [ ] Route: `/projects/[slug]`
- [ ] Dynamic project loading from local data
- [ ] Tabs: About / Tests / Q&A (optional: Architecture)
- [ ] Q&A as accordion (FAQs)
- [ ] “How to run locally” section per project

**Definition of done:**
- Clicking a project card navigates correctly
- Each project page has structured, readable info

---

## Milestone 3 — Polish + Quality
- [ ] SEO metadata + OpenGraph
- [ ] Better loading states (skeletons)
- [ ] Animations (subtle hover/transitions)
- [ ] Accessibility pass (keyboard navigation, focus, contrast)
- [ ] Lighthouse review (performance/accessibility)
- [ ] Add screenshots to `docs/screenshots/`
- [ ] Deploy (Vercel)

**Definition of done:**
- Portfolio is deploy-ready and shareable
- Pages look professional and consistent
