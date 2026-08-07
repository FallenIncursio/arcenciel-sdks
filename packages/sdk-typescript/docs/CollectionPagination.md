
# CollectionPagination

Collection Pagination used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`images` | [CollectionItemPage](CollectionItemPage.md)
`models` | [CollectionItemPage](CollectionItemPage.md)

## Example

```typescript
import type { CollectionPagination } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "images": null,
  "models": null,
} satisfies CollectionPagination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionPagination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
