---
title: "Notes"
layout: layouts/post.njk
---

<h1>This is the notes page?</h1>

<ul>
  {%- for post in collections.notes -%}
  <li>
    <a href="{{ post.url }}">
      {{ post.data.title }}
      <time>{{ post.date }}</time>
    </a>
  </li>
  {%- endfor -%}
</ul>