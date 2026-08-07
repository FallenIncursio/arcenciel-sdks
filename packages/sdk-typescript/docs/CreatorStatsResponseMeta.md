
# CreatorStatsResponseMeta

Meta accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`accessTier` | string
`advancedAccess` | boolean
`cache` | [CreatorStatsResponseMetaCache](CreatorStatsResponseMetaCache.md)
`maxWindowDays` | number
`rangeClamped` | boolean
`standardWindowDays` | number

## Example

```typescript
import type { CreatorStatsResponseMeta } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "accessTier": null,
  "advancedAccess": null,
  "cache": null,
  "maxWindowDays": null,
  "rangeClamped": null,
  "standardWindowDays": null,
} satisfies CreatorStatsResponseMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatorStatsResponseMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
