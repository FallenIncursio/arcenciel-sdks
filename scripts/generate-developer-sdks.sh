#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd -- "${SCRIPT_DIR}/.." && pwd)"
RELEASE_MANIFEST="${ROOT_DIR}/contracts/releases.json"
CURRENT_VERSION="$(node -p "require('${RELEASE_MANIFEST}').currentVersion")"
SPEC_PATH="${1:-${ROOT_DIR}/contracts/${CURRENT_VERSION}.openapi.json}"
GENERATOR='@openapitools/openapi-generator-cli@2.40.1'
SDK_VERSION="${SDK_VERSION:-$(node -p "require('${ROOT_DIR}/packages/sdk-typescript/package.json').version")}"

if [[ ! -f "${SPEC_PATH}" ]]; then
  echo "Developer OpenAPI contract not found: ${SPEC_PATH}" >&2
  exit 2
fi

cd "${ROOT_DIR}"
npx --yes "${GENERATOR}" generate \
  -g typescript-fetch \
  -i "${SPEC_PATH}" \
  -o packages/sdk-typescript \
  --additional-properties="npmName=@arcenciel/sdk,npmVersion=${SDK_VERSION},supportsES6=true,typescriptThreePlus=true,useSingleRequestParameter=true,enumUnknownDefaultCase=true,importFileExtension=.js"

node scripts/normalize-typescript-sdk-downloads.mjs
node scripts/normalize-typescript-sdk-downloads.mjs packages/sdk-typescript/src/apis/VideosApi.ts

npx --yes "${GENERATOR}" generate \
  -g python \
  -i "${SPEC_PATH}" \
  -o packages/sdk-python \
  --additional-properties="packageName=arcenciel.generated,projectName=arcenciel,packageVersion=${SDK_VERSION},library=httpx,supportHttpxSync=true,disallowAdditionalPropertiesIfNotPresent=false,enumUnknownDefaultCase=true"

SDK_VERSION="${SDK_VERSION}" node --input-type=module <<'NODE'
import { readFileSync, writeFileSync } from 'node:fs'

const path = 'packages/sdk-python/arcenciel/__init__.py'
const source = readFileSync(path, 'utf8')
const updated = source.replace(/^__version__ = "[^"]+"$/m, `__version__ = "${process.env.SDK_VERSION}"`)
if (source === updated && !source.includes(`__version__ = "${process.env.SDK_VERSION}"`)) {
  throw new Error(`Unable to synchronize ${path}`)
}
writeFileSync(path, updated)
NODE

node scripts/normalize-python-sdk-enums.mjs
node scripts/normalize-python-sdk-response-scalars.mjs
node scripts/normalize-generated-sdk-whitespace.mjs \
  packages/sdk-typescript/src/apis \
  packages/sdk-typescript/src/models \
  packages/sdk-typescript/docs \
  packages/sdk-python/arcenciel/generated \
  packages/sdk-python/docs
