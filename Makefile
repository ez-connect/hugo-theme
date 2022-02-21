.DEFAULT_GOAL := run

init:
	@hugo mod get -u

syntax:
	@hugo gen chromastyles --style=dracula > assets/scss/components/_syntax.scss

test:
	@npm run test

lint:
	@npm run lint

run:
	@hugo serve --bind 0.0.0.0

build:
	@rm -rf public/
	@hugo --gc --minify
