#!/bin/sh

set -eu

git_clone() {
	echo 'Clone the repository'

	# Environment vars?
	if [ "$GIT_REPO" = "" ] || [ "$GIT_BRANCH" = "" ]; then
		echo 'not found GIT_REPO or GIT_BRANCH'
		exit 1
	fi

	# If the repository exists?
	if [ -d /home/web/.git ]; then
		echo 'the repository exists'
		cd /home/web
		git pull
		exit 0
	fi

	# Else, clone the repo
	echo "GIT_REPO=$GIT_REPO"
	echo "GIT_BRANCH=$GIT_BRANCH"

	git clone --branch=$GIT_BRANCH $GIT_REPO web
	echo 'done'
}

git_clone
