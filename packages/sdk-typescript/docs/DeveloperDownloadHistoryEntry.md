
# DeveloperDownloadHistoryEntry


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`id` | number
`userId` | number
`version` | [Version](Version.md)
`versionId` | number
`viaLink` | boolean

## Example

```typescript
import type { DeveloperDownloadHistoryEntry } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": 2026-08-07T10:00Z,
  "id": 8001,
  "userId": 42,
  "version": null,
  "versionId": 321,
  "viaLink": false,
} satisfies DeveloperDownloadHistoryEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperDownloadHistoryEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
