
# DeveloperChatParticipant


## Properties

Name | Type
------------ | -------------
`archivedAt` | Date
`role` | string
`state` | string
`user` | [DeveloperChatUser](DeveloperChatUser.md)
`userId` | number

## Example

```typescript
import type { DeveloperChatParticipant } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "archivedAt": null,
  "role": MEMBER,
  "state": ACTIVE,
  "user": null,
  "userId": 18,
} satisfies DeveloperChatParticipant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatParticipant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
