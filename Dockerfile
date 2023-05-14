FROM node:18.16-slim
WORKDIR /application
COPY ./node1/package.json package.json
COPY ./node1/package-lock.json package-lock.json
COPY ./node1/tsconfig.json tsconfig.json
COPY ./node1/tsconfig.node.json tsconfig.node.json
COPY ./node1/vite.config.dev.js vite.config.dev.js
COPY ./node1/server.js server.js

RUN npm i

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV dev

EXPOSE 3000

ENTRYPOINT ["node", "server.js", "npm", "run", "nodemon:watch"]
