
# CollabCreatorPreview

Collab Creator Preview used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`displayName` | string
`localUser` | [DeveloperUserSummary](DeveloperUserSummary.md)

## Example

```typescript
import type { CollabCreatorPreview } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "displayName": null,
  "localUser": null,
} satisfies CollabCreatorPreview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabCreatorPreview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
