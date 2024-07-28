FROM node:20-alpine AS base

WORKDIR /home/app
EXPOSE 3000

RUN corepack enable \
  && corepack prepare pnpm@latest --activate \
  && pnpm config set store-dir .pnpm-store

COPY package.json pnpm-lock.yaml* ./
RUN pnpm i --frozen-lockfile

COPY . .

RUN pnpm build && rm -rf src

CMD [ "node", "entrypoint.js" ]
