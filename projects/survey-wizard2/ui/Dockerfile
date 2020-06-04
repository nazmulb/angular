### STAGE 1: Build ###
FROM node:10.15.0 as build

ENV REFRESHED_AT 2020-05-02

WORKDIR /ui

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine

COPY --from=build /ui/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]