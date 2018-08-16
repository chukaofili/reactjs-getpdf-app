FROM node:8.11.3-alpine
LABEL maintainer="Chuka Ofili <ofili@microsmart.tk>"

WORKDIR /www

RUN yarn global add serve
ADD application/package.json application/yarn.lock /www/
RUN yarn install

ADD application /www

RUN yarn build

CMD ["yarn", "prod"]
