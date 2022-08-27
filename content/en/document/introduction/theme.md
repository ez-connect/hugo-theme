---
title: Theme
description: https://m3.material.io/theme-builder#/custom
weight: 5
createdBy: thanh.vinh@hotmail.com
createdAt: 2022-08-26T15:59:43+07:00
updatedBy: thanh.vinh@hotmail.com
updatedAt: 2022-08-26T15:59:43+07:00
---

## Material Builder Theme

https://m3.material.io/theme-builder#/custom


## Your Theme

```safehtml
 <div class="theme-showcase">
  <div class="primary on-primary-text">
    Primary
  </div>

  <div class="on-primary primary-text">
    On Primary
  </div>

  <div class="primary-container on-primary-container-text">
    Primary Container
  </div>

  <div class="on-primary-container primary-container-text">
    On Primary Container
  </div>
 </div>

<div class="theme-showcase">
  <div class="secondary on-secondary-text">
    Secondary
  </div>

  <div class="on-secondary secondary-text">
    On Secondary
  </div>

  <div class="secondary-container on-secondary-container-text">
    Primary Secondary
  </div>

  <div class="on-secondary-container secondary-container-text">
    On Secondary Container
  </div>
</div>

<div class="theme-showcase">
  <div class="tertiary on-tertiary-text">
    Tertiary
  </div>

  <div class="on-tertiary tertiary-text">
    On Tertiary
  </div>

  <div class="tertiary-container on-tertiary-container-text">
    Primary Tertiary
  </div>

  <div class="on-tertiary-container tertiary-container-text">
    On Tertiary Container
  </div>
</div>

<div class="theme-showcase">
  <div class="error on-error-text">
    Error
  </div>

  <div class="on-error error-text">
    On Error
  </div>

  <div class="error-container on-error-container-text">
    Error Container
  </div>

  <div class="on-error-container error-container-text">
    On Error Container
  </div>
</div>

<div class="theme-showcase">
  <div class="background on-background-text">
    Background
  </div>

  <div class="on-background background-text">
    On Background
  </div>

  <div class="surface on-surface-text">
    Surface
  </div>

  <div class="surface-text on-surface">
    On Surface
  </div>
</div>

<div class="theme-showcase">
  <div class="outline on-outline">
    Outline
  </div>

  <div class="surface-variant on-surface-variant-text">
    Surface-variant
  </div>

  <div class="on-surface-variant surface-variant-text">
    On Surface variant
  </div>
</div>
```

## Typography

```safehtml
<div class="typography-showcase">
  <div class="display-large">Display large</div>
  <div class="display-medium">Display medium</div>
  <div class="display-small">Display small</div>

  <div class="headline-large">Headline large</div>
  <div class="headline-medium">Headline medium</div>
  <div class="headline-small">Headline small</div>

  <div class="title-large">Title large</div>
  <div class="title-medium">Title medium</div>
  <div class="title-small">Title small</div>

  <div class="label-large">Label large</div>
  <div class="label-medium">Label medium</div>
  <div class="label-small">Label small</div>

  <div class="body-large">Body large</div>
  <div class="body-medium">Body medium</div>
  <div class="body-small">Body small</div>
</div>
```

## Components

### Nav

```safehtml
<nav class="nav">
  <div class="logo">
    <a id="navMenuButton" class="menu-btn" href="#">
      {{ partial "shared/ionicons" "logo-github" }}
    </a>
    <img alt="{{ $nav.logo.name }}" src="https://github.com/orgs/ez-connect/dashboard" />
    <a href="/"><strong>{{ $nav.title }}</strong></a>
  </div>

  <!-- Menu for desktop -->
  <ul>
    {{ range $links }}
      <li><a href="{{ .url }}">{{ .name }}</a></li>
    {{ end }}
  </ul>
</nav>
```
