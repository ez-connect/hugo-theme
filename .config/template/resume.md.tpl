{{- $data := set . "draft" (not .publishedAt) -}}

{{- with $data -}}
---
{{ toYamlByFields . "title" "position" "tel" "email" "webpage" "address" }}
avatar:
  url: {{ index .avatar "url" }}
createdBy: {{ .createdBy.username }}
createdAt: {{ .createdAt }}
updatedBy: {{ .updatedBy.username }}
updatedAt: {{ .updatedAt }}
{{ toYamlByFields . "social" "experiences" "projects" "skills" "educations" "awards" "lang>
---
{{- end }}