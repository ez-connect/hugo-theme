---
title: AAA
---

```mermaid
sequenceDiagram
  Writer ->>+ Strapi: CRUD
  Strapi ->>+ Webhook: Send webhooks
  Webhook ->>+ Site: Write or delete YAML/MD files
  Webhook ->>+ Site: Build site
  Webhook ->>+ Git: git push
```
