.PHONY: devcontainer-build


devcontainer-build:
	docker compose -f .devcontainer/docker-compose.yml build lupai-front-devcontainer
