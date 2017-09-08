test:
	./node_modules/.bin/mocha --timeout 15000 --compilers js:babel-core/register --reporter spec
.PHONY: test
