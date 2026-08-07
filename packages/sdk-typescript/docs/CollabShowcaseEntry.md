
# CollabShowcaseEntry

Collab Showcase Entry used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`characterName` | string
`entryId` | string
`modelId` | number
`modelTitle` | string
`modelUrl` | string
`participantId` | number
`profilePicturePath` | string
`profilePictureUrl` | string
`profileUrl` | string
`sourceKind` | string
`sourceTitle` | string
`status` | string
`submissionId` | number
`thumbnailPath` | string
`thumbnailUrl` | string
`userId` | number
`username` | string

## Example

```typescript
import type { CollabShowcaseEntry } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "characterName": null,
  "entryId": null,
  "modelId": null,
  "modelTitle": null,
  "modelUrl": null,
  "participantId": null,
  "profilePicturePath": null,
  "profilePictureUrl": null,
  "profileUrl": null,
  "sourceKind": null,
  "sourceTitle": null,
  "status": null,
  "submissionId": null,
  "thumbnailPath": null,
  "thumbnailUrl": null,
  "userId": null,
  "username": null,
} satisfies CollabShowcaseEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabShowcaseEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
