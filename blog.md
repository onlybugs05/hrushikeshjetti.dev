---
layout: default
title: Recon Logs
permalink: /blog/
---

<div class="container animate">
  <h1 class="section-title">Recon Logs</h1>
  <p>Security research, bug bounty writeups, and technical experiments.</p>

  <div class="posts-list" style="margin-top: 3rem;">
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
