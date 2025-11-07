#!/usr/bin/env bash
set -euo pipefail

# Package the RVB spa care card editor plugin as a distributable ZIP archive.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
PLUGIN_DIR="${ROOT_DIR}/plugin/rvb-carte-editor"
DIST_DIR="${ROOT_DIR}/dist"
OUTPUT_ZIP="${DIST_DIR}/rvb-carte-editor.zip"

if [[ ! -d "${PLUGIN_DIR}" ]]; then
  echo "Plugin introuvable dans ${PLUGIN_DIR}" >&2
  exit 1
fi

mkdir -p "${DIST_DIR}"
rm -f "${OUTPUT_ZIP}"

(
  cd "${PLUGIN_DIR}/.."
  zip -r "${OUTPUT_ZIP}" "rvb-carte-editor" \
    -x "*.DS_Store" \
    -x "__MACOSX" \
    -x "*.log"
)

echo "Archive créée : ${OUTPUT_ZIP}"
