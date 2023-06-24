{{- $data := set . "draft" (not .publishedAt) -}}

{{- with $data -}}
---
{{ toYamlByFields . "title" "position" "phone" "email" "webpage" "address" "bio" }}
avatar:
  url: {{ index .avatar "url" }}
createdBy: {{ .createdBy.username }}
createdAt: {{ .createdAt }}
updatedBy: {{ .updatedBy.username }}
updatedAt: {{ .updatedAt }}
{{ toYamlByFields . "social" "experiences" "projects" "skills" "educations" "awards" "languages" "interests" "lang" "draft" }}
---
{{- end }}
