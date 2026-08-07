
# CollectionStats

Collection Stats used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`imageCount` | number
`lastUpdated` | Date
`modelCount` | number
`totalItems` | number

## Example

```typescript
import type { CollectionStats } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "imageCount": null,
  "lastUpdated": null,
  "modelCount": null,
  "totalItems": null,
} satisfies CollectionStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
