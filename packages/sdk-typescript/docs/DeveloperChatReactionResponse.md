
# DeveloperChatReactionResponse


## Properties

Name | Type
------------ | -------------
`messageId` | number
`reactions` | [Array&lt;DeveloperChatReaction&gt;](DeveloperChatReaction.md)

## Example

```typescript
import type { DeveloperChatReactionResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "messageId": 501,
  "reactions": null,
} satisfies DeveloperChatReactionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatReactionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
