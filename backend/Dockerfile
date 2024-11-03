FROM node:20.18.0-bullseye

# Install required dependencies for sharp
RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Set up the working directory
WORKDIR /app

# Copy package.json and yarn.lock for dependency management
COPY package.json yarn.lock ./

# Remove any existing sharp installations
RUN rm -rf node_modules/sharp

# Install dependencies without sharp
RUN yarn install --ignore-scripts

# Install sharp specifically for linux
RUN yarn add sharp --platform=linux --arch=x64 --verbose

# Copy the application files
COPY . .

# Build the Strapi application
RUN yarn build

# Expose the Strapi default port
EXPOSE 1337

# Start the Strapi application
CMD ["yarn", "start"]