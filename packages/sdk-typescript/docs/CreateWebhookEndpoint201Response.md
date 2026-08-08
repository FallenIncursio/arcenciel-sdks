
# CreateWebhookEndpoint201Response

201 response for api webhooks endpoints value documented for this operation.

## Properties

Name | Type
------------ | -------------
`data` | [DeveloperWebhookEndpoint](DeveloperWebhookEndpoint.md)
`secret` | string

## Example

```typescript
import type { CreateWebhookEndpoint201Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "secret": whsec_example_once_only,
} satisfies CreateWebhookEndpoint201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWebhookEndpoint201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
