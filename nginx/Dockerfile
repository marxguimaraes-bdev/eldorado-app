FROM nginx:stable-alpine

RUN mkdir -p /var/www/eldorado-app

COPY vhosts/eldorado-app.conf /etc/nginx/conf.d

EXPOSE 80
