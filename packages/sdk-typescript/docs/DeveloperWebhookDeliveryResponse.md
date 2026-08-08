
# DeveloperWebhookDeliveryResponse

Fields describing developer webhook delivery response in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`data` | [DeveloperWebhookDelivery](DeveloperWebhookDelivery.md)

## Example

```typescript
import type { DeveloperWebhookDeliveryResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
} satisfies DeveloperWebhookDeliveryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperWebhookDeliveryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
