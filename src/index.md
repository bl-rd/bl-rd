---
title: "Home page"
layout: layouts/post.njk
---

<h1>Home page 🎃</h1>

<ul>
  {%- for post in collections.notes -%}
  <li>
    <p>
      {{ post.data.title }}
    </p>
    <time>{{ post.date }}</time>
  </li>
  {%- endfor -%}
</ul>