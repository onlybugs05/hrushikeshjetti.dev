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

## 🤝 Community Contributions

OnlyBugs is a collaborative space! We welcome security researchers, bug bounty hunters, and developers to share their knowledge.

### How to Contribute a Guest Post

1.  **Fork the Repository**: Create your own copy of this repo.
2.  **Add Yourself as an Author**:
    - Open `_config.yml`.
    - Add your profile under the `authors` section:
      ```yaml
      authors:
        your_username:
          name: "Your Name"
          display_name: "Nickname"
          github: "your_github"
          bio: "A short bio about you."
          avatar: "https://github.com/your_github.png"
      ```
3.  **Write Your Post**:
    - Create a new markdown file in `_posts/` following the `YYYY-MM-DD-title.md` format.
    - Use the following front-matter:
      ```md
      ---
      layout: post
      title: "Your Awesome Title"
      date: YYYY-MM-DD
      author: your_username
      categories: [security, tech]
      ---
      ```
4.  **Submit a Pull Request**: Send your changes our way, and once reviewed, they'll be live on OnlyBugs!

## 🛠️ Deployments
Pushes to `main` trigger the GitHub Actions workflow for GitHub Pages.


