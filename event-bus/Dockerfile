# Specify a base Image
FROM node:14-alpine

WORKDIR /app

# Install some dependencies
COPY package.json ./
RUN npm install
COPY ./ ./

#Default Command
CMD ["npm", "start"]