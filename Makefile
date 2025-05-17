.PHONY: i

i:
	pnpm install

dev: i
	$(MAKE) -j2 dev-web dev-server

dev-web:
	pnpm --filter web dev

dev-server:
	pnpm --filter server dev

build: 
	$(MAKE) -j2 build-web build-server

build-web:
	pnpm --filter web build

build-server:
	pnpm --filter server build
 
 