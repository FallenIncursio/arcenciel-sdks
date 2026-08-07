
# DeveloperChatPresenceResponse


## Properties

Name | Type
------------ | -------------
`data` | [{ [key: string]: DeveloperChatPresenceEntry; }](DeveloperChatPresenceEntry.md)

## Example

```typescript
import type { DeveloperChatPresenceResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": {"42":{"lastSeenAt":"2026-08-07T10:00:00.000Z","online":true}},
} satisfies DeveloperChatPresenceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatPresenceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
