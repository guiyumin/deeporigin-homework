# Homework for DeepOrigin

## Local Development

```bash
    make i # pnpm install
    make dev # run both web and server
```

## Production

```bash
    git clone https://github.com/guiyumin/deeporigin-homework.git
    cd deeporigin-homework
    touch .env
    echo "DOMAIN=YOUR-CUSTOM-DOMAIN" > .env
    make d-up # docker compose up
```

## Design

1. The screenshot in the PDF appears to be using AG Grid, which is a robust data grid solution.
2. While TanStack Table is another excellent option, I've chosen to implement AG Grid for this project.
3. I've structured this as a monorepo using pnpm, containing both a Next.js web application and a Fastify server application. This separation allows for better scalability and maintainability, even though Next.js is capable of full-stack development.
4. Due to Vercel's limited monorepo support, I've opted for a Docker Compose setup deployed to a VPS server.
5. The Docker Compose configuration includes three services:
   - A web application service
   - A server application service
   - A Caddy server acting as a reverse proxy, enabling both services to operate under the same domain
6. I've included a Makefile to simplify complex commands, making the development workflow more efficient.
