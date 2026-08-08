
# ListWebhookDeliveries200Response

200 response for api webhooks endpoints endpoint Id deliveries used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;DeveloperWebhookDelivery&gt;](DeveloperWebhookDelivery.md)
`nextCursor` | string

## Example

```typescript
import type { ListWebhookDeliveries200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "nextCursor": null,
} satisfies ListWebhookDeliveries200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListWebhookDeliveries200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
