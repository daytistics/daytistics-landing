FROM node:20.18.0

# Set up the working directory
WORKDIR /app

# Copy package.json and yarn.lock for dependency management
COPY package.json yarn.lock ./

# Install `sharp` with platform-specific options before other dependencies
RUN yarn add sharp@latest --platform=linux --arch=x64 --ignore-scripts --verbose

# Install other dependencies, bypassing sharp installation during this step
RUN yarn install --ignore-scripts && yarn cache clean

# Copy the application files
COPY . .

# Build the Strapi application
RUN yarn run build

# Expose the Strapi default port
EXPOSE 1337

# Start the Strapi application
CMD ["yarn", "start"]