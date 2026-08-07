#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { appendFileSync, existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const manifest = JSON.parse(readFileSync(resolve(root, 'contracts/releases.json'), 'utf8'))
const apiRelease = process.argv[2] || manifest.currentVersion
const expectedSdkVersion = process.argv[3]
const release = manifest.releases.find(entry => entry.version === apiRelease)

if (!release) throw new Error(`Unknown immutable Developer API release: ${apiRelease}`)

const typescriptPackage = JSON.parse(readFileSync(resolve(root, 'packages/sdk-typescript/package.json'), 'utf8'))
const pythonProject = readFileSync(resolve(root, 'packages/sdk-python/pyproject.toml'), 'utf8')
const pythonVersion = pythonProject.match(/^version = "([^"]+)"$/m)?.[1]
const sdkVersion = expectedSdkVersion || typescriptPackage.version

if (typescriptPackage.version !== sdkVersion) throw new Error('TypeScript SDK version mismatch')
if (pythonVersion !== sdkVersion) throw new Error('Python SDK version mismatch')
if (release.sdk.typescript.version !== sdkVersion) throw new Error('TypeScript compatibility manifest mismatch')
if (release.sdk.python.version !== sdkVersion) throw new Error('Python compatibility manifest mismatch')
if (typescriptPackage.repository?.url !== 'https://github.com/FallenIncursio/arcenciel-sdks.git') {
  throw new Error('TypeScript repository metadata must identify the public SDK repository')
}
if (!pythonProject.includes('Repository = "https://github.com/FallenIncursio/arcenciel-sdks/')) {
  throw new Error('Python repository metadata must identify the public SDK repository')
}

for (const entry of manifest.releases) {
  const expectedTag = `sdk-v${entry.sdk.typescript.version}`
  if (entry.sdk.typescript.version !== entry.sdk.python.version) throw new Error(`SDK version pair mismatch for API ${entry.version}`)
  if (!entry.sdk.typescript.sourceUrl.includes(`/tree/${expectedTag}/packages/sdk-typescript`)) {
    throw new Error(`Incorrect TypeScript source tag for API ${entry.version}`)
  }
  if (!entry.sdk.python.sourceUrl.includes(`/tree/${expectedTag}/packages/sdk-python`)) {
    throw new Error(`Incorrect Python source tag for API ${entry.version}`)
  }
}

const archive = resolve(root, 'contracts', `${release.version}.openapi.json`)
if (!existsSync(archive)) throw new Error(`Missing immutable contract: ${archive}`)
const bytes = readFileSync(archive)
const sha256 = createHash('sha256').update(bytes).digest('hex')
if (sha256 !== release.sha256) throw new Error(`Contract checksum mismatch: ${sha256}`)

const document = JSON.parse(bytes)
const methods = new Set(['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'])
const operationCount = Object.values(document.paths ?? {}).reduce(
  (count, pathItem) => count + Object.keys(pathItem).filter(key => methods.has(key)).length,
  0
)
if (operationCount !== release.operationCount) throw new Error(`Contract operation count mismatch: ${operationCount}`)

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `archive=${archive}\n`)
  appendFileSync(process.env.GITHUB_OUTPUT, `sdk_version=${sdkVersion}\n`)
}

console.log(`Verified Developer API ${release.version} (${operationCount} operations, ${sha256}) with SDK ${sdkVersion}.`)
