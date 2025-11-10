#!/bin/sh
set -eu

SITE_HOST="${SITE_HOST:-carecard.local}"
SSL_CERT_PATH="${SSL_CERT_PATH:-/etc/nginx/certs/carecard.local.crt}"
SSL_KEY_PATH="${SSL_KEY_PATH:-/etc/nginx/certs/carecard.local.key}"
HTTPS_PORT="${HTTPS_PORT:-8443}"
MAIL_RECIPIENT="${MAIL_RECIPIENT:-}"

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

MAIL_RECIPIENT_JS=$(printf '%s' "$MAIL_RECIPIENT" | sed "s/'/\\\\'/g")
cat > /usr/share/nginx/html/config.js <<EOF
window.CARECARD_CONFIG = Object.assign(window.CARECARD_CONFIG || {}, {
  mailRecipient: '$MAIL_RECIPIENT_JS'
});
EOF

exec nginx -g 'daemon off;'
