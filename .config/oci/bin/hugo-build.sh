#!/bin/sh

set -eu

hugo_build() {
	cd /home/web
	hugo --gc --minify $*
}

hugo_build $*
