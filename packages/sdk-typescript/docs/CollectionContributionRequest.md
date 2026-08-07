
# CollectionContributionRequest

Collection Contribution Request used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`id` | number
`message` | string
`respondedAt` | Date
`respondedBy` | [DeveloperUserSummary](DeveloperUserSummary.md)
`status` | string
`user` | [DeveloperUserSummary](DeveloperUserSummary.md)

## Example

```typescript
import type { CollectionContributionRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "id": null,
  "message": null,
  "respondedAt": null,
  "respondedBy": null,
  "status": null,
  "user": null,
} satisfies CollectionContributionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionContributionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
