# OnlyBugs - hrushikeshjetti.dev

Premium personal portfolio and security research blog for **Jetti Hrushikesh (@OnlyBugs05)**.

Live: **https://hrushikeshjetti.dev**

## ✨ Theme: OnlyBugs Premium
A custom-built, high-performance Jekyll theme designed for security researchers and bug bounty hunters.

- **Aesthetics**: Dark mode, glassmorphism, neon green accents.
- **Tech Stack**: Jekyll, Vanilla CSS, Inter & Fira Code typography.
- **Features**:
  - Dynamic Hero section with typing effects.
  - YAML-style "About Me" card.
  - Interactive tech stack badges.
  - Live GitHub stats integration.
  - Automated SEO and social tags.

## 🚀 Structure

- `index.md` → Homepage with profile, tech stack, and stats.
- `blog.md` → Research & Recon Logs landing page.
- `terms.md` → Affiliate Terms of Service.
- `_layouts/` → Custom HTML templates (default, home).
- `assets/css/main.css` → Core design system and styles.
- `assets/js/main.js` → Interactive components and animations.

## 📝 Creating Content

### Add a Research Log (Post)
Create a file at `_posts/YYYY-MM-DD-title.md`:

```md
---
layout: default
title: "Finding XSS in Company X"
date: YYYY-MM-DD
categories: [security, bug-bounty]
---

Content goes here...
```

## 🛠️ Deployments
Pushes to `main` trigger the GitHub Actions workflow for GitHub Pages.

