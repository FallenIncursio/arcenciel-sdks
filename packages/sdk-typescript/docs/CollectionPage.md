
# CollectionPage

Fields describing collection page in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;CollectionSummary&gt;](CollectionSummary.md)
`limit` | number
`page` | number
`totalCount` | number
`totalPages` | number

## Example

```typescript
import type { CollectionPage } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "limit": null,
  "page": null,
  "totalCount": null,
  "totalPages": null,
} satisfies CollectionPage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionPage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
