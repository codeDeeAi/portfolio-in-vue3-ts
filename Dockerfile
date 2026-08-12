FROM node:20-alpine AS build

WORKDIR /app

ARG NUXT_PUBLIC_FORMSPREE_ID=""
ENV NUXT_PUBLIC_FORMSPREE_ID=$NUXT_PUBLIC_FORMSPREE_ID

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run generate

FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 80
