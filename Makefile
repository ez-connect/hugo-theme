lint:
	@node_modules/.bin/stylelint assets/**/*.scss && eslint --ext assets/**/*.js

syntax:
	@hugo gen chromastyles --style=dracula > assets/scss/components/_syntax.scss

run:
	@hugo serve

build:
	@rm -rf public/
	@hugo --gc --minify
