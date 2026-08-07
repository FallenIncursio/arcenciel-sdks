# Contributing

Thanks for helping improve the Arc en Ciel SDKs.

## Generated and maintained code

Files under `packages/sdk-typescript/src/apis`, `packages/sdk-typescript/src/models`, `packages/sdk-python/arcenciel/generated`, and both
package `docs` directories are generated from an immutable contract. Do not edit them by hand. Contract corrections belong in the Arc en
Ciel Developer API release process and arrive here through a regenerated release.

The client facades, errors, tests, examples, package metadata, documentation, generator normalizers, and release automation are maintained
by hand and welcome focused fixes.

## Local checks

Use Node.js 22, Java 21, and Python 3.11.

```bash
SDK_VERSION=0.8.0 ./scripts/generate-developer-sdks.sh contracts/1.8.0.openapi.json
git diff --exit-code -- packages/sdk-typescript packages/sdk-python

cd packages/sdk-typescript
npm ci --ignore-scripts
npm run lint
npm run typecheck
npm test
npm run pack:check

cd ../sdk-python
python3.11 -m pip install -e '.[dev]'
ruff check .
ruff format --check .
mypy
pytest
python3.11 -m build
```

Run Prettier on hand-written Markdown, JSON, YAML, JavaScript, and TypeScript files that you change. Generated files retain the pinned
generator's formatting.

## Pull requests

Keep a pull request scoped to one behaviour or release concern. Describe the developer impact and the checks you ran. Never include API
keys, access tokens, production payloads, private contracts, or application source.

By contributing, you agree that your contribution is licensed under this repository's MIT License.
