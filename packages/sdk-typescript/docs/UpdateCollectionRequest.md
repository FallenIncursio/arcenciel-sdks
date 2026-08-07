
# UpdateCollectionRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`allowCollaborators` | boolean
`coverImage` | string
`coverImageRating` | string
`description` | string
`name` | string
`slug` | string
`visibility` | string

## Example

```typescript
import type { UpdateCollectionRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowCollaborators": null,
  "coverImage": null,
  "coverImageRating": null,
  "description": null,
  "name": null,
  "slug": null,
  "visibility": null,
} satisfies UpdateCollectionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCollectionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
