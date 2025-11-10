#!/bin/sh
set -eu

SITE_HOST="${SITE_HOST:-carecard.local}"
SSL_CERT_PATH="${SSL_CERT_PATH:-/etc/nginx/certs/carecard.local.crt}"
SSL_KEY_PATH="${SSL_KEY_PATH:-/etc/nginx/certs/carecard.local.key}"
HTTPS_PORT="${HTTPS_PORT:-8443}"

if [ "$HTTPS_PORT" = "443" ]; then
  HTTPS_PORT_SUFFIX=""
else
  HTTPS_PORT_SUFFIX=":$HTTPS_PORT"
fi

export SITE_HOST SSL_CERT_PATH SSL_KEY_PATH HTTPS_PORT_SUFFIX

# Ensure target directory exists (should be present in base image)
mkdir -p /etc/nginx/conf.d

envsubst '${SITE_HOST} ${SSL_CERT_PATH} ${SSL_KEY_PATH} ${HTTPS_PORT_SUFFIX}' \
  < /etc/nginx/templates/default.conf.template \
  > /etc/nginx/conf.d/default.conf

exec nginx -g 'daemon off;'
