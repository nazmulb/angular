FROM node:10.15.0

ENV REFRESHED_AT 2020-05-02

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]