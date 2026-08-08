
# ModelVersionChunkUploadError

Fields describing model version chunk upload error in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`error` | string
`errorCode` | string
`retryable` | boolean

## Example

```typescript
import type { ModelVersionChunkUploadError } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": Chunk 0 must be 8388608 bytes,
  "errorCode": UPLOAD_CHUNK_ABORTED,
  "retryable": true,
} satisfies ModelVersionChunkUploadError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionChunkUploadError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
