# Stage 1: Build Angular App
FROM node:14.17-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Angular app files
COPY . .

# Build the Angular app
RUN npm run build -- --prod

# Stage 2: Serve Angular App with Node Server
FROM node:14.17-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy built Angular app from the build stage
COPY --from=build /app/dist ./dist

# Install dependencies for Node.js server
COPY package*.json ./
RUN npm install --only=production

# Copy Node.js server files
COPY server.js ./

# Expose port
EXPOSE 3000

# Command to run the Node.js server
CMD ["node", "server.js"]
