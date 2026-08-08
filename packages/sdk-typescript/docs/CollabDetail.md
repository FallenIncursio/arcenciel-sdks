
# CollabDetail

Collab Detail value documented for this operation.

## Properties

Name | Type
------------ | -------------
`announcementEnabled` | boolean
`availabilityCounts` | [CollabAvailabilityCounts](CollabAvailabilityCounts.md)
`bannerImage` | string
`bannerImageRating` | string
`category` | string
`categoryLabel` | string
`collection` | [CollabCollectionSummary](CollabCollectionSummary.md)
`collectionManagedByCollab` | boolean
`completeness` | string
`coverImages` | [Array&lt;CollabCoverImage&gt;](CollabCoverImage.md)
`createdAt` | Date
`createdBy` | [DeveloperUserSummary](DeveloperUserSummary.md)
`creatorPreviews` | [Array&lt;CollabCreatorPreview&gt;](CollabCreatorPreview.md)
`description` | string
`discordMessageUrl` | string
`evidenceLevel` | string
`historicalScale` | string
`historySummary` | string
`id` | number
`matchWindowEnd` | Date
`matchWindowStart` | Date
`matchingMode` | string
`mode` | string
`participantCount` | number
`releaseAt` | Date
`releaseEndAt` | Date
`rules` | string
`slug` | string
`status` | string
`submissionCount` | number
`title` | string
`updatedAt` | Date
`visibility` | string
`currentParticipant` | [CollabParticipant](CollabParticipant.md)
`evidence` | Array&lt;{ [key: string]: any; }&gt;
`historicalParticipants` | Array&lt;{ [key: string]: any; }&gt;
`participants` | [Array&lt;CollabParticipant&gt;](CollabParticipant.md)
`permissions` | [CollabPermissions](CollabPermissions.md)
`updatedBy` | [DeveloperUserSummary](DeveloperUserSummary.md)

## Example

```typescript
import type { CollabDetail } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "announcementEnabled": null,
  "availabilityCounts": null,
  "bannerImage": null,
  "bannerImageRating": null,
  "category": null,
  "categoryLabel": null,
  "collection": null,
  "collectionManagedByCollab": null,
  "completeness": null,
  "coverImages": null,
  "createdAt": null,
  "createdBy": null,
  "creatorPreviews": null,
  "description": null,
  "discordMessageUrl": null,
  "evidenceLevel": null,
  "historicalScale": null,
  "historySummary": null,
  "id": null,
  "matchWindowEnd": null,
  "matchWindowStart": null,
  "matchingMode": null,
  "mode": null,
  "participantCount": null,
  "releaseAt": null,
  "releaseEndAt": null,
  "rules": null,
  "slug": null,
  "status": null,
  "submissionCount": null,
  "title": null,
  "updatedAt": null,
  "visibility": null,
  "currentParticipant": null,
  "evidence": null,
  "historicalParticipants": null,
  "participants": null,
  "permissions": null,
  "updatedBy": null,
} satisfies CollabDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
