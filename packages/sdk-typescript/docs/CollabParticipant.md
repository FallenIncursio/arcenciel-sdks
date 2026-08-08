
# CollabParticipant

Fields describing collab participant in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`characterName` | string
`createdAt` | Date
`displayOrder` | number
`id` | number
`notes` | string
`placeholderImage` | string
`placeholderImageDescription` | string
`placeholderImageRating` | string
`placeholderImageSourceUrl` | string
`requestedAt` | Date
`respondedAt` | Date
`sourceTitle` | string
`status` | string
`submissions` | Array&lt;{ [key: string]: any; }&gt;
`updatedAt` | Date
`user` | [DeveloperUserSummary](DeveloperUserSummary.md)
`userId` | number

## Example

```typescript
import type { CollabParticipant } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "characterName": null,
  "createdAt": null,
  "displayOrder": null,
  "id": null,
  "notes": null,
  "placeholderImage": null,
  "placeholderImageDescription": null,
  "placeholderImageRating": null,
  "placeholderImageSourceUrl": null,
  "requestedAt": null,
  "respondedAt": null,
  "sourceTitle": null,
  "status": null,
  "submissions": null,
  "updatedAt": null,
  "user": null,
  "userId": null,
} satisfies CollabParticipant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabParticipant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
