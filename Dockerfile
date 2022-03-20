FROM docker.io/ezconnect/strapi-webhook:0.1.2

ARG httpServerVersion=0.4.0

ENV GIT_USERNAME=
ENV GIT_EMAIL=
ENV GIT_REPO=
ENV GIT_BRANCH=
ENV SSH_PUBLIC=
ENV SSH_PRIVATE=

COPY entrypoint.sh .

RUN wget https://github.com/ez-connect/http-server/releases/download/v${httpServerVersion}/http-server-linux.tar.gz && \
  tar -xzf http-server-linux.tar.gz && \
  rm *.gz && \
  chmod +x http-server-linux && \
  mv http-server-linux /usr/bin/http-server

ENTRYPOINT ./entrypoint.sh
