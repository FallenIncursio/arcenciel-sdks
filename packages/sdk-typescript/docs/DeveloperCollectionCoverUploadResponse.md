
# DeveloperCollectionCoverUploadResponse


## Properties

Name | Type
------------ | -------------
`path` | string
`rating` | string

## Example

```typescript
import type { DeveloperCollectionCoverUploadResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "path": uploads/collections/cover.webp,
  "rating": safe,
} satisfies DeveloperCollectionCoverUploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperCollectionCoverUploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
