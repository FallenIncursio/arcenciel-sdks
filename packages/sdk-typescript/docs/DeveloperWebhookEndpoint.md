
# DeveloperWebhookEndpoint

Developer Webhook Endpoint used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`autoDisabledAt` | Date
`consecutiveFailureCount` | number
`createdAt` | Date
`enabled` | boolean
`eventTypes` | Array&lt;string&gt;
`id` | string
`lastDeliveredAt` | Date
`lastError` | string
`name` | string
`secretLastRotatedAt` | Date
`updatedAt` | Date
`url` | string
`verifiedAt` | Date

## Example

```typescript
import type { DeveloperWebhookEndpoint } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "autoDisabledAt": null,
  "consecutiveFailureCount": null,
  "createdAt": null,
  "enabled": null,
  "eventTypes": ["model.published"],
  "id": 4b2db59e-8097-45b6-8f1c-7864e570c681,
  "lastDeliveredAt": null,
  "lastError": null,
  "name": Production events,
  "secretLastRotatedAt": null,
  "updatedAt": null,
  "url": https://example.com/webhooks/arcenciel,
  "verifiedAt": null,
} satisfies DeveloperWebhookEndpoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperWebhookEndpoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
