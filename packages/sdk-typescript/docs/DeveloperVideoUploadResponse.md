
# DeveloperVideoUploadResponse


## Properties

Name | Type
------------ | -------------
`error` | string
`message` | string
`videoIds` | Array&lt;number&gt;

## Example

```typescript
import type { DeveloperVideoUploadResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": One uploaded video was invalid; one video was accepted.,
  "message": Videos uploaded,
  "videoIds": [73,74],
} satisfies DeveloperVideoUploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperVideoUploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
