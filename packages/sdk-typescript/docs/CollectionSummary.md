
# CollectionSummary

Caller-safe collection summary. Integrations must ignore new presentation and aggregate fields.

## Properties

Name | Type
------------ | -------------
`allowCollaborators` | boolean
`collaboratorCount` | number
`collaborators` | [Array&lt;CollectionCollaboratorSummary&gt;](CollectionCollaboratorSummary.md)
`coverImage` | string
`coverImageRating` | string
`createdAt` | Date
`description` | string
`favoriteCount` | number
`favoritedBy` | [Array&lt;CollectionDetailFavoritedByInner&gt;](CollectionDetailFavoritedByInner.md)
`featured` | string
`id` | number
`imageCount` | number
`itemCount` | number
`itemPlacement` | string
`lastUpdated` | Date
`modelCount` | number
`name` | string
`owner` | [DeveloperUserSummary](DeveloperUserSummary.md)
`selfFavorited` | boolean
`slug` | string
`type` | string
`visibility` | string

## Example

```typescript
import type { CollectionSummary } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowCollaborators": null,
  "collaboratorCount": null,
  "collaborators": null,
  "coverImage": null,
  "coverImageRating": null,
  "createdAt": null,
  "description": null,
  "favoriteCount": null,
  "favoritedBy": null,
  "featured": null,
  "id": null,
  "imageCount": null,
  "itemCount": null,
  "itemPlacement": null,
  "lastUpdated": null,
  "modelCount": null,
  "name": null,
  "owner": null,
  "selfFavorited": null,
  "slug": null,
  "type": null,
  "visibility": null,
} satisfies CollectionSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
