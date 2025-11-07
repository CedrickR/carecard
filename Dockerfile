# syntax=docker/dockerfile:1
FROM nginx:stable-alpine

# Copy static assets for the CareCard editor into the Nginx served directory
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 8003

# Use the default Nginx command to run the server
CMD ["nginx", "-g", "daemon off;"]
