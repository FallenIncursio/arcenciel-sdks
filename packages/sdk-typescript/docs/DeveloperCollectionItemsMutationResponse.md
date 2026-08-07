
# DeveloperCollectionItemsMutationResponse


## Properties

Name | Type
------------ | -------------
`added` | Array&lt;number&gt;
`addedCount` | number
`collectionId` | number
`createdItemIds` | Array&lt;number&gt;
`duplicate` | Array&lt;number&gt;
`duplicateCount` | number
`missing` | Array&lt;number&gt;
`missingCount` | number
`type` | string

## Example

```typescript
import type { DeveloperCollectionItemsMutationResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "added": [52,61],
  "addedCount": 2,
  "collectionId": 84,
  "createdItemIds": [701,702],
  "duplicate": [18],
  "duplicateCount": 1,
  "missing": [999999],
  "missingCount": 1,
  "type": MODEL,
} satisfies DeveloperCollectionItemsMutationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperCollectionItemsMutationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
