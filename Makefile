install: install-deps
	npm ci

gendiff:
	node bin/gendiff.js
	
test:
	npm test

publish:
	npm publish --dry-run

lint:
	npx eslint .