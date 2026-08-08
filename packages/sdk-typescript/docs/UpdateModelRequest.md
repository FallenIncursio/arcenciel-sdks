
# UpdateModelRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`authorWishes` | string
`description` | string
`tags` | string
`title` | string
`type` | string

## Example

```typescript
import type { UpdateModelRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "authorWishes": null,
  "description": null,
  "tags": null,
  "title": null,
  "type": null,
} satisfies UpdateModelRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateModelRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
