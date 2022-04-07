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
if [ -d site/.git ]; then
  echo 'Git exists'
  cd site && git pull && cd ..
else
  git clone --branch $GIT_BRANCH $GIT_REPO site
fi

# Build
cd site && hugo --gc --minify && cd ..

# Reload nginx
cp /etc/nginx/http.d/default.conf /etc/nginx/http.d/default.conf.save
cp site/config/nginx.default.conf /etc/nginx/http.d/default.conf
nginx && nginx -s reload

# Start strapi webhook
strapi-webhook -m "$GIT_MSG" -t $GIT_TIMEOUT -s $CMS_URL /app/site
