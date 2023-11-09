FROM node:14

WORKDIR src/user-microservice

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "run","dev"]