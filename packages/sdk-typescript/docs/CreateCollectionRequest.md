
# CreateCollectionRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`allowCollaborators` | boolean
`coverImage` | string
`coverImageRating` | string
`description` | string
`itemPlacement` | string
`name` | string
`type` | string
`visibility` | string

## Example

```typescript
import type { CreateCollectionRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowCollaborators": null,
  "coverImage": null,
  "coverImageRating": null,
  "description": null,
  "itemPlacement": null,
  "name": null,
  "type": null,
  "visibility": null,
} satisfies CreateCollectionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCollectionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
