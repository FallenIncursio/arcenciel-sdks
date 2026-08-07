
# ModelVersionChunkUploadSession

Model Version Chunk Upload Session used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`chunkSize` | number
`createdAt` | Date
`error` | string
`expiresAt` | Date
`fileSize` | number
`modelId` | number
`originalName` | string
`receivedBytes` | number
`receivedChunks` | Array&lt;number&gt;
`status` | [ModelVersionChunkUploadStatus](ModelVersionChunkUploadStatus.md)
`totalChunks` | number
`updatedAt` | Date
`uploadId` | string
`versionId` | number

## Example

```typescript
import type { ModelVersionChunkUploadSession } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "chunkSize": null,
  "createdAt": null,
  "error": null,
  "expiresAt": null,
  "fileSize": null,
  "modelId": null,
  "originalName": null,
  "receivedBytes": null,
  "receivedChunks": null,
  "status": null,
  "totalChunks": null,
  "updatedAt": null,
  "uploadId": null,
  "versionId": null,
} satisfies ModelVersionChunkUploadSession

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionChunkUploadSession
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
