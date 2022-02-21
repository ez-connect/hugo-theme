.DEFAULT_GOAL := run

init:
	@hugo mod get -u

lint:
	@node_modules/.bin/stylelint assets/**/*.scss && eslint --ext assets/**/*.js

syntax:
	@hugo gen chromastyles --style=dracula > assets/scss/components/_syntax.scss

run:
	@hugo serve --bind 0.0.0.0

build:
	@rm -rf public/
	@hugo --gc --minify
