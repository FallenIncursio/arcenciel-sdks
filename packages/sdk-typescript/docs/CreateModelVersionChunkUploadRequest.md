
# CreateModelVersionChunkUploadRequest

Fields describing create model version chunk upload request in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`aboutThisVersion` | string
`activationTags` | string
`baseModel` | string
`chunkSize` | number
`fileName` | string
`fileSize` | number
`modelId` | number
`supporterEarlyAccessEnabled` | boolean
`versionName` | string

## Example

```typescript
import type { CreateModelVersionChunkUploadRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "aboutThisVersion": Improved natural-light rendering.,
  "activationTags": landscape, natural light,
  "baseModel": SDXL 1.0,
  "chunkSize": 8388608,
  "fileName": landscape-v2.safetensors,
  "fileSize": 16777216,
  "modelId": 42,
  "supporterEarlyAccessEnabled": null,
  "versionName": Landscape v2,
} satisfies CreateModelVersionChunkUploadRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateModelVersionChunkUploadRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
