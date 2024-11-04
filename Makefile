.PHONY: devcontainer-build


build:
	docker compose build lupai-front-core

run: build
	docker compose run lupai-front-core

up: build
	docker compose up -d lupai-front-core

stop:
	docker compose stop lupai-front-core

restart: stop up
