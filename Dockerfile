# imagem => https://hub.docker.com/search
FROM node

# diretório onde as informações estarão contidas
WORKDIR /usr/app

# copiar tudo do package e colocar no root
COPY package.json ./

# para baixar as dependencias
RUN npm install

COPY . .

EXPOSE 3333

# para rodar comandos
CMD ["npm","run","dev"]