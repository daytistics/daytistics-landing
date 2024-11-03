FROM node:20.18.0

# Set up the working directory that will be used to copy files/directories below :
WORKDIR /app

# Copy package.json to root directory inside Docker container of Strapi app
COPY package.json .

RUN yarn install --ignore-scripts && \
    npm install sharp --platform=linux --arch=x64 --verbose

COPY . .

RUN yarn run build

EXPOSE 1337

CMD ["yarn", "start"]