# Install dependencies only when needed
FROM node:18-alpine3.18

RUN apk add --no-cache libc6-compat
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g npm@latest

RUN npm i

COPY . .

RUN npm run build


ARG ENVIRONMENT
ARG RUN_COMMAND

ENV RUN_COMMAND=$RUN_COMMAND
ENV NODE_ENV=$ENVIRONMENT

EXPOSE 3000


CMD $RUN_COMMAND



