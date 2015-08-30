---
layout: page
title: Blog 
tagline: скорей ныряй в мой тихий омут-ты нравишься моим чертям.
---
{% include JB/setup %}


<ul class="posts">
  {% for post in site.posts limit:7 %}<hr>
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}---{{ post.tagline }}</a>
	<p>{{ post.excerpt }}</p>
	</li>
  {% endfor %}
</ul>
<hr>
[Все посты]({{ BASE_PATH }}/articles/all.html)



