
# ModelVersionChunkUploadStatus

`created` has no valid chunks; `uploading` has at least one; `processing` is assembling/creating the version; `completed`, `error`, and `cancelled` are terminal for polling.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { ModelVersionChunkUploadStatus } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies ModelVersionChunkUploadStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionChunkUploadStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
