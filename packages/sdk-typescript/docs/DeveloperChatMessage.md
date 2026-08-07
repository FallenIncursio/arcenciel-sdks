
# DeveloperChatMessage


## Properties

Name | Type
------------ | -------------
`attachments` | [Array&lt;DeveloperChatAttachment&gt;](DeveloperChatAttachment.md)
`content` | string
`createdAt` | Date
`id` | number
`mentions` | { [key: string]: number; }
`reactions` | [Array&lt;DeveloperChatReaction&gt;](DeveloperChatReaction.md)
`replyTo` | [DeveloperChatReply](DeveloperChatReply.md)
`sender` | [DeveloperChatUser](DeveloperChatUser.md)
`senderId` | number
`threadId` | number

## Example

```typescript
import type { DeveloperChatMessage } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "attachments": null,
  "content": Here is the finished render, @aurora.,
  "createdAt": null,
  "id": 501,
  "mentions": {"aurora":42},
  "reactions": null,
  "replyTo": null,
  "sender": null,
  "senderId": 42,
  "threadId": 81,
} satisfies DeveloperChatMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
