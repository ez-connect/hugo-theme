{{- $data := set . "draft" (not .publishedAt) -}}

{{- with $data -}}
---
{{ toYamlByFields . "title" "description" }}
tags:
{{ indent (toYaml (split .tags ",")) 2 }}
{{- with .recommended }}
recommended: {{ . }}
{{- end }}
{{- with .thumbnail }}
thumbnail:
{{ indent (toYamlByFields . "alternativeText" "caption" "url") 2 }}
{{- end }}
createdBy: {{ .createdBy.username }}
createdAt: {{ .createdAt }}
updatedBy: {{ .updatedBy.username }}
updatedAt: {{ .updatedAt }}
{{ toYamlByFields . "locale" "draft" }}
---

{{ .content }}
{{- end }}
