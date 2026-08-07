#!/usr/bin/env node

import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const roots = process.argv.slice(2)
if (roots.length === 0) throw new Error('Provide at least one generated SDK directory.')

const normalizeFile = async file => {
  const source = await readFile(file, 'utf8')
  const binaryExample = file.includes(`${path.sep}sdk-python${path.sep}`) ? "b'...'" : 'new Blob()'
  const lines = source
    .replace(/\r\n/g, '\n')
    // OpenAPI Generator renders Java byte arrays with a process-specific identity hash.
    // Besides being invalid client code, the value changes between otherwise identical runs.
    .replace(/\[B@[0-9a-f]+/gi, binaryExample)
    .split('\n')
    .map(line => line.trimEnd())
  while (lines.at(-1) === '') lines.pop()
  const normalized = `${lines.join('\n')}\n`
  if (normalized !== source) await writeFile(file, normalized)
}

const visit = async directory => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) await visit(target)
    else if (entry.isFile()) await normalizeFile(target)
  }
}

for (const root of roots) await visit(path.resolve(root))
