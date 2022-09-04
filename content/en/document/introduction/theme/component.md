---
title: Components
description:
weight: 3
createdBy: thanh.vinh@hotmail.com
createdAt: 2022-08-26T15:59:43+07:00
updatedBy: thanh.vinh@hotmail.com
updatedAt: 2022-08-26T15:59:43+07:00
---

## Nav

```html
{{ partial "nav" . }}
```

```safehtml
<nav class="nav">
  <div class="logo">
    <a href="/"><strong>Ez-Connect</strong></a>
  </div>

  <!-- Menu for desktop -->
  <ul>
      <li style="list-style: none;"><a href="">Link</a></li>
  </ul>
</nav>
```

## TOC

```html
{{ partial "shared/toc" . }}
```

```safehtml
<div class="toc" style="width: 100%; height: unset;">
  <nav id="TableOfContents">
  <ul>
    <li><a href="#heading" class="active">Heading</a></li>
    <li><a href="#paragraph">Paragraph</a></li>
  </ul>
</nav>
</div>
```

## Search input

```html
{{ partial "shared/search-input" . }}
```

```safehtml
<div class="search-input">
  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Search</title><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" stroke-miterlimit="10" class="ionicon-fill-none ionicon-stroke-width"></path><path stroke-linecap="round" stroke-miterlimit="10" d="M338.29 338.29L448 448" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
  <input type="text" id="search-input" placeholder="Search" autocomplete="off">
</div>
```

## Tabs

```html
{{ $tabs := slice (dict "id" "tab1" "title" "Tab #1") }}
{{ $tabs = $tabs | append dict "id" "tab2" "title" "Tab #2") }}

{{ partial "shared/tabs" (dict "index" 0 "items" $tabs) }}

<div id="tabTab1">
  <p>Tab #1 content</p>
</div>

<div id="tabTab2" class="hide">
  <p>Tab #2 content</p>
</div>
```

```safehtml
<div class="tab" data-index="0">
  <button class="active" data-id="tab1" data-target="tabTab1">Tab #1</button>
  <button data-id="tab2" data-target="tabTab2">Tab #2</button>
</div>

<div id="tabTab1">
  <p>Tab #1 content</p>
</div>

<div id="tabTab2" class="hide">
  <p>Tab #2 content</p>
</div>
```

## Author

```html
{{ partial "shared/author" . }}
```

```safehtml
<div class="author">
  <a href="/contributor/vinh/">
    <img src="/uploads/avatar.svg">
    Vinh
  </a>
  <span class="dot">∙</span>
  <span class="timeago" datetime="2022-08-28T09:42:53+07:00" timeago-id="4">2 days ago</span>
</div>

<div class="author">
  <a href="/contributor/vinh/">
    <div class="avatar">
      <h5>V</h5>
    </div>
    Vinh
  </a>
  <span class="dot">∙</span>
  <span class="timeago" datetime="2022-08-28T09:42:53+07:00" timeago-id="4">2 days ago</span>
</div>
```

TBD
