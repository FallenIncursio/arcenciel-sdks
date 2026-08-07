
# DeveloperVideoReactionResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`video` | [Video](Video.md)
`videoId` | number

## Example

```typescript
import type { DeveloperVideoReactionResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Reaction updated,
  "video": null,
  "videoId": 73,
} satisfies DeveloperVideoReactionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperVideoReactionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
