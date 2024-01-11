---
title: "News"
layout: textlay
sitemap: false
permalink: /news.html
---

## News

<div class="jumbotron">
{% for article in site.data.news %}
<!-- <p style="font-size:15px; display:inline">[{{ article.date }}]&ensp;</p><p style="font-size:20px; display:inline">{{ article.headline }}</p> -->
<p style="font-size:15px; display:inline">[{{ article.date }}]&ensp;- </p><p style="font-size:20px; display:inline">{{ article.headline }}</p>
<!-- <h4>{{ article.date }} - {{ article.headline }}</h4> -->

{{ article.content }}
{% endfor %}
</div>
