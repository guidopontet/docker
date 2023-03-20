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

# ELiminar archivos y directorios no necesarios en PROD (workaround para optimización,
# aunque suele realizarse con multi stages)
RUN rm -rf tests && rm -rf node_modules

# Instalar dependencias de prod
RUN npm install --prod

# Se corre cuando se levanta la imagen en un container
CMD [ "node", "app.js" ]
