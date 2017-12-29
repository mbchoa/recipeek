FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json ./
RUN npm install --production

# Bundle app source
ADD . /usr/src/app

EXPOSE 4000
CMD [ "npm", "start" ]