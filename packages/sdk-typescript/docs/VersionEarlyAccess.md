
# VersionEarlyAccess

Early Access accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`canDownload` | boolean
`canDownloadViaLink` | boolean
`enabled` | boolean
`reason` | string
`startsAt` | Date
`state` | string
`windowHours` | number

## Example

```typescript
import type { VersionEarlyAccess } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "canDownload": null,
  "canDownloadViaLink": null,
  "enabled": null,
  "reason": null,
  "startsAt": null,
  "state": null,
  "windowHours": 72,
} satisfies VersionEarlyAccess

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VersionEarlyAccess
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
