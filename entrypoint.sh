#!/bin/sh

if [ -z "$SSH_PUBLIC" ] | [ -z "$SSH_PRIVATE" ]; then
  echo "Missing SSH"
else
  mkdir -p ~/.ssh
  chmod 766 ~/.ssh
  echo -e "$SSH_PUBLIC\n" > ~/.ssh/id_rsa.pub
  echo -e "$SSH_PRIVATE\n" > ~/.ssh/id_rsa
  chmod 600 ~/.ssh/*
fi

if [ -z "$GIT_USERNAME" ] | [ -z "$GIT_EMAIL" ]; then
  echo "Missing git user info"
else
  git config --global user.name "$GIT_USERNAME"
  git config --global user.email "$GIT_EMAIL"
fi

if [ -z "$GIT_REPO" ] | [ -z "$GIT_BRANCH" ]; then
  echo "Missing git repository info"
  exit 1
fi

echo "GIT_USERNAME=$GIT_USERNAME"
echo "GIT_EMAIL=$GIT_EMAIL"
echo "GIT_REPO=$GIT_REPO"
echo "GIT_BRANCH=$GIT_BRANCH"
echo "GIT_MSG=$GIT_MSG"
echo "GIT_TIMEOUT=$GIT_TIMEOUT"
echo "CMS_URL=$CMS_URL"

# Clone the site
if [ -d web/.git ]; then
  echo 'Git exists'
  cd web && git pull && cd ..
else
  git clone --branch=$GIT_BRANCH $GIT_REPO web
fi

# Build
cd web && hugo --gc --minify && cd ..

# Start nginx
nginx
# Start strapi webhook
echo "STRAPI_HOST=$STRAPI_HOST"
echo "STRAPI_API_TOKEN=$STRAPI_API_TOKEN"
echo "HUGO_SITE_DIR=$HUGO_SITE_DIR"
echo "DEFAULT_LOCALE=$DEFAULT_LOCALE"
echo "SINGLE_TYPES=$SINGLE_TYPES"
echo "SINGLE_TYPES=$SINGLE_TYPES"
echo "COLLECTION_TYPES=$COLLECTION_TYPES"
echo "GIT_MSG=$GIT_MSG"
echo "GIT_TIMEOUT=$GIT_TIMEOUT"

strapiwebhook serve \
	--strapi=$STRAPI_HOST \
	--token=$STRAPI_API_TOKEN \
	--dir=$HUGO_SITE_DIR \
	--locale=$DEFAULT_LOCALE \
	--single=$SINGLE_TYPES \
	--collection=${COLLECTION_TYPES} \
	--commit="$GIT_MSG" \
	--timeout=$GIT_TIMEOUT
