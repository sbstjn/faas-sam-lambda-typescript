PROJECT_NAME = sam-lambda-typescript

include .faas

test:
	@ yarn test

build:
	@ yarn build
