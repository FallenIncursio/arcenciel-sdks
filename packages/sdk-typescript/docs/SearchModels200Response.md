
# SearchModels200Response

200 response for api models search used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;Model&gt;](Model.md)
`limit` | number
`page` | number
`showcased` | [Array&lt;Model&gt;](Model.md)
`totalCount` | number
`totalPages` | number

## Example

```typescript
import type { SearchModels200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "limit": null,
  "page": null,
  "showcased": null,
  "totalCount": null,
  "totalPages": null,
} satisfies SearchModels200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchModels200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


