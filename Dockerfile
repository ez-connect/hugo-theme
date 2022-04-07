FROM docker.io/ezconnect/strapi-webhook:0.2.1

ENV GIT_USERNAME=Vinh
ENV GIT_EMAIL=thanh.vinh@hotmail.com
ENV GIT_REPO=https://github.com/ez-connect/hugo-theme.git
ENV GIT_BRANCH=main
ENV SSH_PUBLIC=
ENV SSH_PRIVATE=

WORKDIR /app

COPY entrypoint.sh .

ENTRYPOINT ./entrypoint.sh
