# Dockerfile

# Stage 1: Build React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy files
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Build production React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Custom working directory name
WORKDIR /bijeesh_jithu_ui_garden

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from previous stage to nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8083
EXPOSE 8083


RUN sed -i 's/80;/8083;/' /etc/nginx/conf.d/default.conf


CMD ["nginx", "-g", "daemon off;"]
