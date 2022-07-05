FROM docker.io/ezconnect/strapiwebhook

# docker.io/ezconnect/strapiwebhook
# ENV STRAPI_HOST='http://localhost:1337'
# ENV STRAPI_API_TOKEN='api-token'
# ENV HUGO_SITE_DIR='web'
# ENV DEFAULT_LOCALE='en'
# ENV SINGLE_TYPES='site,home,nav,about'
# ENV COLLECTION_TYPES='contributor,article,document,career,project,page,resume'
# ENV GIT_COMMIT='Sync CMS'
# ENV GIT_TIMEOUT='300'

ENV GIT_USERNAME=Vinh
ENV GIT_EMAIL=thanh.vinh@hotmail.com
ENV GIT_REPO=https://github.com/ez-connect/hugo-theme.git
ENV GIT_BRANCH=main
ENV SSH_PUBLIC=
ENV SSH_PRIVATE=

COPY entrypoint.sh .

USER root

RUN set -ex && \
  chmod +x entrypoint.sh && \
  mv entrypoint.sh /usr/bin/

USER webhook

ENTRYPOINT 'entrypoint.sh'
