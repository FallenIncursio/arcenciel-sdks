
# CreatorStatsResponseReactions

Structured reactions details for this creator stats response.

## Properties

Name | Type
------------ | -------------
`dislikes` | number
`hearts` | number
`likes` | number

## Example

```typescript
import type { CreatorStatsResponseReactions } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "dislikes": null,
  "hearts": null,
  "likes": null,
} satisfies CreatorStatsResponseReactions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatorStatsResponseReactions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
