#!/usr/bin/env node

import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const modelsDirectory = path.resolve(process.argv[2] ?? 'packages/sdk-python/arcenciel/generated/models')
const enumValidator =
  /\n    @field_validator\([^\n]+\)\n    def [A-Za-z0-9_]+_validate_enum\(cls, value\):\n[\s\S]*?(?=\n    (?:@field_validator|model_config))/g

for (const entry of await readdir(modelsDirectory, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.py')) continue
  const file = path.join(modelsDirectory, entry.name)
  const source = await readFile(file, 'utf8')
  const normalized = source.replace(enumValidator, '\n')
  if (normalized !== source) await writeFile(file, normalized)
}
