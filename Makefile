.PHONY: devcontainer-build


build:
	docker compose build lupai-front-core

run: build
	docker compose run --rm lupai-front-core

up: build
	docker compose up -d lupai-front-core

stop:
	docker compose stop lupai-front-core

restart: stop up


test-build: build
	docker compose run --rm --entrypoint="npm run build" lupai-front-core
