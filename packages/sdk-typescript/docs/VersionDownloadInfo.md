
# VersionDownloadInfo

Stable JSON contract for third-party model download clients.

## Properties

Name | Type
------------ | -------------
`allowedRedirectHosts` | Array&lt;string&gt;
`available` | boolean
`blocked` | boolean
`downloadUrl` | string
`earlyAccess` | [VersionEarlyAccess](VersionEarlyAccess.md)
`externalDownloadUrl` | string
`fileName` | string
`fileScanReason` | string
`fileScanStatus` | string
`fileSizeKb` | number
`modelId` | number
`originalName` | string
`registerUrl` | string
`sha256` | string
`sha256webui` | string
`source` | string
`status` | string
`versionId` | number

## Example

```typescript
import type { VersionDownloadInfo } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowedRedirectHosts": null,
  "available": null,
  "blocked": null,
  "downloadUrl": null,
  "earlyAccess": null,
  "externalDownloadUrl": null,
  "fileName": null,
  "fileScanReason": null,
  "fileScanStatus": null,
  "fileSizeKb": null,
  "modelId": null,
  "originalName": null,
  "registerUrl": null,
  "sha256": null,
  "sha256webui": null,
  "source": null,
  "status": null,
  "versionId": null,
} satisfies VersionDownloadInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VersionDownloadInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
