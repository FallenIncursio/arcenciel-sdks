
# TestWebhookEndpoint202ResponseData

Structured data details for this 202 response for api webhooks endpoints endpoint id test.

## Properties

Name | Type
------------ | -------------
`deliveryId` | string
`eventId` | string
`status` | string

## Example

```typescript
import type { TestWebhookEndpoint202ResponseData } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "deliveryId": null,
  "eventId": null,
  "status": null,
} satisfies TestWebhookEndpoint202ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestWebhookEndpoint202ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
