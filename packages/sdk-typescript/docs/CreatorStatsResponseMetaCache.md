
# CreatorStatsResponseMetaCache

Cache accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`hit` | boolean
`ttlMs` | number

## Example

```typescript
import type { CreatorStatsResponseMetaCache } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "expiresAt": null,
  "hit": null,
  "ttlMs": null,
} satisfies CreatorStatsResponseMetaCache

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatorStatsResponseMetaCache
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
