FROM node:20.18.0

# Set up the working directory
WORKDIR /app

# Copy the package.json and lock file to root directory for dependency installation
COPY package.json yarn.lock ./

# Install dependencies except for sharp initially
RUN yarn install --ignore-scripts && \
    yarn cache clean

# Install sharp independently for the specific platform and architecture
RUN npm install sharp@latest --platform=linux --arch=x64 --verbose

# Copy the rest of the application files
COPY . .

# Build the Strapi application
RUN yarn run build

# Expose the default Strapi port
EXPOSE 1337

# Start Strapi
CMD ["yarn", "start"]
