FROM node:26-slim AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

FROM node:26-slim

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY . .

EXPOSE 3333

CMD ["npm", "start"]