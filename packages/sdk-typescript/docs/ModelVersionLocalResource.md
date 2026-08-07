
# ModelVersionLocalResource

Required item used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`confidence` | number
`edgeId` | number
`evidence` | object
`id` | number
`kind` | string
`management` | [ModelVersionResourceBaseManagement](ModelVersionResourceBaseManagement.md)
`source` | string
`status` | string
`strength` | number
`targetType` | string
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
`title` | string
`versionId` | number
`versionName` | string
`versionStatus` | string

## Example

```typescript
import type { ModelVersionLocalResource } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "confidence": null,
  "edgeId": null,
  "evidence": null,
  "id": null,
  "kind": null,
  "management": null,
  "source": null,
  "status": null,
  "strength": null,
  "targetType": null,
  "baseModel": null,
  "downloadUrl": null,
  "fileName": null,
  "fileScanStatus": null,
  "fileSizeKb": null,
  "modelId": null,
  "modelType": null,
  "openUrl": null,
  "previewImage": null,
  "publishAt": null,
  "title": null,
  "versionId": null,
  "versionName": null,
  "versionStatus": null,
} satisfies ModelVersionLocalResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionLocalResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
