
# CollectionPermissions

Collection Permissions used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`canContribute` | boolean
`canManageCollaborators` | boolean
`isCollaborator` | boolean
`isOwner` | boolean

## Example

```typescript
import type { CollectionPermissions } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "canContribute": null,
  "canManageCollaborators": null,
  "isCollaborator": null,
  "isOwner": null,
} satisfies CollectionPermissions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionPermissions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
