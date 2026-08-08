
# CollectionCollaboratorSummary

Fields describing collection collaborator summary in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`id` | number
`role` | string
`user` | [DeveloperUserSummary](DeveloperUserSummary.md)
`userId` | number

## Example

```typescript
import type { CollectionCollaboratorSummary } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "role": null,
  "user": null,
  "userId": null,
} satisfies CollectionCollaboratorSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionCollaboratorSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
