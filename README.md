# hrushikeshjetti.dev

Personal website and security blog for **Hrushikesh Jetti**.

Live: **https://hrushikeshjetti.dev**

## Tech stack

- GitHub Pages
- Jekyll (minima theme)
- SCSS styling in `assets/main.scss`
- Markdown content pages and posts

## What’s in this repo

- `index.md` → homepage content
- `blog.md` → blog landing page
- `_posts/` → blog posts
- `_config.yml` → site config, metadata, plugins
- `.github/workflows/jekyll-gh-pages.yml` → deployment workflow

## Add a blog post

Create a file at:

`_posts/YYYY-MM-DD-title.md`

Use this front matter:

```md
---
layout: post
title: "Your title"
date: YYYY-MM-DD HH:MM:SS +0000
categories: [blog]
---
```

## Deployments

Pushes to `main` trigger the GitHub Actions workflow that builds and deploys the site to GitHub Pages.
