FROM node:18.3.0-alpine3.15

ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/app

COPY package*.json ./

RUN if [ "$NODE_ENV" = "production" ]; then \
    npm ci --only=production; \
    else \
    npm install; \
    fi

COPY . .

EXPOSE 3000

CMD if [ "$NODE_ENV" = "production" ]; then \
    npm run build && npm start; \
    else \
    npm run dev; \
    fi