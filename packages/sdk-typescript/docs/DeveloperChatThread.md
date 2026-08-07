
# DeveloperChatThread


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`createdById` | number
`directRequesterId` | number
`directStatus` | string
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

## Example

```typescript
import type { DeveloperChatThread } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "createdById": 42,
  "directRequesterId": null,
  "directStatus": null,
  "hasUnread": true,
  "id": 81,
  "imagePath": /uploads/chat/group-81.webp?token=temporary,
  "kind": GROUP,
  "lastMessage": null,
  "lastMessageAt": null,
  "participants": null,
  "title": Release artwork,
  "updatedAt": null,
  "viewer": null,
} satisfies DeveloperChatThread

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatThread
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
