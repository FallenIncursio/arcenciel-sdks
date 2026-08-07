
# DeveloperComment


## Properties

Name | Type
------------ | -------------
`author` | [DeveloperUserSummary](DeveloperUserSummary.md)
`authorId` | number
`content` | string
`createdAt` | Date
`id` | number
`isDeleted` | boolean
`mentions` | { [key: string]: any; }
`parentCommentId` | number
`targetId` | number
`targetType` | string
`threadId` | number
`updatedAt` | Date

## Example

```typescript
import type { DeveloperComment } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "author": null,
  "authorId": 42,
  "content": Beautiful composition!,
  "createdAt": 2026-08-07T10:00Z,
  "id": 912,
  "isDeleted": false,
  "mentions": null,
  "parentCommentId": null,
  "targetId": 108,
  "targetType": IMAGE,
  "threadId": 912,
  "updatedAt": 2026-08-07T10:00Z,
} satisfies DeveloperComment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperComment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
