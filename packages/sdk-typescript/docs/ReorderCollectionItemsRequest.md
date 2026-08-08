
# ReorderCollectionItemsRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`order` | [Array&lt;ReorderCollectionItemsRequestOrderInner&gt;](ReorderCollectionItemsRequestOrderInner.md)

## Example

```typescript
import type { ReorderCollectionItemsRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "order": null,
} satisfies ReorderCollectionItemsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReorderCollectionItemsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
