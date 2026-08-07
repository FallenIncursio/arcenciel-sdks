
# DeveloperChatMessageSummary


## Properties

Name | Type
------------ | -------------
`attachments` | [Array&lt;DeveloperChatAttachment&gt;](DeveloperChatAttachment.md)
`content` | string
`createdAt` | Date
`id` | number
`senderId` | number

## Example

```typescript
import type { DeveloperChatMessageSummary } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "attachments": null,
  "content": The new render is ready.,
  "createdAt": null,
  "id": 501,
  "senderId": 42,
} satisfies DeveloperChatMessageSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatMessageSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
