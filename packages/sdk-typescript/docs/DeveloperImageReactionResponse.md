
# DeveloperImageReactionResponse


## Properties

Name | Type
------------ | -------------
`image` | [Image](Image.md)
`imageId` | number
`message` | string

## Example

```typescript
import type { DeveloperImageReactionResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "image": null,
  "imageId": 108,
  "message": Reaction updated,
} satisfies DeveloperImageReactionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperImageReactionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
