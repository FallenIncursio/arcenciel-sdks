# Releasing the SDKs

This process publishes one TypeScript/Python version pair from one immutable Developer API contract.

## Release gates

1. The private API release is complete and its archive checksum is present in `contracts/releases.json`.
2. The public repository contains only the approved SDK export and passes `node scripts/verify-release.mjs`.
3. Regeneration is deterministic and both language suites pass.
4. The release commit and annotated `sdk-v<version>` tag are signed by the pinned release key.
5. npm and PyPI Trusted Publishers match repository `FallenIncursio/arcenciel-sdks`, workflow `publish.yml`, and environment
   `sdk-production`.

## Publish

Dispatch **Publish SDKs** with:

- `api_release`: the immutable contract version, such as `1.9.1`;
- `sdk_version`: the shared package version, such as `1.0.1`; and
- `release_tag`: the signed public tag, such as `sdk-v1.0.1`.

The workflow independently verifies the tag, fingerprint, contract checksum, operation count, package versions, repository metadata, and
deterministic generation. It skips an immutable version already present in a registry. After publishing, it installs both packages into
clean environments and runs anonymous production reads before creating the GitHub release.

Only after that workflow is green may the private Developer API manifest mark both SDK packages as stable. Deploy and verify the portal
after the manifest change.

Never use a long-lived npm or PyPI token to bypass a Trusted Publisher mismatch.
