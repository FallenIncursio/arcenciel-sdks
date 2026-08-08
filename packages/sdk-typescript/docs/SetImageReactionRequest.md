
# SetImageReactionRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`reactionType` | string

## Example

```typescript
import type { SetImageReactionRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "reactionType": null,
} satisfies SetImageReactionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetImageReactionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
