# base image
FROM node:16

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .
EXPOSE 3000

# start app
CMD ["npm","start"]