
# CreateWebhookEndpointRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`eventTypes` | Set&lt;string&gt;
`name` | string
`url` | string

## Example

```typescript
import type { CreateWebhookEndpointRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "eventTypes": null,
  "name": null,
  "url": null,
} satisfies CreateWebhookEndpointRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWebhookEndpointRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
