
# DeveloperWebhookEventType

Fields describing developer webhook event type in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`description` | string
`type` | string
`version` | string

## Example

```typescript
import type { DeveloperWebhookEventType } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "type": model.published,
  "version": 1,
} satisfies DeveloperWebhookEventType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperWebhookEventType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
