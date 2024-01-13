# dockerfile to build the app and deploy with nginx
FROM node:21 as builder
# Define build arguments for environment variables
ARG VITE_API_URL
ARG VITE_API_KEY
ARG VITE_AUTH_SERVER_URL
ARG VITE_AUTH_SERVER_CLIENT_ID
ARG VITE_AUTH_SERVER_REALM

# Set environment variables during the build process
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_KEY=$VITE_API_KEY
ENV VITE_AUTH_SERVER_URL=$VITE_AUTH_SERVER_URL
ENV VITE_AUTH_SERVER_CLIENT_ID=$VITE_AUTH_SERVER_CLIENT_ID
ENV VITE_AUTH_SERVER_REALM=$VITE_AUTH_SERVER_REALM

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest as deploy
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
# default command of nginx container will start nginx
# so no need to specify the command here
