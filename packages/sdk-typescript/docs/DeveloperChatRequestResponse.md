
# DeveloperChatRequestResponse

An existing direct-state summary, a newly or previously resolved thread, or a newly created message when the convenience route sends into an active thread.

## Properties

Name | Type
------------ | -------------
`directStatus` | string
`threadId` | number
`createdAt` | Date
`createdById` | number
`directRequesterId` | number
`hasUnread` | boolean
`id` | number
`imagePath` | string
`kind` | string
`lastMessage` | [DeveloperChatMessageSummary](DeveloperChatMessageSummary.md)
`lastMessageAt` | Date
`participants` | [Array&lt;DeveloperChatParticipant&gt;](DeveloperChatParticipant.md)
`title` | string
`updatedAt` | Date
`viewer` | [DeveloperChatViewerState](DeveloperChatViewerState.md)
`attachments` | [Array&lt;DeveloperChatAttachment&gt;](DeveloperChatAttachment.md)
`content` | string
`mentions` | { [key: string]: number; }
`reactions` | [Array&lt;DeveloperChatReaction&gt;](DeveloperChatReaction.md)
`replyTo` | [DeveloperChatReply](DeveloperChatReply.md)
`sender` | [DeveloperChatUser](DeveloperChatUser.md)
`senderId` | number

## Example

```typescript
import type { DeveloperChatRequestResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "directStatus": null,
  "threadId": 81,
  "createdAt": null,
  "createdById": 42,
  "directRequesterId": null,
  "hasUnread": true,
  "id": 501,
  "imagePath": /uploads/chat/group-81.webp?token=temporary,
  "kind": GROUP,
  "lastMessage": null,
  "lastMessageAt": null,
  "participants": null,
  "title": Release artwork,
  "updatedAt": null,
  "viewer": null,
  "attachments": null,
  "content": Here is the finished render, @aurora.,
  "mentions": {aurora=42},
  "reactions": null,
  "replyTo": null,
  "sender": null,
  "senderId": 42,
} satisfies DeveloperChatRequestResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatRequestResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
