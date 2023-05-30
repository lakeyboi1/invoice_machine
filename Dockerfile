# pull the base image
FROM node:20-alpine3.16

WORKDIR /app

COPY . .

RUN npm install -g expo-cli@latest

CMD ["npm", "start"]