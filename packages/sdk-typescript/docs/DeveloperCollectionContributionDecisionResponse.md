
# DeveloperCollectionContributionDecisionResponse


## Properties

Name | Type
------------ | -------------
`collaborator` | [CollectionCollaboratorSummary](CollectionCollaboratorSummary.md)
`request` | [CollectionContributionRequest](CollectionContributionRequest.md)

## Example

```typescript
import type { DeveloperCollectionContributionDecisionResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "collaborator": null,
  "request": null,
} satisfies DeveloperCollectionContributionDecisionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperCollectionContributionDecisionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
