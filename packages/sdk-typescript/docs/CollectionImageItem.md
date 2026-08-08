
# CollectionImageItem

Fields describing collection image item in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`addedAt` | Date
`addedBy` | [DeveloperUserSummary](DeveloperUserSummary.md)
`id` | number
`image` | [Image](Image.md)
`note` | string
`order` | number

## Example

```typescript
import type { CollectionImageItem } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "addedAt": null,
  "addedBy": null,
  "id": null,
  "image": null,
  "note": null,
  "order": null,
} satisfies CollectionImageItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionImageItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
