
# CollabCoverImage

Collab Cover Image used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`external` | boolean
`filePath` | string
`height` | number
`id` | number
`modelId` | number
`rating` | string
`sourceModelId` | number
`title` | string
`variants` | { [key: string]: any; }
`width` | number

## Example

```typescript
import type { CollabCoverImage } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "external": null,
  "filePath": null,
  "height": null,
  "id": null,
  "modelId": null,
  "rating": null,
  "sourceModelId": null,
  "title": null,
  "variants": null,
  "width": null,
} satisfies CollabCoverImage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabCoverImage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
