
# CollectionModelItem

Fields describing collection model item in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`addedAt` | Date
`addedBy` | [DeveloperUserSummary](DeveloperUserSummary.md)
`id` | number
`model` | [Model](Model.md)
`note` | string
`order` | number

## Example

```typescript
import type { CollectionModelItem } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "addedAt": null,
  "addedBy": null,
  "id": null,
  "model": null,
  "note": null,
  "order": null,
} satisfies CollectionModelItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionModelItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
