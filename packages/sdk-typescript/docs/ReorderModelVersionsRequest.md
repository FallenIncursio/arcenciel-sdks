
# ReorderModelVersionsRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`versionIds` | Array&lt;number&gt;

## Example

```typescript
import type { ReorderModelVersionsRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "versionIds": [3,1,2],
} satisfies ReorderModelVersionsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReorderModelVersionsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
