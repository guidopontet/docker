FROM node:19.2-alpine3.16
# /app ya viene en esta imagen

# cd app
WORKDIR /app

COPY package.json ./

RUN npm install

# Dest / app
COPY . .

# Testing
RUN npm run test

# Se corre cuando se levanta la imagen en un container
CMD [ "node", "app.js" ]
