file := nginx/docker-compose.yaml

.PHONY: build
build:
	yarn
	ng build --prod --build-optimizer
	docker-compose -f $(file) build

.PHONY: up
up:
	docker-compose -f $(file) up -d

.PHONY: down
down:
	docker-compose -f $(file) down

.PHONY: log
log:
	docker-compose -f $(file) logs -f
