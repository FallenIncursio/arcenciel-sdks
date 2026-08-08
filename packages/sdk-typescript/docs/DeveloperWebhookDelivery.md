
# DeveloperWebhookDelivery

Fields describing developer webhook delivery in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`attemptCount` | number
`createdAt` | Date
`endpointId` | string
`eventId` | string
`id` | string
`lastAttemptAt` | Date
`lastError` | string
`lastStatusCode` | number
`nextAttemptAt` | Date
`responseSnippet` | string
`status` | string
`updatedAt` | Date

## Example

```typescript
import type { DeveloperWebhookDelivery } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "attemptCount": null,
  "createdAt": null,
  "endpointId": null,
  "eventId": evt_57d188eb4444469eaf32e6707f8f13b7,
  "id": dly_2ed1c66c402a42489fa613a2a85e0eb0,
  "lastAttemptAt": null,
  "lastError": null,
  "lastStatusCode": null,
  "nextAttemptAt": null,
  "responseSnippet": null,
  "status": null,
  "updatedAt": null,
} satisfies DeveloperWebhookDelivery

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperWebhookDelivery
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
