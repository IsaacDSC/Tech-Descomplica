FROM --platform=linux/amd64 node:12

WORKDIR /usr/app

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]