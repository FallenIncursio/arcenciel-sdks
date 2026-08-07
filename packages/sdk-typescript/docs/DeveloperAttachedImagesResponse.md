
# DeveloperAttachedImagesResponse


## Properties

Name | Type
------------ | -------------
`imageIds` | Array&lt;number&gt;
`imageOrder` | Array&lt;number&gt;
`message` | string
`skippedAlreadyAttachedIds` | Array&lt;number&gt;

## Example

```typescript
import type { DeveloperAttachedImagesResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "imageIds": [108],
  "imageOrder": [107,108],
  "message": Existing Discord images attached to version.,
  "skippedAlreadyAttachedIds": [107],
} satisfies DeveloperAttachedImagesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperAttachedImagesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
