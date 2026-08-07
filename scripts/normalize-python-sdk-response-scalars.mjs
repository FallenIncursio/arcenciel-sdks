#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const modelsDirectory = path.resolve(process.argv[2] ?? 'packages/sdk-python/arcenciel/generated/models')
const imageModel = path.join(modelsDirectory, 'image.py')
const strictSeed = 'seed: Optional[Union[StrictFloat, StrictInt]] = Field('
const tolerantSeed = 'seed: Optional[Union[StrictFloat, StrictInt, StrictStr]] = Field('

const source = await readFile(imageModel, 'utf8')
if (source.includes(tolerantSeed)) process.exit(0)
if (!source.includes(strictSeed)) {
  throw new Error(`Generated Image.seed declaration changed unexpectedly in ${imageModel}.`)
}

await writeFile(imageModel, source.replace(strictSeed, tolerantSeed))
