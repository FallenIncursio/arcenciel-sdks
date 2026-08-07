#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const file = path.resolve(process.argv[2] ?? 'packages/sdk-typescript/src/apis/DownloadsApi.ts')
let source = await readFile(file, 'utf8')

for (const [method, generatedType] of [
  ['downloadModelVersion', 'DownloadModelVersion200Response'],
  ['downloadModelVersionWithFilename', 'DownloadModelVersionWithFilename200Response'],
  ['streamVideo', 'string'],
]) {
  source = source.replace(new RegExp(`(async ${method}Raw\\([^\\n]+Promise<runtime\\.ApiResponse<)${generatedType}(>>)`), '$1Blob$2')
  source = source.replace(new RegExp(`(async ${method}\\([^\\n]+Promise<)${generatedType}(>)`), '$1Blob$2')
}

await writeFile(file, source)
