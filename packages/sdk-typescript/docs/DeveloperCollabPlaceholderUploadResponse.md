
# DeveloperCollabPlaceholderUploadResponse


## Properties

Name | Type
------------ | -------------
`participant` | [CollabParticipant](CollabParticipant.md)
`path` | string
`rating` | string

## Example

```typescript
import type { DeveloperCollabPlaceholderUploadResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "participant": null,
  "path": uploads/collabs/placeholder.webp,
  "rating": safe,
} satisfies DeveloperCollabPlaceholderUploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperCollabPlaceholderUploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
