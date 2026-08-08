"""Read-only Developer Webhook discovery and receiver verification example."""

from __future__ import annotations

import os

from arcenciel import ArcEnCielClient, verify_webhook_signature

api_key = os.environ.get("ARCENCIEL_API_KEY")
if not api_key:
    raise RuntimeError("Set ARCENCIEL_API_KEY with WebhooksRead for this read-only example.")

client = ArcEnCielClient(api_key=api_key)
catalog = client.call_sync(client.webhooks.list_webhook_event_types_sync)
endpoints = client.call_sync(client.webhooks.list_webhook_endpoints_sync)

print(
    "Available webhook events:",
    ", ".join(f"{event.type}@{event.version}" for event in catalog.data),
)
print(f"Owned webhook endpoints: {len(endpoints.data)}")

# A receiver must preserve the exact request bytes before JSON parsing. Replace
# these fixture values with the raw body, signature header, and write-only
# signing secret held by your server-side secret manager.
fixture_body = b'{"id":"evt_example","type":"webhook.test"}'
fixture_signature = "t=0,v1=" + "0" * 64
fixture_secret = "whsec_replace_with_server_secret"
print(
    "Synthetic signature accepted:",
    verify_webhook_signature(fixture_body, fixture_signature, fixture_secret),
)
