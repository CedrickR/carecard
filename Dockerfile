# syntax=docker/dockerfile:1
FROM nginx:stable-alpine

# Copy static assets for the CareCard editor into the Nginx served directory
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js

# Copy SSL material and Nginx template
COPY docker/certs/carecard.local.crt /etc/nginx/certs/carecard.local.crt
COPY docker/certs/carecard.local.key /etc/nginx/certs/carecard.local.key
COPY nginx.conf.template /tmp/default.conf.template
COPY docker/entrypoint.sh /docker-entrypoint.sh

RUN apk add --no-cache gettext \
    && chmod +x /docker-entrypoint.sh \
    && mkdir -p /etc/nginx/templates \
    && mv /tmp/default.conf.template /etc/nginx/templates/default.conf.template

ENV SSL_CERT_PATH=/etc/nginx/certs/carecard.local.crt \
    SSL_KEY_PATH=/etc/nginx/certs/carecard.local.key

EXPOSE 80 443

ENTRYPOINT ["/docker-entrypoint.sh"]
