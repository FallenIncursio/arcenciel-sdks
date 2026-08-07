
# Emote

Emote used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`animated` | boolean
`id` | number
`name` | string
`url` | string

## Example

```typescript
import type { Emote } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "animated": false,
  "id": 7,
  "name": poggers,
  "url": /uploads/emotes/poggers.png,
} satisfies Emote

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Emote
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
