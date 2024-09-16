# Auto generated code, revie
FROM node:18-alpine AS development
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
CMD [ "npm", "run", "dev"]


# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=development /app/node_modules ./node_modules
COPY --from=development /app/package*.json ./

COPY components /app/components
COPY pages /app/pages
COPY public /app/public
COPY src /app/src
COPY styles /app/styles
COPY package.json /app/package.json
COPY tailwind.config.js /app/tailwind.config.js
COPY tsconfig.json /app/tsconfig.json
COPY postcss.config.js /app/postcss.config.js


ENV NEXT_TELEMETRY_DISABLED 1
RUN npm ci
RUN npm run build


# Production image, copy all the files and run next
FROM node:18-alpine AS prod
WORKDIR /app

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next-env.d.ts ./next-env.d.ts
COPY --from=builder /app/public ./public
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src ./src
COPY --from=builder /app/styles ./styles
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/postcss.config.js ./postcss.config.js

COPY docker-entrypoint.sh .
COPY .env.production .

RUN apk add --no-cache --upgrade bash
RUN ["chmod", "+x", "docker-entrypoint.sh"]

ENTRYPOINT ["./docker-entrypoint.sh"]


EXPOSE 3000

ENV PORT 3000


CMD ["node_modules/.bin/next", "start"]

	