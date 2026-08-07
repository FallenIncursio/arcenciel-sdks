
# DeveloperStoredImagesUploadResponse


## Properties

Name | Type
------------ | -------------
`error` | string
`images` | [Array&lt;DeveloperManagedImage&gt;](DeveloperManagedImage.md)
`message` | string

## Example

```typescript
import type { DeveloperStoredImagesUploadResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": One uploaded image was invalid; one image was accepted.,
  "images": null,
  "message": Images uploaded successfully.,
} satisfies DeveloperStoredImagesUploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperStoredImagesUploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
