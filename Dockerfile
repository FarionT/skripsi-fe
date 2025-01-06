### STAGE 1: Build app ###
FROM node:22-alpine AS builder
LABEL maintainer "info@concise.co.id"

WORKDIR /app
# Add the package list to app dir
COPY . .
# Install all the dependencies
RUN npm install
# Generate the build of the application
RUN npm run build

WORKDIR /app

### STAGE 3: Serve app with nginx ###
FROM nginx:1.27-alpine
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf
COPY  --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80
