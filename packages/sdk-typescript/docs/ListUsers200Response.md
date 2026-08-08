
# ListUsers200Response

Fields describing 200 response for api users in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;User&gt;](User.md)
`hasMore` | boolean
`limit` | number
`page` | number
`total` | number

## Example

```typescript
import type { ListUsers200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "hasMore": null,
  "limit": null,
  "page": null,
  "total": null,
} satisfies ListUsers200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListUsers200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
