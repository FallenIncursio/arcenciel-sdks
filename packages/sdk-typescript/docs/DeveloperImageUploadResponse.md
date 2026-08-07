
# DeveloperImageUploadResponse


## Properties

Name | Type
------------ | -------------
`error` | string
`imageIds` | Array&lt;number&gt;
`message` | string

## Example

```typescript
import type { DeveloperImageUploadResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": One uploaded image was invalid; one image was accepted.,
  "imageIds": [108,109],
  "message": Images uploaded successfully.,
} satisfies DeveloperImageUploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperImageUploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
