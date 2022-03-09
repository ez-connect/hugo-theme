FROM docker.io/library/nginx:alpine

WORKDIR /

COPY public/ /usr/share/nginx/html
