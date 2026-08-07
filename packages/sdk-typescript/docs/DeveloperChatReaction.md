
# DeveloperChatReaction


## Properties

Name | Type
------------ | -------------
`count` | number
`emoteName` | string
`me` | boolean
`users` | [Array&lt;DeveloperChatUser&gt;](DeveloperChatUser.md)

## Example

```typescript
import type { DeveloperChatReaction } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "count": 2,
  "emoteName": heart,
  "me": true,
  "users": null,
} satisfies DeveloperChatReaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatReaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
