# Python SDK Changelog

## 1.0.0 — 2026-08-08

- Declared the complete 258-operation Developer API v1.9.0 surface stable after deterministic generation, contract checks, package
  tests, and production qualification.
- Stabilized all 19 synchronous/asynchronous namespaces, explicit safe retries, atomic streamed downloads, checksum verification,
  structured errors, Sandbox support, tolerant response parsing, and raw-body Developer Webhook verification.
- Wire-compatible with 0.9.0; existing clients need no code changes.

## 0.9.0 — 2026-08-08

- Added the typed `client.webhooks` namespace and raw-body HMAC-SHA256 verification helpers from Developer API 1.9.0.
- Added the non-persistent Developer Sandbox workflow for integration and retry testing.
- Additive over 0.8.2; existing clients need no action unless they adopt Developer Webhooks.

## 0.8.2 — 2026-08-08

- Corrected registry installation documentation and synchronized runtime/package versions. Generated 1.8.0 behavior is unchanged.
