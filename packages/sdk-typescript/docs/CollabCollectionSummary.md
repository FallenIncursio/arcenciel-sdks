
# CollabCollectionSummary

Fields describing collab collection summary in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`coverImage` | string
`coverImageRating` | string
`id` | number
`modelCount` | number
`name` | string
`slug` | string
`visibility` | string

## Example

```typescript
import type { CollabCollectionSummary } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "coverImage": null,
  "coverImageRating": null,
  "id": null,
  "modelCount": null,
  "name": null,
  "slug": null,
  "visibility": null,
} satisfies CollabCollectionSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabCollectionSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
