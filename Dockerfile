FROM node:8.11-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash && \
    npm install -g yarn

ADD yarn.lock /usr/src/app/
RUN yarn install

ADD . /usr/src/app

EXPOSE 3000
