FROM docker.io/ezconnect/strapiwebhook:0.4.0

# docker.io/ezconnect/strapiwebhook
# ENV STRAPI_HOST=http://localhost:1337
# ENV STRAPI_API_TOKEN=api-token
# ENV SITE_DIR=/home/web
# ENV TEMPLATE_DIR=/home/web/.config/template
# ENV DEFAULT_LOCALE=en
# ENV SINGLE_TYPES=site,home,nav,about
# ENV COLLECTION_TYPES=section,contributor,article,document,career,project,page,resume
# ENV CMD="echo 'build the site'; hugo --gc --minify;"
# ENV DEBOUNCED_CMD="echo 'debounced cmd'"
# ENV DEBOUNCED_TIMEOUT=300

ENV GIT_USERNAME=Vinh
ENV GIT_EMAIL=thanh.vinh@hotmail.com
ENV GIT_REPO=https://github.com/ez-connect/hugo-theme.git
ENV GIT_BRANCH=main
ENV SSH_PUBLIC=
ENV SSH_PRIVATE=

COPY --chmod=001 .config/oci/bin/ /usr/local/bin/

CMD git-setup.sh; \
	git-clone.sh; \
	hugo-build.sh; \
	nginx -g 'daemon on;'; \
	strapiwebhook serve \
		-d=$SITE_DIR \
		-T=$TEMPLATE_DIR \
		-C=$COLLECTION_TYPES \
		-S=$SINGLE_TYPES \
		-l=$DEFAULT_LOCALE \
		-s=$STRAPI_HOST \
		-t=$TRAPI_API_TOKEN \
		-c="$CMD" \
		--debounced-cmd="$DEBOUNCED_CMD" \
		--debounced-timeout=$DEBOUNCED_TIMEOUT
