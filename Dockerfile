# dockerfile to build the app and deploy with nginx
FROM node:21 as builder
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
