
# DeveloperModelVersionResourceCandidate


## Properties

Name | Type
------------ | -------------
`baseModel` | string
`downloadUrl` | string
`fileName` | string
`fileScanStatus` | string
`fileSizeKb` | number
`modelId` | number
`modelType` | string
`openUrl` | string
`previewImage` | [ModelVersionResourcePreviewImage](ModelVersionResourcePreviewImage.md)
`publishAt` | Date
`targetType` | string
`title` | string
`versionId` | number
`versionName` | string
`versionStatus` | string

## Example

```typescript
import type { DeveloperModelVersionResourceCandidate } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "baseModel": SDXL 1.0,
  "downloadUrl": /api/models/52/versions/321/download,
  "fileName": portrait-detailer.safetensors,
  "fileScanStatus": CLEAN,
  "fileSizeKb": 131072,
  "modelId": 52,
  "modelType": LORA,
  "openUrl": /models/52#version-321,
  "previewImage": null,
  "publishAt": null,
  "targetType": local,
  "title": Portrait Detailer,
  "versionId": 321,
  "versionName": v2.0,
  "versionStatus": PUBLISHED,
} satisfies DeveloperModelVersionResourceCandidate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperModelVersionResourceCandidate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
