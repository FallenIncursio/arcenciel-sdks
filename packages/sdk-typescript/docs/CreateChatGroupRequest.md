
# CreateChatGroupRequest


## Properties

Name | Type
------------ | -------------
`title` | string
`userIds` | Set&lt;number&gt;

## Example

```typescript
import type { CreateChatGroupRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "userIds": null,
} satisfies CreateChatGroupRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateChatGroupRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
