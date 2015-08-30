---
layout: page
title: Все посты 
tagline: 
---
{% include JB/setup %}


<ul class="posts">
  {% for post in site.posts %}<hr>
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}---{{ post.tagline }}</a>
	
	</li>
  {% endfor %}
</ul>
<hr>



