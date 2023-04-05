#!/bin/sh

set -eu

git_ssh() {
	echo 'Git SSH setup'
	echo 'set ssh keys'
	if [ "$SSH_PUBLIC" = "" ] || [ "$SSH_PRIVATE" = "" ]; then
		echo "not found any keys in the env"
		return 1
	fi

	mkdir -p ~/.ssh
	chmod 766 ~/.ssh
	echo -e "$SSH_PUBLIC\n" >~/.ssh/id_rsa.pub
	echo -e "$SSH_PRIVATE\n" >~/.ssh/id_rsa
	chmod 600 ~/.ssh/*
	echo 'write to ~/.ssh'
}

git_config_user() {
	echo 'set git user'
	if [ -z "$GIT_USERNAME" ] | [ -z "$GIT_EMAIL" ]; then
		echo 'not found git user info in the env'
	else
		git config --global user.name "$GIT_USERNAME"
		git config --global user.email "$GIT_EMAIL"
		echo "GIT_USERNAME=$GIT_USERNAME"
		echo "GIT_EMAIL=$GIT_EMAIL"
	fi
}

git_ssh
git_config_user
