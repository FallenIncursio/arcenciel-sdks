
# DeveloperNotification


## Properties

Name | Type
------------ | -------------
`comment` | [DeveloperNotificationComment](DeveloperNotificationComment.md)
`commentId` | number
`createdAt` | Date
`id` | number
`isRead` | boolean
`message` | string
`type` | string
`updatedAt` | Date
`userId` | number

## Example

```typescript
import type { DeveloperNotification } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "comment": null,
  "commentId": 912,
  "createdAt": 2026-08-07T10:00Z,
  "id": 501,
  "isRead": false,
  "message": A creator commented on your model.,
  "type": NEW_COMMENT,
  "updatedAt": 2026-08-07T10:00Z,
  "userId": 42,
} satisfies DeveloperNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
