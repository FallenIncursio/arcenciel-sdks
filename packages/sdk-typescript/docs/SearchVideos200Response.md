
# SearchVideos200Response

Fields describing 200 response for api videos search in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;Video&gt;](Video.md)
`hasMore` | boolean
`limit` | number
`nextCursor` | string
`page` | number
`showcased` | [Array&lt;Video&gt;](Video.md)
`totalCount` | number
`totalPages` | number

## Example

```typescript
import type { SearchVideos200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "hasMore": null,
  "limit": null,
  "nextCursor": null,
  "page": null,
  "showcased": null,
  "totalCount": null,
  "totalPages": null,
} satisfies SearchVideos200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchVideos200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
