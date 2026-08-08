
# UpdateWebhookEndpointRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`eventTypes` | Set&lt;string&gt;
`name` | string
`url` | string

## Example

```typescript
import type { UpdateWebhookEndpointRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "eventTypes": null,
  "name": null,
  "url": null,
} satisfies UpdateWebhookEndpointRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateWebhookEndpointRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
