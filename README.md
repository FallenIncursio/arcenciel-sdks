# Arc en Ciel SDKs

Official, typed TypeScript and Python clients for the stable Arc en Ciel Developer API.

[![CI](https://github.com/FallenIncursio/arcenciel-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/FallenIncursio/arcenciel-sdks/actions/workflows/ci.yml)
[![CodeQL](https://github.com/FallenIncursio/arcenciel-sdks/actions/workflows/codeql.yml/badge.svg)](https://github.com/FallenIncursio/arcenciel-sdks/actions/workflows/codeql.yml)

## Current release

| Package                                     | Version | Runtime                            | Registry / source                                                                                                                                              |
| ------------------------------------------- | ------: | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@arcenciel/sdk`](packages/sdk-typescript) | `1.0.2` | Node.js 20.20+ and modern browsers | [npm](https://www.npmjs.com/package/@arcenciel/sdk) / [`sdk-v1.0.2`](https://github.com/FallenIncursio/arcenciel-sdks/tree/sdk-v1.0.2/packages/sdk-typescript) |
| [`arcenciel`](packages/sdk-python)          | `1.0.2` | Python 3.11+; sync and async       | [PyPI](https://pypi.org/project/arcenciel/) / [`sdk-v1.0.2`](https://github.com/FallenIncursio/arcenciel-sdks/tree/sdk-v1.0.2/packages/sdk-python)             |

Version `1.0.2` is the stable SDK release for Developer API `1.9.2` (258 operations). Both packages are built from the same immutable
contract and include owner-scoped Developer Webhook APIs, signature helpers, controlled retries, download streaming, and explicit helpers
for page/limit and cursor pagination. This patch corrects generated article action examples and transient retry documentation without
changing operation signatures. Publication uses the signed source tag and OIDC Trusted Publishing; the workflow verifies clean registry
installations against production before the GitHub release.

```bash
npm install @arcenciel/sdk@1.0.2
```

```bash
python3.11 -m pip install arcenciel==1.0.2
```

Public catalogue reads work without credentials. Account-specific operations use an API key with the least-privilege scope documented in
the [Developer Portal](https://arcenciel.io/developers).

## What is public here

This repository contains only:

- reviewed TypeScript and Python SDK source, generated APIs, models, tests, and examples;
- immutable Developer API contracts `1.1.0` through `1.9.2`;
- deterministic generation and release automation; and
- the public release-signing key.

The Arc en Ciel application, deployment configuration, credentials, and private monorepo history are not included.

## Reproducible generation

The generator wrapper pins OpenAPI Generator CLI `2.40.1` and OpenAPI Generator `7.24.0`. It preserves the hand-written facades while
rebuilding the low-level clients from the selected immutable contract.

```bash
SDK_VERSION=1.0.2 ./scripts/generate-developer-sdks.sh contracts/1.9.2.openapi.json
git diff --exit-code -- packages/sdk-typescript packages/sdk-python
```

CI checks the archive checksum and operation count, regenerates both packages, rejects a dirty generation result, runs both test suites,
builds both distributions, and validates their package contents.

## Release integrity

Every `sdk-v*` source release is an annotated GPG-signed tag. The release workflow imports the pinned
[public key](keys/sdk-release.asc), verifies fingerprint `6FA2 ECBC 241F A87F D825 9E7A F4BF E014 B368 D3E0`, checks the immutable API
checksum, and publishes through npm/PyPI OIDC Trusted Publishing. No long-lived registry token is used.

See [RELEASING.md](RELEASING.md) for the maintainer procedure and [CONTRIBUTING.md](CONTRIBUTING.md) for development checks.

## Support and security

- Developer documentation and support policy: <https://arcenciel.io/developers>
- Service status: <https://status.arcenciel.io>
- Security reports: [SECURITY.md](SECURITY.md)

Licensed under the [MIT License](LICENSE).
