FROM node:latest

WORKDIR /app

#VOLUME /app

COPY . .

RUN npm install -g typescript 
RUN npm install


CMD ["ts-node", 'main']