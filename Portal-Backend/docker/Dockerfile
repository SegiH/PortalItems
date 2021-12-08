FROM node:14

COPY portalitems.js /
COPY package.json /

RUN npm install

EXPOSE 8080

CMD [ "node" , "/portalitems.js" ]
