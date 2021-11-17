---
title: "Home page"
layout: layouts/home.njk
---

<!-- TODO: use some data to render -->
<ul>
  <li>
    <a href="/about">About</a>
  </li>
  <li>
    <a href="/now">Now</a>
  </li>
  <li>
    <a href="/notes">Notes</a>
  </li>
  <li>
    <a href="/projects">Projects</a>
  </li>
</ul>


<!-- <ul>
  {%- for post in collections.notes -%}
  <li>
    <p>
      {{ post.data.title }}
    </p>
    <time>{{ post.date }}</time>
  </li>
  {%- endfor -%}
</ul> -->