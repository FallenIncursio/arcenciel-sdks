
# DeveloperChatViewerState


## Properties

Name | Type
------------ | -------------
`archivedAt` | Date
`lastReadAt` | Date
`lastReadMessageId` | number
`role` | string
`state` | string

## Example

```typescript
import type { DeveloperChatViewerState } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "archivedAt": null,
  "lastReadAt": null,
  "lastReadMessageId": 498,
  "role": MEMBER,
  "state": ACTIVE,
} satisfies DeveloperChatViewerState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatViewerState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
