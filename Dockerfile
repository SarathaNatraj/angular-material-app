# Stage 1: Build Angular App
FROM node:latest as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build Angular app
RUN npm run build --prod

# Stage 2: Serve Angular App with Nginx
FROM nginx:alpine

# Copy built app from previous stage
COPY --from=build /app/dist/<your-angular-app-name> /usr/share/nginx/html

# Copy nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
