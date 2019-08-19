FROM node:10
RUN apt-get -y update
RUN apt-get -y install wait-for-it
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "app.js"]
