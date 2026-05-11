---
layout: default
title: Recon Logs
permalink: /blog/
---

<div class="container animate">
  <h1 class="section-title">Recon Logs & Tech Insights</h1>
  <p>A collaborative space for bug bounty hunters, developers, and tech enthusiasts to share knowledge and findings.</p>

  <div class="card" style="margin-top: 2rem; border-style: dashed; border-color: var(--accent-color);">
    <h3>🤝 Join the Community</h3>
    <p>Are you a security researcher or techie? We welcome guest posts! Submit your writeups and articles via GitHub to be featured on OnlyBugs.</p>
    <a href="https://github.com/onlybugs05/hrushikeshjetti.dev" class="tech-badge" style="margin-top: 1rem; display: inline-block;">Submit a Post (GitHub)</a>
  </div>

  <div class="posts-list" style="margin-top: 4rem;">

    {% for post in site.posts %}
      <article class="card" style="margin-bottom: 2rem;">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 1rem;">{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        <a href="{{ post.url | relative_url }}" style="font-size: 0.9rem; font-weight: 700; margin-top: 1rem; display: inline-block;">Read Full Report →</a>
      </article>
    {% endfor %}
  </div>
</div>
security learnings.
