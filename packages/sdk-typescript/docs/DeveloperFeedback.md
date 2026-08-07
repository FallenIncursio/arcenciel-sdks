
# DeveloperFeedback


## Properties

Name | Type
------------ | -------------
`assignee` | [DeveloperFeedbackActor](DeveloperFeedbackActor.md)
`attachments` | [Array&lt;DeveloperFeedbackAttachment&gt;](DeveloperFeedbackAttachment.md)
`category` | string
`contactDiscord` | string
`createdAt` | Date
`description` | string
`internalNotes` | string
`priority` | string
`publicId` | string
`reporter` | [DeveloperFeedbackActor](DeveloperFeedbackActor.md)
`resolvedAt` | Date
`sourcePath` | string
`sourceUrl` | string
`status` | string
`title` | string
`updatedAt` | Date
`updatedBy` | [DeveloperFeedbackActor](DeveloperFeedbackActor.md)

## Example

```typescript
import type { DeveloperFeedback } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "assignee": null,
  "attachments": null,
  "category": BUG,
  "contactDiscord": aurora,
  "createdAt": 2026-08-07T10:00Z,
  "description": The browser remains at 99 percent after the final chunk was transferred.,
  "internalNotes": null,
  "priority": MEDIUM,
  "publicId": FB-9A2C13,
  "reporter": null,
  "resolvedAt": null,
  "sourcePath": /models/upload,
  "sourceUrl": https://arcenciel.io/models/upload,
  "status": OPEN,
  "title": Upload progress stalls near completion,
  "updatedAt": 2026-08-07T10:00Z,
  "updatedBy": null,
} satisfies DeveloperFeedback

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperFeedback
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
