install:
	npm install

test:
	npm test

lint:
	npm run lint

test-coverage:
	npm test -- --coverage

.PHONY: install test lint test-coverage