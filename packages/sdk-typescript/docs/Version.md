
# Version

Versions item used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`aboutThisVersion` | string
`activationTags` | Array&lt;string&gt;
`baseModel` | string
`downloadCount` | number
`earlyAccess` | [VersionEarlyAccess](VersionEarlyAccess.md)
`externalDownloadUrl` | string
`fileName` | string
`filePath` | string
`fileScanEngineVersion` | string
`fileScanMeta` | object
`fileScanReason` | string
`fileScanSource` | string
`fileScanStatus` | string
`fileScannedAt` | Date
`fileSizeKb` | number
`id` | number
`imageOrder` | Array&lt;number&gt;
`images` | [Array&lt;Image&gt;](Image.md)
`originalName` | string
`publishAt` | Date
`sha256` | string
`sha256webui` | string
`status` | string
`supporterEarlyAccessEnabled` | boolean
`trainingMetadataSummary` | [VersionTrainingMetadataSummary](VersionTrainingMetadataSummary.md)
`versionName` | string

## Example

```typescript
import type { Version } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "aboutThisVersion": null,
  "activationTags": null,
  "baseModel": null,
  "downloadCount": null,
  "earlyAccess": null,
  "externalDownloadUrl": null,
  "fileName": null,
  "filePath": null,
  "fileScanEngineVersion": null,
  "fileScanMeta": null,
  "fileScanReason": null,
  "fileScanSource": null,
  "fileScanStatus": null,
  "fileScannedAt": null,
  "fileSizeKb": null,
  "id": null,
  "imageOrder": null,
  "images": null,
  "originalName": null,
  "publishAt": null,
  "sha256": null,
  "sha256webui": null,
  "status": null,
  "supporterEarlyAccessEnabled": null,
  "trainingMetadataSummary": null,
  "versionName": null,
} satisfies Version

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Version
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
