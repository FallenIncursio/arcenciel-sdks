
# CollectionDetail

Collection detail filtered for the caller. Manager-only pendingRequests may be absent for other callers.

## Properties

Name | Type
------------ | -------------
`allowCollaborators` | boolean
`collaborators` | [Array&lt;CollectionCollaboratorSummary&gt;](CollectionCollaboratorSummary.md)
`contributionRequest` | [CollectionContributionRequest](CollectionContributionRequest.md)
`coverImage` | string
`coverImageRating` | string
`createdAt` | Date
`description` | string
`favoriteCount` | number
`favoritedBy` | [Array&lt;CollectionDetailFavoritedByInner&gt;](CollectionDetailFavoritedByInner.md)
`featured` | string
`id` | number
`imageItems` | [Array&lt;CollectionImageItem&gt;](CollectionImageItem.md)
`itemPlacement` | string
`modelItems` | [Array&lt;CollectionModelItem&gt;](CollectionModelItem.md)
`name` | string
`owner` | [DeveloperUserSummary](DeveloperUserSummary.md)
`pagination` | [CollectionPagination](CollectionPagination.md)
`pendingRequests` | [Array&lt;CollectionContributionRequest&gt;](CollectionContributionRequest.md)
`permissions` | [CollectionPermissions](CollectionPermissions.md)
`selfFavorited` | boolean
`slug` | string
`stats` | [CollectionStats](CollectionStats.md)
`type` | string
`visibility` | string

## Example

```typescript
import type { CollectionDetail } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowCollaborators": null,
  "collaborators": null,
  "contributionRequest": null,
  "coverImage": null,
  "coverImageRating": null,
  "createdAt": null,
  "description": null,
  "favoriteCount": null,
  "favoritedBy": null,
  "featured": null,
  "id": null,
  "imageItems": null,
  "itemPlacement": null,
  "modelItems": null,
  "name": null,
  "owner": null,
  "pagination": null,
  "pendingRequests": null,
  "permissions": null,
  "selfFavorited": null,
  "slug": null,
  "stats": null,
  "type": null,
  "visibility": null,
} satisfies CollectionDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
