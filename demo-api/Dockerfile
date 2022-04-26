FROM node:14.18.1-slim AS application

WORKDIR /usr/src/app

RUN npm install -g supervisor

CMD [ "supervisor", "server.js" ]
