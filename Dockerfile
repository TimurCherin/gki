FROM node:20

WORKDIR /data/starter
COPY . /data/starter

USER root

RUN npm install

RUN npm run build

CMD ["npm", "run", "prod"]